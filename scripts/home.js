(() => {
  const grid = document.querySelector("[data-module-grid]");
  const course = window.YEAR7_MULTIMEDIA;
  if (!grid || !course) return;
  grid.innerHTML = course.modules.map(module => `
    <article class="card module-card">
      <p class="module-stage">Module ${module.number}</p>
      <h3>${module.title}</h3>
      <p>${module.summary}</p>
      <span class="module-status">3 theory sections · checks · applied evidence</span>
      <a href="modules/module-${String(module.number).padStart(2, "0")}.html" aria-label="Open Module ${module.number}: ${module.title}">Open module</a>
    </article>`).join("");
})();
