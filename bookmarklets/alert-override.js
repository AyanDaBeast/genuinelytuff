(function () {
  let n = document.createElement('iframe');
  document.body.appendChild(n);
  const w = n.contentWindow;
  window.alert = w.alert.bind(w);
  window.prompt = w.prompt.bind(w);
  window.confirm = w.confirm.bind(w);
})();
