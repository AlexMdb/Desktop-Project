document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const playlist = document.getElementById('playlist');
    const currentlyPlayingElement = document.getElementById('currentlyPlaying');
    let currentlyPlayingFile = null; 

    fileInput.addEventListener('change', handleFileUpload);

    function handleFileUpload(event) {
        const files = event.target.files;

        // Clear the existing playlist
        playlist.innerHTML = '';

        for(const file in files){
            //Display File Name on Playlist
            const listItem = document.createElement('li');
            listItem.textContent = file.name;

            listItem.addEventListener('click', () => playFile(file));
            playlist.appendChild(listItem);
        }
    }

    function playFile(file){
        // Simulate playing the file ???
        currentlyPlayingFile = file;
        updateCurrentlyPlaying();
    }

    function updateCurrentlyPlaying(){
        if(currentlyPlayingFile){
            currentlyPlayingElement.textContent = 'You are Listening to: ${currentlyPlayingFile.name}';
        }
        else{
            currentlyPlayingElement.textContent = 'You are Listening to: None'
        }
    }

});