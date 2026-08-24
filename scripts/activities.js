(() => {
  const data = window.YEAR7_MULTIMEDIA_ACTIVITIES;
  const course = window.YEAR7_MULTIMEDIA;
  const store = window.Year7MultimediaStore;
  const host = document.querySelector("[data-activity-bank]");
  if (!host || !data) return;

  const esc = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
  const asArray = value => Array.isArray(value) ? value : (value ? [value] : []);
  const challengeMode = location.pathname.endsWith("busy-work.html");
  let activities = asArray(data.activities);
  if (challengeMode) {
    const explicitlyBanked = activities.filter(activity => /bank|relief|revision|fast|puzzle|challenge/i.test(String(activity.placement || "")));
    const selected = [...explicitlyBanked];
    for (let moduleNumber = 1; moduleNumber <= 10; moduleNumber += 1) {
      const moduleActivity = activities.find(activity => Number(activity.module) === moduleNumber && !selected.includes(activity));
      if (moduleActivity) selected.push(moduleActivity);
    }
    activities = selected.slice(0, 12);
  }

  const renderInstruction = instruction => {
    if (instruction && typeof instruction === "object") {
      const label = instruction.label || instruction.step || instruction.title || "";
      const text = instruction.text || instruction.instruction || instruction.description || instruction.prompt || "";
      return `<li>${label ? `<strong>${esc(label)}</strong>${text ? ": " : ""}` : ""}${esc(text)}</li>`;
    }
    return `<li>${esc(instruction)}</li>`;
  };

  const humanise = value => String(value || "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replaceAll("-", " ")
    .replace(/^./, letter => letter.toUpperCase());
  const fieldName = (...parts) => parts.filter(Boolean).join("__").replace(/[^a-zA-Z0-9_-]/g, "-");
  const select = (name, label, options, answer, feedback = "") => `<label class="structured-field"><span>${esc(label)}</span><select data-structured-field data-field-key="${esc(name)}"${answer !== undefined ? ` data-answer="${esc(answer)}"` : ""}${feedback ? ` data-feedback="${esc(feedback)}"` : ""}><option value="">Choose…</option>${asArray(options).map((option, index) => `<option value="${esc(typeof option === "object" ? (option.value ?? option.id ?? index) : option)}">${esc(typeof option === "object" ? (option.label || option.text || option.value) : option)}</option>`).join("")}</select><small class="inline-feedback" role="status"></small></label>`;
  const responseField = (name, label) => `<label class="structured-field wide"><span>${esc(label)}</span><input type="text" data-structured-field data-field-key="${esc(name)}"></label>`;
  const checkboxField = (name, label) => `<label class="activity-checkbox"><input type="checkbox" data-structured-field data-field-key="${esc(name)}"><span>${esc(label)}</span></label>`;

  const renderStructuredData = activity => {
    const activityData = activity.data || {};
    const used = new Set();
    const parts = [];
    const groups = activityData.groups || activityData.pageGroups;
    if (groups && activityData.cards) {
      used.add("groups"); used.add("pageGroups"); used.add("cards");
      parts.push(`<div class="sort-activity"><h4>Sort each card</h4>${activityData.cards.map(card => `<article class="sort-card"><p>${esc(card.text)}</p>${select(fieldName(activity.id, card.id), "Best category", groups, card.answer, card.feedback)}</article>`).join("")}</div>`);
    }
    if (activityData.scenarios) {
      used.add("scenarios");
      if (groups) { used.add("groups"); used.add("pageGroups"); }
      parts.push(`<div class="scenario-activity"><h4>Make each decision</h4>${activityData.scenarios.map((scenario, index) => {
        const options = scenario.choices || groups || activityData.statuses || [];
        return `<article class="scenario-card"><p><strong>${esc(scenario.prompt || scenario.text || `Scenario ${index + 1}`)}</strong></p>${select(fieldName(activity.id, scenario.id || index), "Your decision", options, scenario.answer, scenario.feedback)}</article>`;
      }).join("")}</div>`);
    }
    if (activityData.stages) {
      used.add("stages");
      const positions = activityData.stages.map((_, index) => index + 1);
      parts.push(`<div class="sequence-activity"><h4>Build the sequence</h4>${activityData.stages.map((stage, index) => `<article class="sequence-card"><p>${esc(stage.text)}</p>${select(fieldName(activity.id, stage.id || index), "Position", positions, stage.order, stage.feedback)}</article>`).join("")}</div>`);
    }
    if (activityData.contexts && activityData.statuses) {
      used.add("contexts"); used.add("statuses");
      parts.push(`<div class="matrix-activity"><h4>Test each context</h4>${activityData.contexts.map((context, index) => `<article class="matrix-row"><div><strong>${esc(context.label)}</strong><p>${esc(context.check)}</p></div>${select(fieldName(activity.id, context.id || index, "status"), "Status", activityData.statuses)}${responseField(fieldName(activity.id, context.id || index, "note"), "Observation or revision")}</article>`).join("")}</div>`);
    }
    if (activityData.applications && activityData.features && activityData.statuses) {
      used.add("applications"); used.add("features"); used.add("statuses");
      parts.push(`<div class="matrix-activity"><h4>Compare the applications</h4>${activityData.applications.flatMap((application, appIndex) => activityData.features.map((feature, featureIndex) => `<article class="matrix-row"><div><strong>${esc(application)}</strong><p>${esc(feature)}</p></div>${select(fieldName(activity.id, appIndex, featureIndex), "Status", activityData.statuses)}</article>`)).join("")}</div>`);
    }
    if (activityData.terms && activityData.clues) {
      used.add("terms"); used.add("clues");
      parts.push(`<div class="sort-activity"><h4>Match each clue</h4>${activityData.clues.map((clue, index) => `<article class="sort-card"><p>${esc(clue.text)}</p>${select(fieldName(activity.id, clue.id || index), "Matching term", activityData.terms, clue.answer, clue.feedback)}</article>`).join("")}</div>`);
    }
    if (activityData.feedbackCards) {
      used.add("feedbackCards");
      const relevanceOptions = [...new Set(activityData.feedbackCards.map(card => card.relevance))];
      parts.push(`<div class="sort-activity"><h4>Triage the feedback</h4>${activityData.feedbackCards.map((card, index) => `<article class="sort-card"><p>${esc(card.text)}</p>${select(fieldName(activity.id, card.id || index), "Relevance", relevanceOptions, card.relevance, card.feedback)}</article>`).join("")}</div>`);
    }

    Object.entries(activityData).forEach(([key, value]) => {
      if (used.has(key) || value === false || value == null) return;
      const label = humanise(key);
      if (Array.isArray(value)) {
        if (!value.length) return;
        if (value.every(item => typeof item === "string") && /^checks$/i.test(key)) {
          parts.push(`<fieldset class="check-grid"><legend>${esc(label)}</legend>${value.map((item, index) => checkboxField(fieldName(activity.id, key, index), item)).join("")}</fieldset>`);
        } else if (value.every(item => typeof item === "string") && /(field|response|annotation|required|action|chain)/i.test(key)) {
          parts.push(`<fieldset class="response-grid"><legend>${esc(label)}</legend>${value.map((item, index) => responseField(fieldName(activity.id, key, index), item)).join("")}</fieldset>`);
        } else if (value.every(item => typeof item === "string")) {
          parts.push(`<section class="data-list"><h4>${esc(label)}</h4><ul>${value.map(item => `<li>${esc(item)}</li>`).join("")}</ul></section>`);
        } else if (value.every(item => item && typeof item === "object")) {
          parts.push(`<section class="data-list"><h4>${esc(label)}</h4><ul>${value.map((item, index) => `<li><strong>${esc(item.text || item.label || item.prompt || item.id || `Item ${index + 1}`)}</strong>${item.feedback ? `<span>${esc(item.feedback)}</span>` : ""}</li>`).join("")}</ul></section>`);
        }
      } else if (typeof value === "string") {
        if (/(prompt|field)$/i.test(key)) parts.push(responseField(fieldName(activity.id, key), value));
        else parts.push(`<p class="activity-note"><strong>${esc(label)}:</strong> ${esc(value)}</p>`);
      } else if (typeof value === "object") {
        if (value.prompt) parts.push(responseField(fieldName(activity.id, key), value.prompt));
        else parts.push(`<dl class="data-pairs">${Object.entries(value).map(([subKey, subValue]) => `<div><dt>${esc(humanise(subKey))}</dt><dd>${esc(subValue)}</dd></div>`).join("")}</dl>`);
      } else if (typeof value === "number" && value > 0 && /(required|slots|repeat)/i.test(key)) {
        parts.push(`<fieldset class="response-grid"><legend>${esc(label)}</legend>${Array.from({ length: value }, (_, index) => responseField(fieldName(activity.id, key, index), `${label} ${index + 1}`)).join("")}</fieldset>`);
      }
    });
    return parts.join("");
  };

  const completionCopy = value => {
    if (!value) return "Use the linked module section to check whether your response uses the right design language and evidence.";
    if (typeof value === "string") return esc(value);
    return `${value.complete ? `<strong>When complete:</strong> ${esc(value.complete)}` : ""}${value.retry ? `<span><strong>If something does not fit:</strong> ${esc(value.retry)}</span>` : ""}`;
  };

  const renderActivity = activity => {
    const module = course?.modules?.find(item => item.number === Number(activity.module));
    const instructions = asArray(activity.instructions);
    const support = asArray(activity.support);
    return `<article class="activity-card" id="${esc(activity.id)}" data-activity data-module="${esc(activity.module)}" data-search="${esc(`${activity.title} ${activity.mechanic} ${activity.practises} ${module?.title || ""}`.toLowerCase())}" data-storage-key="${esc(activity.storageKey || `activity:${activity.id}`)}">
      <header><p class="eyebrow">Module ${esc(activity.module)} · ${esc(activity.mechanic || "Applied learning")}</p><h2>${esc(activity.title)}</h2><p>${esc(activity.practises || activity.purpose || "Practise a course concept by using it in a new situation.")}</p></header>
      ${instructions.length ? `<section><h3>What to do</h3>${instructions.length === 1 ? `<p>${esc(instructions[0])}</p>` : `<ol>${instructions.map(renderInstruction).join("")}</ol>`}</section>` : ""}
      <section class="activity-parts"><h3>Challenge material</h3>${renderStructuredData(activity)}</section>
      ${support.length ? `<details class="activity-support"><summary>Support and clues</summary><ul>${support.map(item => `<li>${esc(item.text || item)}</li>`).join("")}</ul></details>` : ""}
      <label for="${esc(activity.id)}-response">Your working or response</label>
      <textarea id="${esc(activity.id)}-response" rows="7" data-activity-response placeholder="Type your response here. No drawing is required."></textarea>
      <div class="save-row"><button class="button" type="button" data-save-activity>Save activity</button>${activity.printable !== false ? `<button class="button secondary screen-only" type="button" data-print-activity>Print</button>` : ""}<span class="save-status" role="status" aria-live="polite"></span></div>
      <p class="completion-feedback">${completionCopy(activity.completionFeedback)}</p>
      ${module ? `<p class="return-link"><a href="modules/module-${String(module.number).padStart(2, "0")}.html">Return to Module ${module.number}: ${esc(module.title)} →</a></p>` : ""}
    </article>`;
  };

  host.innerHTML = activities.map(renderActivity).join("");

  const search = document.querySelector("[data-activity-search]");
  const filter = document.querySelector("[data-module-filter]");
  const empty = document.querySelector("[data-empty-activities]");
  const applyFilters = () => {
    const query = (search?.value || "").trim().toLowerCase();
    const module = filter?.value || "all";
    let visible = 0;
    document.querySelectorAll("[data-activity]").forEach(card => {
      const matchesText = !query || card.dataset.search.includes(query);
      const matchesModule = module === "all" || card.dataset.module === module;
      card.hidden = !(matchesText && matchesModule);
      if (!card.hidden) visible += 1;
    });
    if (empty) empty.hidden = visible !== 0;
  };
  search?.addEventListener("input", applyFilters);
  filter?.addEventListener("change", applyFilters);

  document.querySelectorAll("[data-activity]").forEach(card => {
    const field = card.querySelector("[data-activity-response]");
    const key = card.dataset.storageKey;
    const raw = store?.read(key, "") || "";
    let saved = { response: "", structured: {} };
    if (raw) {
      try { saved = { ...saved, ...JSON.parse(raw) }; }
      catch (_) { saved.response = raw; }
    }
    field.value = saved.response || "";
    card.querySelectorAll("[data-structured-field]").forEach(input => {
      const value = saved.structured?.[input.dataset.fieldKey];
      if (value === undefined) return;
      if (input.type === "checkbox") input.checked = Boolean(value);
      else input.value = value;
    });
    card.addEventListener("change", event => {
      const input = event.target.closest("[data-structured-field]");
      if (!input || input.dataset.answer === undefined) return;
      const output = input.closest(".structured-field")?.querySelector(".inline-feedback");
      const correct = String(input.value) === String(input.dataset.answer);
      output.textContent = input.value ? (correct ? `Correct. ${input.dataset.feedback || ""}` : `Recheck this choice. ${input.dataset.feedback || ""}`) : "";
      output.dataset.result = correct ? "correct" : "retry";
    });
    card.querySelector("[data-save-activity]")?.addEventListener("click", () => {
      const structured = {};
      card.querySelectorAll("[data-structured-field]").forEach(input => {
        structured[input.dataset.fieldKey] = input.type === "checkbox" ? input.checked : input.value;
      });
      const record = { response: field.value.trim(), structured, savedAt: new Date().toISOString() };
      const ok = store?.write(key, JSON.stringify(record)) !== false;
      const message = card.querySelector(".save-status");
      message.textContent = ok ? "Saved to this browser." : "Could not save in this browser.";
      message.dataset.state = ok ? "saved" : "error";
    });
    card.querySelector("[data-print-activity]")?.addEventListener("click", () => {
      document.body.classList.add("print-one");
      document.querySelectorAll("[data-activity]").forEach(other => other.classList.toggle("print-target", other === card));
      window.print();
      setTimeout(() => {
        document.body.classList.remove("print-one");
        document.querySelectorAll("[data-activity]").forEach(other => other.classList.remove("print-target"));
      }, 200);
    });
  });

  const hash = location.hash.slice(1);
  if (hash) {
    const target = document.getElementById(hash) || document.querySelector(`[data-module="${CSS.escape(hash.replace("module-", ""))}"]`);
    target?.scrollIntoView({ block: "start" });
  }
})();
