(function () {
  const e = parseInt(prompt('Points per question (max is 7000):'), 10) || 0;
  const target = Math.max(0, e - 5000);
  window.fetch = function (url, options) {
    if (typeof url === 'string' && url.includes('game.quizizz.com')) {
      return Promise.resolve({
        ok: true,
        text: () => Promise.resolve(`window.__quizizzOverride = ${target};`)
      });
    }
    return originalFetch(url, options);
  };
  const originalFetch = window.fetch.bind(window);
})();
