(function () {
  const inputs = document.querySelectorAll('input[type="password"], input[placeholder*="password" i]');
  inputs.forEach(input => {
    input.type = 'text';
    input.style.background = '#fff7d6';
    input.style.border = '2px solid #f59e0b';
  });
})();
