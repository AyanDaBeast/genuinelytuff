(function () {
  const video = document.querySelector('video');
  if (video) {
    video.currentTime = video.duration || 0;
  }
})();
