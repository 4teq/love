
const minWidthBrkPoint = 576;
const button = document.querySelector('.navbar-toggle');
const menu = document.querySelector(".navbar");
button.addEventListener('click', (e) => {
    e.preventDefault();
    
    menu.classList.toggle('is-open');
});

window.addEventListener('resize', forResize);

function forResize() {
    if (window.innerWidth >= minWidthBrkPoint) {
        if (menu.classList.contains('is-open')) {
            menu.classList.remove('is-open');
        }
    }
    
}