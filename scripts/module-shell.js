(() => {
  const course = window.YEAR7_MULTIMEDIA;
  const contentMap = window.YEAR7_MULTIMEDIA_CONTENT;
  const mediaMap = window.YEAR7_MULTIMEDIA_MEDIA || { visuals: [], videos: [] };
  const store = window.Year7MultimediaStore;
  const match = location.pathname.match(/module-(\d{2})\.html$/);
  const number = match ? Number(match[1]) : 1;
  const module = course?.modules?.find(item => item.number === number);
  if (!module) return;

  const moduleContent = contentMap?.modules?.find(item => item.number === number);
  const esc = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
  const asArray = value => Array.isArray(value) ? value : (value ? [value] : []);
  const assetPath = src => {
    const value = String(src || "");
    if (!value || /^(https?:|data:|\/)/i.test(value) || value.startsWith("../")) return value;
    return `../${value.replace(/^\.\//, "")}`;
  };
  const textParagraphs = value => asArray(value)
    .flatMap(item => String(item || "").split(/\n\s*\n/))
    .filter(Boolean)
    .map(item => `<p>${esc(item)}</p>`).join("");
  const list = (items, className = "") => {
    const values = asArray(items);
    if (!values.length) return "";
    return `<ul class="${esc(className)}">${values.map(item => {
      if (item && typeof item === "object") {
        const term = item.term || item.label || item.title || item.word || "";
        const meaning = item.meaning || item.definition || item.text || item.description || "";
        return `<li>${term ? `<strong>${esc(term)}</strong>${meaning ? ": " : ""}` : ""}${esc(meaning)}</li>`;
      }
      return `<li>${esc(item)}</li>`;
    }).join("")}</ul>`;
  };
  const relatesToSection = (item, section) => {
    const normalise = value => String(value || "").trim().toLowerCase();
    const targets = new Set([normalise(section.id), normalise(section.title)]);
    const candidates = [item?.section, item?.placement?.section, typeof item?.placement === "string" ? item.placement : ""];
    return candidates.some(candidate => targets.has(normalise(candidate)));
  };
  const visualsFor = section => asArray(mediaMap.visuals)
    .filter(item => Number(item.module) === number && relatesToSection(item, section));
  const videosFor = section => asArray(mediaMap.videos)
    .filter(item => Number(item.module) === number && relatesToSection(item, section));
  const moduleFileStem = `module-${String(number).padStart(2, "0")}-${module.slug}`;
  const misconceptionText = value => {
    if (!value) return "";
    if (typeof value === "string") return `<p>${esc(value)}</p>`;
    return `${value.claim ? `<p><strong>Claim:</strong> ${esc(value.claim)}</p>` : ""}${value.correction ? `<p><strong>Better thinking:</strong> ${esc(value.correction)}</p>` : ""}`;
  };

  const renderVisual = visual => {
    const src = assetPath(visual.src);
    const open = visual.openLarger !== false;
    const image = `<img src="${esc(src)}" alt="${esc(visual.alt)}" width="${esc(visual.width || "1600")}" height="${esc(visual.height || "900")}" loading="lazy">`;
    return `<figure class="learning-visual" id="${esc(visual.id)}">
      ${open ? `<button class="image-open" type="button" data-lightbox-src="${esc(src)}" data-lightbox-alt="${esc(visual.alt)}" aria-label="Open larger: ${esc(visual.caption || visual.alt)}">${image}<span>Open larger</span></button>` : image}
      <figcaption><strong>${esc(visual.caption || visual.learningPurpose || "Learning visual")}</strong>${visual.noticePrompt ? `<span>${esc(visual.noticePrompt)}</span>` : ""}</figcaption>
    </figure>`;
  };

  const renderVideo = video => `<article class="video-card" id="${esc(video.id)}">
    <div class="video-copy">
      <p class="eyebrow">Drive-first teacher demonstration · ${esc(video.durationDisplay || "")}</p>
      <h3>${esc(video.title)}</h3>
      <p>${esc(video.reasonToWatch || video.teachingClaim || "Watch the demonstration for the workflow used in this project.")}</p>
      ${video.watchFor ? `<p class="watch-for"><strong>Watch for:</strong> ${esc(video.watchFor)}</p>` : ""}
      ${video.outcome === "REWORK" ? `<div class="source-limit" role="note"><strong>Supplied source limitation</strong><p>${esc(video.sourceIssue || video.teachingClaim)}</p><p>${esc(video.equivalentAlternative?.text || "Use the adjacent written and visual alternative for this learning point.")}</p></div>` : ""}
    </div>
    <div class="video-stage" data-video-stage>
      <button class="video-launch" type="button" data-video-preview="${esc(video.previewUrl)}" aria-label="Load ${esc(video.title)} from Google Drive">
        <img src="${esc(assetPath(video.poster))}" alt="" loading="lazy">
        <span><strong>Load video</strong><small>Google Drive content loads only when you choose.</small></span>
      </button>
    </div>
    <div class="video-support">
      ${video.equivalentAlternative ? `<details><summary>Text alternative</summary><p>${esc(video.equivalentAlternative.text || video.equivalentAlternative)}</p></details>` : ""}
      <a href="${esc(video.fallbackUrl || `https://drive.google.com/file/d/${video.driveId}/view`)}" target="_blank" rel="noopener">Open the source video in Drive</a>
    </div>
  </article>`;

  const renderCheck = check => {
    const options = asArray(check.options);
    if (!options.length) {
      return `<section class="knowledge-check" data-written-check data-storage-key="${esc(check.storageKey || check.id)}">
        <h3>Quick check</h3><label for="${esc(check.id)}">${esc(check.prompt)}</label>
        ${check.hint ? `<details class="hint"><summary>Need a hint?</summary><p>${esc(check.hint)}</p></details>` : ""}
        <textarea id="${esc(check.id)}" rows="4" data-save-field placeholder="Write a short answer here. No drawing is required."></textarea>
        <div class="save-row"><button class="button" type="button" data-save-written>Save response</button><span class="save-status" role="status"></span></div>
      </section>`;
    }
    return `<form class="knowledge-check" data-choice-check data-storage-key="${esc(check.storageKey || check.id)}">
      <fieldset><legend><span>Quick check</span>${esc(check.prompt)}</legend>
        ${options.map(option => `<label class="choice"><input type="radio" name="${esc(check.id)}" value="${esc(option.id)}" data-correct="${option.correct ? "true" : "false"}" data-feedback="${esc(option.feedback)}"><span>${esc(option.text)}</span></label>`).join("")}
      </fieldset>
      ${check.hint ? `<details class="hint"><summary>Need a hint?</summary><p>${esc(check.hint)}</p></details>` : ""}
      <p class="check-feedback" role="status" aria-live="polite"></p>
    </form>`;
  };

  const renderCapstone = capstone => `<section class="evidence-card" id="${esc(capstone.id)}" data-evidence data-storage-key="${esc(capstone.storageKey || capstone.id)}">
    <p class="eyebrow">Applied evidence</p>
    <h3>${esc(capstone.label || "Apply what you learned")}</h3>
    <p>${esc(capstone.prompt)}</p>
    ${asArray(capstone.scaffold).length ? `<div class="scaffold"><h4>Build your response</h4>${list(capstone.scaffold)}</div>` : ""}
    ${asArray(capstone.starters).length ? `<details><summary>Sentence starters</summary>${list(capstone.starters)}</details>` : ""}
    <label for="${esc(capstone.id)}-response">Your response</label>
    <textarea id="${esc(capstone.id)}-response" rows="8" data-save-field placeholder="Type your evidence here. No drawing is required."></textarea>
    ${asArray(capstone.qualityIndicators).length ? `<div class="quality-check"><h4>Before you save</h4>${list(capstone.qualityIndicators, "check-list")}</div>` : ""}
    <div class="save-row"><button class="button" type="button" data-save-evidence>Save to this browser</button><span class="save-status" role="status" aria-live="polite"></span></div>
    <p class="fine">Saved here is a working copy, not a formal submission. Back it up from My folio.</p>
  </section>`;

  const renderPresentation = () => {
    const preview = `../resources/presentation-qa/renders/${moduleFileStem}/slide-1.png`;
    const deck = `../resources/presentations/${moduleFileStem}.pptx`;
    return `<section class="module-presentation" id="module-presentation" aria-labelledby="module-presentation-title">
      <div class="module-presentation__copy">
        <p class="eyebrow">Module presentation · 8 slides</p>
        <h2 id="module-presentation-title">Start with the big picture</h2>
        <p>Preview the three key ideas, pause for class discussion, then continue through the worked explanations and checks below.</p>
        <div class="actions screen-only"><a class="button" href="${esc(deck)}" download>Download PowerPoint</a><a class="button secondary" href="#${esc(moduleContent?.sections?.[0]?.id || "")}">Continue to theory</a></div>
      </div>
      <figure class="module-presentation__preview">
        <button class="image-open" type="button" data-lightbox-src="${esc(preview)}" data-lightbox-alt="Title slide for Module ${number}: ${esc(module.title)}" aria-label="Open the Module ${number} presentation preview larger">
          <img src="${esc(preview)}" alt="Title slide preview for Module ${number}: ${esc(module.title)}" width="1280" height="720">
          <span>Open larger</span>
        </button>
        <figcaption>Use the editable deck for teacher-led explanation, retrieval and the module exit task.</figcaption>
      </figure>
    </section>`;
  };

  const renderSection = section => {
    const visuals = visualsFor(section);
    const videos = videosFor(section);
    const sectionNumber = Number(section.id.match(/-s(\d+)/)?.[1] || 1);
    return `<section class="lesson-section" id="${esc(section.id)}">
      <header class="lesson-heading"><p class="section-number" aria-hidden="true">${sectionNumber}</p><h2>${esc(section.title)}</h2><p>${esc(section.learningIntent)}</p></header>
      <div class="theory-copy">${asArray(section.blocks).map(block => `<section id="${esc(block.id)}"><h3>${esc(block.heading)}</h3>${textParagraphs(block.text)}</section>`).join("")}</div>
      ${asArray(section.keyIdeas).length ? `<aside class="key-ideas"><h3>Key ideas</h3>${list(section.keyIdeas)}</aside>` : ""}
      ${asArray(section.vocabulary).length ? `<aside class="vocabulary"><h3>Words designers use</h3>${list(section.vocabulary)}</aside>` : ""}
      ${section.misconception ? `<aside class="misconception"><h3>A common trap</h3>${misconceptionText(section.misconception)}</aside>` : ""}
      ${visuals.length ? `<div class="visual-grid">${visuals.map(renderVisual).join("")}</div>` : ""}
      ${videos.map(renderVideo).join("")}
      ${asArray(section.checks).map(renderCheck).join("")}
      ${section.activityRequest?.id ? `<p class="activity-link"><a class="button secondary" href="../activities.html#${esc(section.activityRequest.id)}">Open the linked applied activity</a></p>` : ""}
      ${section.capstone ? renderCapstone(section.capstone) : ""}
    </section>`;
  };

  document.title = `Module ${number}: ${module.title} | ${course.title}`;
  const header = document.querySelector("[data-module-header]");
  const content = document.querySelector("[data-module-content]");
  const contents = document.querySelector("[data-module-contents]");
  if (header) header.innerHTML = `
    <div class="breadcrumbs"><a href="../index.html">Course</a><span aria-hidden="true">/</span><a href="../index.html#modules">Modules</a><span aria-hidden="true">/</span><span>Module ${number}</span></div>
    <p class="eyebrow">Module ${number} · ${course.focusArea}</p>
    <h1>${module.title}</h1>
    <p>${module.summary}</p>`;
  if (content) {
    content.innerHTML = moduleContent
      ? `<div class="module-orientation"><p class="eyebrow">Module routine</p><h2>Learn three connected ideas, then apply them</h2><p>${esc(contentMap.saveNotice || "Your written work saves only in this browser until you back it up.")}</p><div class="actions screen-only"><a class="button secondary" href="../activities.html#module-${number}">Applied activities</a><a class="button secondary" href="../folio.html">My folio</a><button class="button secondary" type="button" data-print-module>Print this module</button></div></div>${renderPresentation()}${moduleContent.sections.map(renderSection).join("")}`
      : `<div class="source-boundary" role="alert"><strong>Course content could not load.</strong><p>Return to the course page and reopen this module. If the issue continues, tell your teacher which module number is affected.</p></div>`;
  }
  if (contents) contents.innerHTML = moduleContent
    ? `<li><a href="#module-presentation"><span>P</span>Module presentation</a></li>${moduleContent.sections.map((section, index) => `<li><a href="#${esc(section.id)}"><span>${index + 1}</span>${esc(section.title)}</a></li>`).join("")}`
    : "<li>Content unavailable</li>";
  const progressCopy = document.querySelector(".module-aside .fine");
  if (progressCopy) {
    progressCopy.dataset.progressLabel = "";
    progressCopy.textContent = "0 saved items";
  }

  const previous = document.querySelector("[data-previous]");
  const next = document.querySelector("[data-next]");
  if (previous) {
    if (number > 1) { previous.href = `module-${String(number - 1).padStart(2, "0")}.html`; previous.textContent = `← Module ${number - 1}`; }
    else { previous.href = "../index.html#modules"; previous.textContent = "← Module pathway"; }
  }
  if (next) {
    if (number < 10) { next.href = `module-${String(number + 1).padStart(2, "0")}.html`; next.textContent = `Module ${number + 1} →`; }
    else { next.href = "../folio.html"; next.textContent = "My folio →"; }
  }

  const readStored = key => store?.read(key, "") || "";
  const writeStored = (key, value) => store?.write(key, value) !== false;
  const status = (element, message, ok = true) => {
    if (!element) return;
    element.textContent = message;
    element.dataset.state = ok ? "saved" : "error";
  };

  document.querySelectorAll("[data-choice-check]").forEach(form => {
    const key = form.dataset.storageKey;
    const saved = readStored(key);
    if (saved) {
      const input = form.querySelector(`input[value="${CSS.escape(saved)}"]`);
      if (input) input.checked = true;
    }
    form.addEventListener("change", event => {
      const input = event.target.closest("input[type=radio]");
      if (!input) return;
      const feedback = form.querySelector(".check-feedback");
      const ok = writeStored(key, input.value);
      feedback.textContent = ok ? input.dataset.feedback : "This browser could not save the response. Use My folio to make a backup after you retry.";
      feedback.dataset.result = input.dataset.correct === "true" ? "correct" : "retry";
      updateProgress();
    });
  });

  document.querySelectorAll("[data-written-check], [data-evidence]").forEach(card => {
    const field = card.querySelector("[data-save-field]");
    const key = card.dataset.storageKey;
    const saved = readStored(key);
    if (saved) field.value = saved;
    const saveButton = card.querySelector("[data-save-written], [data-save-evidence]");
    const saveStatus = card.querySelector(".save-status");
    saveButton?.addEventListener("click", () => {
      const ok = writeStored(key, field.value.trim());
      status(saveStatus, ok ? (card.dataset.evidence !== undefined ? "Saved to this browser." : "Response saved.") : "Could not save in this browser.", ok);
      updateProgress();
    });
  });

  document.querySelectorAll("[data-video-stage]").forEach(stage => {
    const posterMarkup = stage.innerHTML;
    const bindLaunch = () => {
      const button = stage.querySelector("[data-video-preview]");
      if (!button) return;
      button.addEventListener("click", () => {
        const title = button.getAttribute("aria-label")?.replace(/^Load /, "") || "Drive video";
        stage.innerHTML = `<div class="video-frame"><iframe src="${esc(button.dataset.videoPreview)}" title="${esc(title)}" allow="fullscreen" allowfullscreen loading="lazy"></iframe></div><button class="video-close" type="button">Close video</button>`;
        const closeButton = stage.querySelector(".video-close");
        const closeVideo = () => {
          document.removeEventListener("keydown", closeOnEscape);
          stage.innerHTML = posterMarkup;
          bindLaunch();
          stage.querySelector("[data-video-preview]")?.focus();
        };
        const closeOnEscape = event => {
          if (event.key === "Escape") closeVideo();
        };
        closeButton?.addEventListener("click", closeVideo);
        document.addEventListener("keydown", closeOnEscape);
        closeButton?.focus();
      }, { once: true });
    };
    bindLaunch();
  });

  let lightbox = document.querySelector("#image-lightbox");
  if (!lightbox) {
    lightbox = document.createElement("dialog");
    lightbox.id = "image-lightbox";
    lightbox.className = "image-lightbox";
    lightbox.innerHTML = `<div class="image-lightbox-toolbar"><a data-open-full-size target="_blank" rel="noopener">Open full-size image</a><button type="button" data-close-lightbox aria-label="Close enlarged image">Close</button></div><div class="image-lightbox-stage"><img alt=""></div><p class="image-lightbox-note">On a phone, swipe inside the image or open the full-size file to zoom into labels and details.</p>`;
    document.body.append(lightbox);
    lightbox.querySelector("[data-close-lightbox]").addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });
  }
  document.querySelectorAll("[data-lightbox-src]").forEach(button => {
    button.addEventListener("click", () => {
      const image = lightbox.querySelector("img");
      const fullSize = lightbox.querySelector("[data-open-full-size]");
      image.src = button.dataset.lightboxSrc;
      image.alt = button.dataset.lightboxAlt || "Enlarged learning visual";
      fullSize.href = button.dataset.lightboxSrc;
      fullSize.setAttribute("aria-label", `Open full-size image: ${button.dataset.lightboxAlt || "learning visual"}`);
      lightbox.showModal();
    });
  });

  document.querySelector("[data-print-module]")?.addEventListener("click", () => window.print());

  function updateProgress() {
    const keys = [
      ...document.querySelectorAll("[data-choice-check], [data-written-check], [data-evidence]")
    ].map(item => item.dataset.storageKey).filter(Boolean);
    const complete = keys.filter(key => readStored(key).trim()).length;
    const percentage = keys.length ? Math.round((complete / keys.length) * 100) : 0;
    const bar = document.querySelector(".progress-bar");
    const label = document.querySelector("[data-progress-label]");
    if (bar) bar.style.width = `${percentage}%`;
    if (label) label.textContent = `${complete} of ${keys.length} saved items`;
  }
  updateProgress();
})();
