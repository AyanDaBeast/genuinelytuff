(function () {
  const ignoreList = ['iframe', 'script', 'img'];
  document.querySelectorAll('*').forEach(node => {
    if (!ignoreList.includes(node.tagName.toLowerCase())) {
      node.style.filter = 'none';
    }
  });
})();
