(function () {
  document.querySelectorAll('.paywalled-section, .paywall, .locked-content').forEach(el => {
    el.style.display = 'block';
    el.style.filter = 'none';
    el.style.opacity = '1';
    el.removeAttribute('aria-hidden');
  });
})();
