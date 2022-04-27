let hideImg = document.querySelector('#hide-menu')
let openImg = document.querySelector('#open-menu')
let navLinks = document.querySelector('#nav-links')

console.log(navLinks)
hideImg.addEventListener('click', () => {
    navLinks.style.right = "-250px"
}) 

openImg.addEventListener('click', () => {
    navLinks.style.right = "0"
}) 

