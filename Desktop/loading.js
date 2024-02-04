// This function is triggered when the window finishes loading
window.onload = function () {
    
        // Get the reference to the loading screen element
        var loadingScreen = document.getElementById('loading');
    
        // Hide the loading screen
        loadingScreen.style.display = 'none';
    
        // Show the main content after the loading is complete
        document.getElementById('main').style.display = 'block';
    };
    