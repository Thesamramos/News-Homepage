const btnOpen = document.getElementById('btn_open');
const btnClose = document.getElementById('btn_close');
const mobileNav = document.querySelector('.mobile_nav');
const container = document.querySelector('.container');

btnOpen.addEventListener('click', () => {
    mobileNav.style.display = "block";
})

btnClose.addEventListener('click', () => {
    mobileNav.style.display = "none";
})