(function () {
  var host = window.location.hostname;
  if (host === 'edpuzzle.com') {
    var r = new XMLHttpRequest();
    r.open('GET', 'https://cdn.jsdelivr.net/gh/ading22/edpuzzlehelper@main/edpuzzle.js', true);
    r.onload = function () {
      if (r.status >= 200 && r.status < 400) {
        eval(r.responseText);
      }
    };
    r.send();
  }
})();
