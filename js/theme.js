(function () {
  var STORAGE_KEY = 'theme';
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
  }

  // Initial theme is applied inline in the <head> to prevent FOUC,
  // but we re-apply here to ensure button state is in sync.
  var stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (_) { /* no-op */ }
  var initial = stored === 'dark' || stored === 'light'
    ? stored
    : (root.getAttribute('data-theme') || 'light');
  applyTheme(initial);

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    applyTheme(root.getAttribute('data-theme') || 'light');

    btn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (_) { /* no-op */ }
    });
  });
})();
