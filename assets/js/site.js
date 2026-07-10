(function () {
  const root = document.documentElement;
  const select = document.getElementById('themeSelect');
  const valid = new Set(['steel-desk', 'ink-high-contrast']);
  const key = 'owrt-space-console-pages-verified-theme';

  function sanitize(value) {
    return valid.has(value) ? value : 'steel-desk';
  }

  function themeFromUrl() {
    try {
      const value = new URLSearchParams(window.location.search).get('theme');
      return valid.has(value) ? value : null;
    } catch (error) {
      return null;
    }
  }

  function storedTheme() {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function setTheme(value) {
    const theme = sanitize(value);
    root.setAttribute('data-theme', theme);
    if (select) select.value = theme;
    return theme;
  }

  setTheme(themeFromUrl() || storedTheme() || root.getAttribute('data-theme'));

  if (select) {
    select.addEventListener('change', function () {
      const theme = setTheme(select.value);
      try { localStorage.setItem(key, theme); } catch (error) {}
    });
  }
}());
