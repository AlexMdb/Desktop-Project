// Get references to DOM elements
const menu = document.getElementById('options-menu');  // The options menu
const kebab = document.getElementById('kebab');  // The kebab icon
const thumbnails = document.getElementById('wallpaper-sample');  // The wallpaper thumbnails

// Function to show the menu
function showMenu(){
    menu.style.left = '0vw';  // Move menu to the left, making it visible
    kebab.style.display = 'none';  // Hide the kebab icon
}

// Function to hide the menu
function hideMenu(){
    menu.style.left = '-40vw';  // Move menu to the left, hiding it
    kebab.style.display = 'block';  // Show the kebab icon
}

// Event listener to hide the menu when clicking outside of it
document.addEventListener('click', function(event){
    if (event.target !== menu && event.target !== kebab && event.target !== thumbnails){
        hideMenu();
    }
});
