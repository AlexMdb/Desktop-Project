function changeBG(videoPath) {
    var bg = document.getElementById('video-bg');
    bg.src = videoPath;
    bg.load();
    bg.play();
}
