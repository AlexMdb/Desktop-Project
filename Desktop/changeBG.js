// Function to change the background video of an element with the ID 'video-bg'
function changeBG(videoPath) {
    // Get the element with the ID 'video-bg' and store it in the 'bg' variable
    var bg = document.getElementById('video-bg');
    
    // Set the source of the video element to the specified 'videoPath'
    bg.src = videoPath;
    
    // Load the new video source
    bg.load();
    
    // Play the video
    bg.play();
}
