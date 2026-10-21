(function () {
  const num = Number(prompt('How many times should this page appear in history?')) || 1;
  const x = window.location.href;
  for (let i = 0; i < num; i++) {
    history.pushState({}, '', x);
  }
})();
