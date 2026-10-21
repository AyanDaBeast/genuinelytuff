(function () {
  var color = window.prompt('Enter a color (e.g. red, yellow, blue):');
  if (!color) return;
  var range = window.getSelection();
  if (!range || range.rangeCount === 0) return;
  var el = document.createElement('span');
  el.style.color = color;
  var selected = range.getRangeAt(0);
  selected.surroundContents(el);
})();
