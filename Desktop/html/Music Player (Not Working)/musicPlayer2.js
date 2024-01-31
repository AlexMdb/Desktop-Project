document.addEventListener('DOMContentLoaded', function() {
    // Inputs Files:
    const fileInput = document.getElementById('fileInput');

    // Finds the <ul> element with the 'playlist' id:
    const playlist = document.getElementById('playlist');

    // Finds the <p> element with the 'currentlyPlaying' id:
    const currentlyPlayingElement = document.getElementById('currentlyPlaying');

    // Makes the currently playing song into 'null:
    let currentlyPlayingFile = null; 

    // Adds a Listener that does something??? when a file is uploaded:
    fileInput.addEventListener('change', handleFileUpload);

    function handleFileUpload(event){
        // Variable for the files:
        const songs = event.target.files;

        songs.forEach((song, index) => {

            // Creates a <li> element inside the Playlist:
            const listItem = document.createElement('li');

            // Changes the text on the <li> element:
            listItem.textContent = song.name;

            listItem.addEventListener('click', () => playFile(index));
            playlist.appendChild(listItem);
    });

}});