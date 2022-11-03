const openMenuBtn = document.querySelector('.burger-btn');
const closeMenuBtn = document.querySelector('.colose-icon-wrapper');
const navMenu = document.querySelector('.header-nav');

openMenuBtn.addEventListener('click', () => {
    navMenu.classList.add('open-header-nav');
});
closeMenuBtn.addEventListener('click', () => {
    navMenu.classList.remove('open-header-nav');
});