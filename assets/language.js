// Keep both language URLs crawlable; a saved choice only shows a suggestion.
const validLanguage = value => value === 'ru' || value === 'en';
function rememberLanguage(language) {
  try { localStorage.setItem('lang', language); } catch (_) {}
  try { document.cookie = 'lang=' + language + ';path=/;max-age=31536000;SameSite=Lax' + (location.protocol === 'https:' ? ';Secure' : '') + (/(^|\.)rudik\.dev$/.test(location.hostname) ? ';domain=rudik.dev' : ''); } catch (_) {}
}
function prepareLanguageLink(link) {
  link.addEventListener('click', () => {
    rememberLanguage(link.hreflang);
    const url = new URL(link.href);
    url.hash = location.hash;
    link.href = url.href;
  });
}
document.querySelectorAll('.lang a').forEach(prepareLanguageLink);
document.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link || validLanguage(link.hreflang)) return;
  if (/(^|\.)rudik\.dev$/.test(link.hostname)) rememberLanguage(document.documentElement.lang);
});
let preferred = null;
try { const cookie = /(?:^|;\s*)lang=([^;]+)/.exec(document.cookie); if (cookie && validLanguage(cookie[1])) preferred = cookie[1]; } catch (_) {}
if (!preferred) { try { const saved = localStorage.getItem('lang'); if (validLanguage(saved)) preferred = saved; } catch (_) {} }
if (!preferred) preferred = /^en(?:-|_|$)/i.test(navigator.languages?.[0] || navigator.language || '') ? 'en' : 'ru';
if (preferred !== document.documentElement.lang) {
  const suggestion = document.querySelector('.language-suggestion');
  const link = document.createElement('a');
  link.href = preferred === 'ru' ? '/ru/' : '/';
  link.hreflang = preferred;
  link.lang = preferred;
  link.textContent = preferred === 'ru' ? 'Читать эту страницу на русском' : 'Prefer English? Read this page in English.';
  prepareLanguageLink(link);
  suggestion.append(link);
  suggestion.hidden = false;
}
