(() => {
  const course = window.YEAR7_MULTIMEDIA || { storagePrefix: "year7multimedia:" };
  const prefix = course.storagePrefix;

  const normaliseKey = (name) => {
    const value = String(name || "");
    return value.startsWith(prefix) ? value : `${prefix}${value}`;
  };

  window.Year7MultimediaStore = Object.freeze({
    prefix,
    key(name) { return normaliseKey(name); },
    read(name, fallback = "") {
      try { return localStorage.getItem(normaliseKey(name)) ?? fallback; }
      catch (_) { return fallback; }
    },
    write(name, value) {
      try { localStorage.setItem(normaliseKey(name), String(value)); return true; }
      catch (_) { return false; }
    },
    remove(name) {
      try { localStorage.removeItem(normaliseKey(name)); return true; }
      catch (_) { return false; }
    },
    entries() {
      try {
        return Object.keys(localStorage)
          .filter(key => key.startsWith(prefix))
          .sort()
          .map(key => [key, localStorage.getItem(key)]);
      } catch (_) { return []; }
    }
  });

  document.querySelectorAll("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
  document.querySelectorAll('[data-nav-key="busy-work"]').forEach(link => { link.textContent = "Challenges"; });

  const path = location.pathname.replace(/\\/g, "/");
  const current = path.includes("/modules/") ? "modules" : (path.split("/").pop() || "index.html").replace(".html", "");
  document.querySelectorAll("[data-nav-key]").forEach(link => {
    if (link.dataset.navKey === current || (current === "index" && link.dataset.navKey === "course")) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
})();
