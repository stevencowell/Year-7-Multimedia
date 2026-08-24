(() => {
  "use strict";

  const config = window.YEAR7_MULTIMEDIA_ASSESSMENT;
  const root = document.querySelector("[data-assessment-guide-root]");
  if (!config || !root) return;

  const areasHost = root.querySelector("[data-assessment-evidence-areas]");
  const checkbox = root.querySelector("[data-assessment-ack]");
  const acknowledgementStatus = root.querySelector("[data-assessment-ack-status]");

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function renderEvidenceAreas() {
    areasHost.replaceChildren();
    config.evidenceAreas.forEach((area, index) => {
      const card = createElement("article", "assessment-guide-area");
      card.dataset.evidenceArea = area.id;
      card.append(createElement("p", "assessment-guide-kicker", `Evidence area ${index + 1}`));
      card.append(createElement("h4", "", area.title));
      card.append(createElement("p", "", area.studentAction));
      const list = createElement("ul");
      area.usefulEvidence.forEach(item => list.append(createElement("li", "", item)));
      card.append(list);
      const question = createElement("p", "assessment-guide-area-question");
      question.innerHTML = `<strong>Feedback check:</strong> ${escapeHtml(area.feedbackQuestion)}`;
      card.append(question);
      card.append(createElement("p", "assessment-guide-area-link", `Related folio stage${area.folioStages.length === 1 ? "" : "s"}: ${area.folioStages.join(", ")}`));
      areasHost.append(card);
    });
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatSavedTime(iso) {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "an unknown time";
    return new Intl.DateTimeFormat("en-AU", { dateStyle: "medium", timeStyle: "short" }).format(date);
  }

  function readAcknowledgement() {
    let record = null;
    try { record = JSON.parse(localStorage.getItem(config.acknowledgementKey) || "null"); }
    catch (_) { record = null; }
    if (record?.courseId === config.courseId && record?.guideVersion === config.guideVersion && record?.acknowledgedAt) {
      checkbox.checked = true;
      acknowledgementStatus.textContent = `Read receipt saved locally ${formatSavedTime(record.acknowledgedAt)}.`;
      return record;
    }
    checkbox.checked = false;
    acknowledgementStatus.textContent = "No browser-local read receipt saved.";
    return null;
  }

  function updateAcknowledgement() {
    try {
      if (checkbox.checked) {
        const record = {
          courseId: config.courseId,
          guideVersion: config.guideVersion,
          acknowledgedAt: new Date().toISOString()
        };
        localStorage.setItem(config.acknowledgementKey, JSON.stringify(record));
        acknowledgementStatus.textContent = `Read receipt saved locally ${formatSavedTime(record.acknowledgedAt)}.`;
      } else {
        localStorage.removeItem(config.acknowledgementKey);
        acknowledgementStatus.textContent = "Browser-local read receipt cleared.";
      }
    } catch (_) {
      checkbox.checked = false;
      acknowledgementStatus.textContent = "This browser could not save the read receipt. The guide remains usable.";
    }
  }

  function initialise() {
    renderEvidenceAreas();
    const previewRoute = location.pathname.replace(/\\/g, "/").includes("/handoff/assessment/");
    root.querySelectorAll("[data-assessment-course-href]").forEach(link => {
      const href = link.dataset.assessmentCourseHref;
      link.href = previewRoute ? `../../${href}` : href;
    });
    root.querySelectorAll("[data-assessment-version]").forEach(element => { element.textContent = config.guideVersion; });
    checkbox.addEventListener("change", updateAcknowledgement);
    root.querySelector("[data-assessment-print]")?.addEventListener("click", () => window.print());
    return readAcknowledgement();
  }

  const acknowledgement = initialise();
  window.Year7MultimediaAssessmentGuide = Object.freeze({
    ready: Promise.resolve(true),
    getAcknowledgement: () => readAcknowledgement(),
    initialAcknowledgement: acknowledgement
  });
})();
