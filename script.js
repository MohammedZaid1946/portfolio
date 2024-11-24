
// JavaScript to toggle the navigation menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const navOptions = document.querySelector('.nav-options');

hamburgerMenu.addEventListener('click', () => {
    navOptions.classList.toggle('active');
});

