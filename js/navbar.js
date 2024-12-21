const minWidthBrkPoint = 560; 

const nav = document.querySelector('.nav-container');
const drawer = document.querySelector('.drawer');
const toggleBtn = document.querySelector('.toggle-btn');
const topNav = document.querySelector('.top-nav');

let height = topNav.scrollHeight;


toggleBtn.addEventListener('click', toggleMenu);
window.addEventListener('resize', forResize);

function toggleMenu() {
    nav.classList.toggle('is-open');
    if (nav.classList.contains('is-open')) {
        drawer.style.height = `${height}px`;
    }
    else {
        drawer.style.height = 0;
    }
}


function forResize() {
    let newHeight = topNav.scrollHeight;
    console.log(newHeight);
    if (window.innerWidth >= minWidthBrkPoint) {
        if (nav.classList.contains('is-open')) {
            nav.classList.remove('is-open');  
        }
        drawer.style.height = 'auto'; 

    }
    if (window.innerWidth < minWidthBrkPoint && !(nav.classList.contains('is-open'))) {
        drawer.style.height = 0;
    }
    height = newHeight;
}
