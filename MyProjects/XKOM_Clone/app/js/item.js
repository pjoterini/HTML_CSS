const addToCartBtn = document.querySelector('.add-to-cart-btn')
const itemQuantityCart = document.querySelector('.item-quantity-cart')
const cartImgCounter = document.querySelector('.cart')
const modal = document.querySelector('.modal')

let cartImgCounterAfter = window.getComputedStyle(cartImgCounter, '::after');

cartImgCounter.style.setProperty('--content',`'${localStorage['cartQuantity']}'`);

if (localStorage['cartQuantity'] > 0) {
    cartImgCounter.style.setProperty('--visible', 'visible');
}

addToCartBtn.addEventListener('click', () => {
    modal.classList.add('opacity')
    setTimeout(opacityDown, 2000)

    function opacityDown() {
      modal.classList.remove('opacity')
    }

    localStorage['cartQuantity']++

    if (localStorage['cartQuantity'] > 10) {
        localStorage['cartQuantity'] = 10;
    }

    cartImgCounter.style.setProperty('--content',`'${localStorage['cartQuantity']}'`)

    cartImgCounter.style.setProperty('--visible', 'visible')


})

// DARK MODE

const lightModeBtn = document.querySelector('.light')
const darkModeBtn = document.querySelector('.dark')

let link = document.createElement('link')
link.rel = 'stylesheet'
link.href = '/dist/dark-mode.css'

darkModeBtn.addEventListener('click', () => {
  darkModeBtn.classList.add('active')
  lightModeBtn.classList.remove('active')
  document.head.appendChild(link)
})

lightModeBtn.addEventListener('click', () => {
  darkModeBtn.classList.remove('active')
  lightModeBtn.classList.add('active')
  document.head.removeChild(link)
})

// WHY CART

let openWhyBtn = document.querySelector('.open-why-btn')
let whyCart = document.querySelector('.why-cart')

openWhyBtn.addEventListener('click', () => {
    openWhyBtn.classList.add('hidden')
    whyCart.classList.remove('hidden')
})

whyCart.addEventListener('click', () => {
    whyCart.classList.add('hidden')
    openWhyBtn.classList.remove('hidden')
})




