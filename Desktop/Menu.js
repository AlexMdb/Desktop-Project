const menu = document.getElementById('options-menu');
const kebab = document.getElementById('kebab');
const thumbnails = document.getElementById('wallpaper-sample');

function showMenu(){
    menu.style.left = '0vw';
    kebab.style.display = 'none';
}

function hideMenu(){
    menu.style.left = '-40vw';
    kebab.style.display = 'block';
}

document.addEventListener('click', function(event){
    if (event.target !== menu && event.target !== kebab && event.target !== thumbnails){
        hideMenu();
    }
});