(function () {
  window.onbeforeunload = function () {
    return 'Do you want to close this tab?';
  };
  alert('Tab Secured');
})();
