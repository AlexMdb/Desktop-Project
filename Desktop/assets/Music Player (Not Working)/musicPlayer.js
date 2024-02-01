document.addEventListener('DOMContentLoaded', function () {

    // Adds Files to the playlist
    const fileInput = document.getElementById('fileInput');
    const currentlyPlayingElement = document.getElementById('currentlyPlaying');
    let currentlyPlayingFile = null; 

    const playlist = document.getElementById('playlist');

    const audioPlayer = document.getElementById('audioPlayer');

    const songs = [
        { name: 'Cupid - Vedal', source: 'Cupid (Twin Ver.) - Vedal.mp3' },
        { name: 'Song 2', source: 'song2.mp3' },
        // Add more songs as needed
    ];

    // Populate the playlist
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = song.name;
        listItem.addEventListener('click', () => playSong(index));
        playlist.appendChild(listItem);
    });

    let currentSongIndex = 0;

    function playSong(index) {
        if (index === currentSongIndex && !audioPlayer.paused) {
            // If the clicked song is the currently playing song and the player is not paused, pause the player
            audioPlayer.pause();
        } else {
            // Otherwise, play the clicked song
            currentSongIndex = index;
            const selectedSong = songs[index];
            audioPlayer.src = selectedSong.source;
            audioPlayer.play();
        }
    }
});
