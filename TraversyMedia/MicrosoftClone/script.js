let hamburger = document.querySelector('.menu-btn')
let menu = document.querySelector('.main-menu')

hamburger.addEventListener('click' , () => {
    menu.classList.toggle('show')
})