(() => {
  "use strict";

  const config = window.YEAR7_MULTIMEDIA_FOLIO;
  const root = document.querySelector("[data-folio-root]");
  if (!config || !root) return;

  const stageById = new Map(config.stages.map(stage => [stage.id, stage]));
  const imageRecords = new Map();
  const previewUrls = new Map();
  const stagesHost = root.querySelector("[data-folio-stages]");
  const saveStatus = root.querySelector("[data-folio-save-status]");
  const progressText = root.querySelector("[data-folio-progress]");
  const nextText = root.querySelector("[data-folio-next]");
  let saveTimer = 0;
  let state = emptyState();
  let databasePromise;

  function emptyState() {
    return {
      courseId: config.courseId,
      schemaVersion: config.schemaVersion,
      updatedAt: null,
      context: { studentName: "", classGroup: "" },
      values: {}
    };
  }

  function setStatus(message, kind = "ok") {
    saveStatus.textContent = message;
    saveStatus.dataset.kind = kind;
  }

  function parseJson(value) {
    try { return JSON.parse(value); }
    catch (_) { return null; }
  }

  function normaliseState(candidate) {
    if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) return null;

    if (candidate.courseId === config.courseId && candidate.values && typeof candidate.values === "object") {
      return {
        courseId: config.courseId,
        schemaVersion: config.schemaVersion,
        updatedAt: typeof candidate.updatedAt === "string" ? candidate.updatedAt : null,
        context: {
          studentName: String(candidate.context?.studentName || ""),
          classGroup: String(candidate.context?.classGroup || "")
        },
        values: Object.fromEntries(Object.entries(candidate.values).map(([key, value]) => [key, String(value ?? "")]))
      };
    }

    const knownFieldIds = new Set(config.stages.flatMap(stage => stage.fields.map(field => field.id)));
    const legacyValues = Object.fromEntries(
      Object.entries(candidate)
        .filter(([key, value]) => knownFieldIds.has(key) && ["string", "number", "boolean"].includes(typeof value))
        .map(([key, value]) => [key, String(value)])
    );
    if (!Object.keys(legacyValues).length) return null;

    return {
      ...emptyState(),
      values: legacyValues
    };
  }

  function loadSavedState() {
    const keys = [config.recordKey, ...config.legacyKeys];
    for (const key of keys) {
      let raw = null;
      try { raw = localStorage.getItem(key); }
      catch (_) {
        setStatus("Browser-local text storage is unavailable. Download work before leaving this page.", "error");
        return emptyState();
      }
      if (!raw) continue;
      const restored = normaliseState(parseJson(raw));
      if (!restored) continue;
      if (key !== config.recordKey) {
        state = restored;
        storeState(true);
        setStatus("Compatible earlier folio text was copied into the current schema.");
      }
      return restored;
    }
    return emptyState();
  }

  function storeState(silent = false) {
    state.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(config.recordKey, JSON.stringify(state));
      if (!silent) {
        const time = new Intl.DateTimeFormat("en-AU", { hour: "numeric", minute: "2-digit" }).format(new Date());
        setStatus(`Saved locally at ${time}.`);
      }
      return true;
    } catch (_) {
      setStatus("This browser could not save the text. Download a backup before leaving.", "error");
      return false;
    }
  }

  function queueSave() {
    window.clearTimeout(saveTimer);
    setStatus("Saving locally...");
    saveTimer = window.setTimeout(() => {
      storeState();
      refreshProgress();
    }, 250);
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function courseHref(href) {
    const previewRoute = location.pathname.replace(/\\/g, "/").includes("/handoff/folio/");
    return previewRoute ? `../../${href}` : href;
  }

  function appendRequiredLabel(label, field) {
    label.append(document.createTextNode(field.label));
    if (field.required) {
      const required = createElement("span", "folio-required", " required");
      label.append(required);
    }
  }

  function renderStages() {
    stagesHost.replaceChildren();

    config.stages.forEach(stage => {
      const card = createElement("article", "folio-stage");
      card.dataset.folioStage = stage.id;
      card.id = `folio-stage-${stage.id}`;

      const head = createElement("header", "folio-stage-head");
      head.append(createElement("span", "folio-stage-number", String(stage.number)));
      const titleBlock = createElement("div");
      titleBlock.append(createElement("p", "folio-kicker", `Stage ${stage.number}`));
      titleBlock.append(createElement("h3", "", stage.title));
      head.append(titleBlock);
      const status = createElement("span", "folio-stage-status", "In progress");
      status.dataset.stageStatus = stage.id;
      head.append(status);
      card.append(head);

      const summary = createElement("div", "folio-stage-summary");
      const action = createElement("div");
      action.append(createElement("strong", "", "Your action"));
      action.append(createElement("span", "", stage.action));
      const evidence = createElement("div");
      evidence.append(createElement("strong", "", "Evidence to keep"));
      evidence.append(createElement("span", "", stage.evidence));
      summary.append(action, evidence);
      card.append(summary);

      const why = createElement("p", "folio-help");
      why.innerHTML = `<strong>Why this matters:</strong> ${escapeHtml(stage.why)}`;
      card.append(why);

      const prompt = createElement("p", "folio-stage-prompt");
      prompt.innerHTML = `<strong>Think about:</strong> ${escapeHtml(stage.prompt)}`;
      card.append(prompt);

      const fields = createElement("div", "folio-fields");
      stage.fields.forEach(field => {
        const label = createElement("label", "folio-field");
        label.htmlFor = `folio-${field.id}`;
        appendRequiredLabel(label, field);
        let control;
        if (field.type === "textarea") {
          control = document.createElement("textarea");
          control.rows = field.rows || 4;
        } else {
          control = document.createElement("input");
          control.type = field.type || "text";
        }
        control.id = `folio-${field.id}`;
        control.dataset.folioField = field.id;
        control.placeholder = field.placeholder || "";
        control.value = state.values[field.id] || "";
        control.setAttribute("aria-required", field.required ? "true" : "false");
        control.addEventListener("input", event => {
          state.values[field.id] = event.currentTarget.value;
          const printValue = card.querySelector(`[data-folio-print-field="${field.id}"]`);
          if (printValue) printValue.textContent = event.currentTarget.value || "Not yet added";
          if (field.id.endsWith("-caption")) updateImageUi(stage);
          queueSave();
          refreshProgress();
        });
        label.append(control);
        const printValue = createElement("div", "folio-print-value", control.value || "Not yet added");
        printValue.dataset.folioPrintField = field.id;
        label.append(printValue);
        fields.append(label);
      });
      card.append(fields);

      if (stage.support?.length) {
        const details = createElement("details", "folio-support");
        details.append(createElement("summary", "", "Sentence starters"));
        const list = createElement("ul");
        stage.support.forEach(item => list.append(createElement("li", "", item)));
        details.append(list);
        card.append(details);
      }

      if (stage.requireImage) card.append(renderImagePanel(stage));

      const footer = createElement("footer", "folio-stage-footer");
      footer.append(createElement("p", "", stage.activityRelationship));
      const links = createElement("div", "folio-module-links");
      stage.modules.forEach(module => {
        const link = createElement("a", "folio-module-link", module.label);
        link.href = courseHref(module.href);
        links.append(link);
      });
      footer.append(links);
      card.append(footer);
      stagesHost.append(card);
    });
  }

  function renderImagePanel(stage) {
    const panel = createElement("section", "folio-image-panel");
    panel.setAttribute("aria-label", `${stage.title} image evidence`);
    const controls = createElement("div", "folio-image-controls screen-only");
    const label = createElement("label", "", stage.imageLabel);
    label.htmlFor = `folio-image-${stage.id}`;
    const input = document.createElement("input");
    input.id = `folio-image-${stage.id}`;
    input.className = "folio-image-input";
    input.type = "file";
    input.accept = config.allowedImageTypes.join(",");
    input.dataset.imageInput = stage.id;
    input.addEventListener("change", () => handleImageSelection(stage, input));
    controls.append(label, input);

    const boundary = createElement("p", "folio-image-boundary", stage.imageBoundary || "This image stays browser-local and is included in folio backup and export. Remove private information before importing it.");
    controls.append(boundary);
    const metadata = createElement("p", "folio-image-meta", "No image saved for this stage.");
    metadata.dataset.imageMeta = stage.id;
    controls.append(metadata);
    const remove = createElement("button", "folio-remove-image", "Remove saved image");
    remove.type = "button";
    remove.dataset.removeImage = stage.id;
    remove.hidden = true;
    remove.addEventListener("click", () => handleImageRemoval(stage));
    controls.append(remove);

    const previewWrap = createElement("div", "folio-image-preview-wrap");
    const preview = document.createElement("img");
    preview.dataset.imagePreview = stage.id;
    preview.hidden = true;
    const placeholder = createElement("p", "folio-image-placeholder", "Your selected evidence image will appear here.");
    placeholder.dataset.imagePlaceholder = stage.id;
    previewWrap.append(preview, placeholder);
    panel.append(controls, previewWrap);
    return panel;
  }

  function stageIsReady(stage) {
    const requiredTextReady = stage.fields
      .filter(field => field.required)
      .every(field => String(state.values[field.id] || "").trim().length > 0);
    return requiredTextReady && (!stage.requireImage || imageRecords.has(stage.id));
  }

  function refreshProgress() {
    const readyStages = config.stages.filter(stageIsReady);
    progressText.textContent = `${readyStages.length} of ${config.stages.length} stages ready`;
    const next = config.stages.find(stage => !stageIsReady(stage));
    nextText.textContent = next
      ? `Next useful step: Stage ${next.number} - ${next.title}.`
      : "All eight stages have evidence. Check captions and export a submission copy when your teacher asks.";

    config.stages.forEach(stage => {
      const ready = stageIsReady(stage);
      const card = root.querySelector(`[data-folio-stage="${stage.id}"]`);
      const status = root.querySelector(`[data-stage-status="${stage.id}"]`);
      if (card) card.dataset.complete = String(ready);
      if (status) status.textContent = ready ? "Evidence ready" : "In progress";
    });
  }

  function openDatabase() {
    if (databasePromise) return databasePromise;
    databasePromise = new Promise((resolve, reject) => {
      if (!("indexedDB" in window)) {
        reject(new Error("IndexedDB is unavailable"));
        return;
      }
      const request = indexedDB.open(config.database.name, config.database.version);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(config.database.store)) {
          db.createObjectStore(config.database.store, { keyPath: "id" });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("Could not open image storage"));
    });
    return databasePromise;
  }

  async function runImageTransaction(mode, operation) {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(config.database.store, mode);
      const store = transaction.objectStore(config.database.store);
      let result;
      try { result = operation(store); }
      catch (error) { reject(error); return; }
      transaction.oncomplete = () => resolve(result?.result);
      transaction.onerror = () => reject(transaction.error || new Error("Image storage failed"));
      transaction.onabort = () => reject(transaction.error || new Error("Image storage was cancelled"));
    });
  }

  async function loadImages() {
    try {
      const records = await runImageTransaction("readonly", store => store.getAll()) || [];
      imageRecords.clear();
      records.filter(record => stageById.has(record.id) && record.blob instanceof Blob).forEach(record => imageRecords.set(record.id, record));
      config.stages.filter(stage => stage.requireImage).forEach(updateImageUi);
    } catch (_) {
      root.querySelectorAll("[data-image-input]").forEach(input => { input.disabled = true; });
      setStatus("Image storage is unavailable in this browser. Text can still save; use a supported browser before adding images.", "error");
    }
    refreshProgress();
  }

  async function handleImageSelection(stage, input) {
    const file = input.files?.[0];
    if (!file) return;
    if (!config.allowedImageTypes.includes(file.type)) {
      input.value = "";
      setStatus("That image was not added. Choose a JPG, PNG or WebP file.", "error");
      return;
    }
    if (file.size > config.maxImageBytes) {
      input.value = "";
      setStatus(`That image was not added. Keep each image under ${formatBytes(config.maxImageBytes)}.`, "error");
      return;
    }

    const record = {
      id: stage.id,
      blob: file,
      fileName: file.name,
      type: file.type,
      size: file.size,
      lastModified: file.lastModified || null,
      updatedAt: new Date().toISOString()
    };
    try {
      await runImageTransaction("readwrite", store => store.put(record));
      imageRecords.set(stage.id, record);
      updateImageUi(stage);
      refreshProgress();
      setStatus("Image saved locally and included in backup/export.");
    } catch (_) {
      setStatus("The image could not be saved in this browser. Try a smaller file or download your text backup.", "error");
    } finally {
      input.value = "";
    }
  }

  async function handleImageRemoval(stage) {
    if (!window.confirm(`Remove the locally saved image from Stage ${stage.number}? Your text will stay.`)) return;
    try {
      await runImageTransaction("readwrite", store => store.delete(stage.id));
      imageRecords.delete(stage.id);
      updateImageUi(stage);
      refreshProgress();
      setStatus("Stage image removed. Your text remains saved.");
    } catch (_) {
      setStatus("The image could not be removed from browser storage.", "error");
    }
  }

  function updateImageUi(stage) {
    if (!stage.requireImage) return;
    const record = imageRecords.get(stage.id);
    const preview = root.querySelector(`[data-image-preview="${stage.id}"]`);
    const placeholder = root.querySelector(`[data-image-placeholder="${stage.id}"]`);
    const metadata = root.querySelector(`[data-image-meta="${stage.id}"]`);
    const remove = root.querySelector(`[data-remove-image="${stage.id}"]`);
    if (!preview || !placeholder || !metadata || !remove) return;

    const previousUrl = previewUrls.get(stage.id);
    if (previousUrl) URL.revokeObjectURL(previousUrl);
    previewUrls.delete(stage.id);

    if (!record) {
      preview.hidden = true;
      preview.removeAttribute("src");
      placeholder.hidden = false;
      metadata.textContent = "No image saved for this stage.";
      remove.hidden = true;
      return;
    }

    const url = URL.createObjectURL(record.blob);
    previewUrls.set(stage.id, url);
    preview.src = url;
    const captionField = stage.fields.find(field => field.id.endsWith("-caption"));
    preview.alt = String(state.values[captionField?.id] || `${stage.title} student evidence image`);
    preview.hidden = false;
    placeholder.hidden = true;
    metadata.textContent = `${record.fileName} - ${formatBytes(record.size)} - saved locally`;
    remove.hidden = false;
  }

  function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} bytes`;
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(reader.error || new Error("Image could not be read"));
      reader.readAsDataURL(blob);
    });
  }

  function dataUrlToBlob(dataUrl) {
    const match = /^data:([^;,]+);base64,([A-Za-z0-9+/=]+)$/.exec(dataUrl || "");
    if (!match) throw new Error("A backup image is not a valid embedded image");
    const binary = atob(match[2]);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return new Blob([bytes], { type: match[1] });
  }

  async function createBackupPayload() {
    window.clearTimeout(saveTimer);
    storeState(true);
    const images = [];
    for (const [id, record] of imageRecords) {
      images.push({
        id,
        fileName: record.fileName,
        type: record.type,
        size: record.size,
        lastModified: record.lastModified,
        updatedAt: record.updatedAt,
        dataUrl: await blobToDataUrl(record.blob)
      });
    }
    return {
      format: config.backupFormat,
      courseId: config.courseId,
      schemaVersion: config.schemaVersion,
      exportedAt: new Date().toISOString(),
      includes: { text: true, images: true, mp4Video: false },
      state: JSON.parse(JSON.stringify(state)),
      images
    };
  }

  function validateBackup(payload) {
    if (!payload || payload.format !== config.backupFormat) throw new Error("This is not a Multimedia folio backup");
    if (payload.courseId !== config.courseId) throw new Error("This backup belongs to a different course");
    if (payload.schemaVersion !== config.schemaVersion) throw new Error("This backup uses an unsupported folio schema");
    const restoredState = normaliseState(payload.state);
    if (!restoredState) throw new Error("The backup text record is missing or damaged");
    if (!Array.isArray(payload.images)) throw new Error("The backup image list is missing");

    const restoredImages = payload.images.map(image => {
      if (!stageById.has(image.id)) throw new Error("The backup contains an unknown folio stage");
      if (!config.allowedImageTypes.includes(image.type)) throw new Error("The backup contains an unsupported image type");
      const blob = dataUrlToBlob(image.dataUrl);
      if (blob.type !== image.type || blob.size !== Number(image.size) || blob.size > config.maxImageBytes) {
        throw new Error("A backup image failed its type or size check");
      }
      return {
        id: image.id,
        blob,
        fileName: String(image.fileName || `${image.id}.image`),
        type: image.type,
        size: blob.size,
        lastModified: Number(image.lastModified) || null,
        updatedAt: String(image.updatedAt || new Date().toISOString())
      };
    });
    return { restoredState, restoredImages };
  }

  async function replaceAllImages(records) {
    await runImageTransaction("readwrite", store => {
      store.clear();
      records.forEach(record => store.put(record));
    });
    imageRecords.clear();
    records.forEach(record => imageRecords.set(record.id, record));
  }

  async function restorePayload(payload, askBeforeOverwrite = true) {
    const { restoredState, restoredImages } = validateBackup(payload);
    if (askBeforeOverwrite && !window.confirm("Restore this backup? It will replace the current folio text and images on this device.")) return false;
    await replaceAllImages(restoredImages);
    state = restoredState;
    storeState(true);
    renderStages();
    bindContextFields();
    config.stages.filter(stage => stage.requireImage).forEach(updateImageUi);
    refreshProgress();
    setStatus("Backup restored locally. Check the images and captions before continuing.");
    return true;
  }

  async function handleRestoreFile(input) {
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;
    if (file.size > 48 * 1024 * 1024) {
      setStatus("That backup is too large to restore safely in this page.", "error");
      return;
    }
    try {
      const payload = JSON.parse(await file.text());
      await restorePayload(payload, true);
    } catch (error) {
      setStatus(`Backup not restored: ${error.message}.`, "error");
    }
  }

  function safeFilePart(value) {
    return String(value || "student")
      .trim()
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 48) || "student";
  }

  function downloadBlob(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function downloadBackup() {
    try {
      const payload = await createBackupPayload();
      const date = new Date().toISOString().slice(0, 10);
      downloadBlob(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }), `Year-7-Multimedia-Folio-Backup-${safeFilePart(state.context.studentName)}-${date}.json`);
      setStatus("Editable backup downloaded. It includes saved text and images, but not MP4 video files.");
    } catch (_) {
      setStatus("The editable backup could not be created. Check image storage and try again.", "error");
    }
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  async function buildSubmissionHtml() {
    window.clearTimeout(saveTimer);
    storeState(true);
    const images = new Map();
    for (const [id, record] of imageRecords) images.set(id, await blobToDataUrl(record.blob));
    const exportedAt = new Intl.DateTimeFormat("en-AU", { dateStyle: "long", timeStyle: "short" }).format(new Date());
    const studentName = state.context.studentName.trim() || "Not added";
    const classGroup = state.context.classGroup.trim() || "Not added";
    const stageMarkup = config.stages.map(stage => {
      const fields = stage.fields.map(field => `<div class="field"><h3>${escapeHtml(field.label)}</h3><p>${escapeHtml(state.values[field.id] || "Not yet added").replace(/\n/g, "<br>")}</p></div>`).join("");
      const image = images.get(stage.id);
      const captionField = stage.fields.find(field => field.id.endsWith("-caption"));
      const imageMarkup = image
        ? `<figure><img src="${image}" alt="${escapeHtml(state.values[captionField?.id] || `${stage.title} evidence image`)}"><figcaption>${escapeHtml(state.values[captionField?.id] || "No caption added")}</figcaption></figure>`
        : `<p class="missing">No image added for this stage.</p>`;
      return `<article class="stage"><header><span>${stage.number}</span><div><p class="kicker">Stage ${stage.number}</p><h2>${escapeHtml(stage.title)}</h2></div></header><p><strong>Evidence purpose:</strong> ${escapeHtml(stage.evidence)}</p><p><strong>Thinking prompt:</strong> ${escapeHtml(stage.prompt)}</p>${fields}${stage.requireImage ? imageMarkup : ""}<p class="boundary"><strong>Boundary:</strong> ${escapeHtml(stage.assessmentBoundary)}</p></article>`;
    }).join("");

    return `<!doctype html>
<html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Multimedia folio - ${escapeHtml(studentName)}</title><style>
@page{size:A4;margin:14mm}*{box-sizing:border-box}body{margin:0;background:#f4f7f6;color:#102a35;font:16px/1.55 Arial,sans-serif}.wrap{width:min(900px,calc(100% - 32px));margin:0 auto;padding:32px 0}.cover,.stage{margin:0 0 24px;padding:24px;border:1px solid #b8c8c4;border-radius:14px;background:#fff}.cover{border-top:10px solid #0d756b}.kicker{margin:0;color:#07564f;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}h1,h2,h3{line-height:1.2}h1{margin:.3rem 0 1rem}h2{margin:.2rem 0 0}h3{margin:0 0 .35rem;font-size:1rem}.notice,.boundary{padding:12px;border-left:5px solid #f2c14e;background:#fff8dc}.stage header{display:flex;gap:14px;align-items:center}.stage header>span{display:grid;width:46px;aspect-ratio:1;place-items:center;border-radius:10px;background:#102a35;color:#fff;font-weight:900}.field{margin:14px 0;padding:12px;border:1px solid #d6e1de;border-radius:10px}.field p{margin:0;overflow-wrap:anywhere}figure{margin:18px 0;padding:10px;border:1px solid #d6e1de;border-radius:10px}img{display:block;max-width:100%;max-height:460px;margin:auto;object-fit:contain}figcaption{margin-top:8px;color:#52656d}.missing{color:#52656d;font-style:italic}@media print{body{background:#fff}.wrap{width:100%;padding:0}.cover,.stage{box-shadow:none}.stage{min-height:235mm;break-before:page;break-inside:avoid}.stage:first-of-type{break-before:auto}}
</style>  <link rel="icon" href="data:,">
</head><body><main class="wrap"><section class="cover"><p class="kicker">Self-contained submission copy</p><h1>${escapeHtml(config.courseTitle)}</h1><p><strong>Student:</strong> ${escapeHtml(studentName)}<br><strong>Class/group:</strong> ${escapeHtml(classGroup)}<br><strong>Exported:</strong> ${escapeHtml(exportedAt)}</p><p class="notice"><strong>This file is preparation, not proof of submission.</strong> It contains the text and images selected in the browser folio. It does not contain MP4 video files, quiz results or teacher-observation records. Follow the teacher's approved submission directions.</p></section>${stageMarkup}</main></body></html>`;
  }

  async function exportSubmission() {
    try {
      const html = await buildSubmissionHtml();
      const date = new Date().toISOString().slice(0, 10);
      downloadBlob(new Blob([html], { type: "text/html" }), `Year-7-Multimedia-Folio-Submission-${safeFilePart(state.context.studentName)}-${date}.html`);
      setStatus("Self-contained submission copy downloaded. It includes text and images, but not MP4 video files.");
    } catch (_) {
      setStatus("The submission copy could not be created. Check image storage and try again.", "error");
    }
  }

  async function resetFolio() {
    if (!window.confirm("Reset all Multimedia folio text and images on this device? Download a backup first if you may need this work.")) return false;
    try {
      localStorage.removeItem(config.recordKey);
      await replaceAllImages([]);
      state = emptyState();
      renderStages();
      bindContextFields();
      refreshProgress();
      setStatus("This folio has been reset on this device.");
      return true;
    } catch (_) {
      setStatus("The folio could not be fully reset. Download a backup and check browser storage.", "error");
      return false;
    }
  }

  function bindContextFields() {
    root.querySelectorAll("[data-folio-context]").forEach(input => {
      const key = input.dataset.folioContext;
      input.value = state.context[key] || "";
      root.querySelectorAll(`[data-folio-context-print="${key}"]`).forEach(element => {
        element.textContent = input.value || "Not added";
      });
      if (input.dataset.bound === "true") return;
      input.dataset.bound = "true";
      input.addEventListener("input", event => {
        state.context[key] = event.currentTarget.value;
        root.querySelectorAll(`[data-folio-context-print="${key}"]`).forEach(element => {
          element.textContent = event.currentTarget.value || "Not added";
        });
        queueSave();
      });
    });
  }

  function bindToolbar() {
    root.querySelector("[data-folio-backup]")?.addEventListener("click", downloadBackup);
    root.querySelector("[data-folio-restore]")?.addEventListener("change", event => handleRestoreFile(event.currentTarget));
    root.querySelector("[data-folio-export]")?.addEventListener("click", exportSubmission);
    root.querySelector("[data-folio-print]")?.addEventListener("click", () => {
      window.clearTimeout(saveTimer);
      storeState(true);
      window.print();
    });
    root.querySelector("[data-folio-reset]")?.addEventListener("click", resetFolio);
  }

  async function initialise() {
    state = loadSavedState();
    renderStages();
    bindContextFields();
    bindToolbar();
    await loadImages();
    refreshProgress();
    if (state.updatedAt) setStatus("Saved folio restored from this browser.");
    return true;
  }

  const ready = initialise();
  window.Year7MultimediaFolio = Object.freeze({
    ready,
    createBackupPayload,
    restorePayload,
    buildSubmissionHtml,
    resetFolio,
    getState: () => JSON.parse(JSON.stringify(state))
  });
})();
