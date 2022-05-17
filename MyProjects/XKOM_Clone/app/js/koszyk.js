const removeFromCartBtn = document.querySelectorAll('.remove-from-cart-btn')
const itemQuantityCart = document.querySelector('.item-quantity-cart')
const emptyCartSection = document.querySelector('.koszyk-pusty-container')
const cartSection = document.querySelector('.koszyk')
const cartImgCounter = document.querySelector('.cart')

const fullPrice = document.querySelector('.full-price')
const youSave = document.querySelector('.you-save')
const firstLineAmount = document.querySelector('.first-line-amount')

// Dostawanie się do pseudo elementu :after

let cartImgCounterAfter = window.getComputedStyle(cartImgCounter, '::after');

cartImgCounter.style.setProperty('--content',`'${localStorage['cartQuantity']}'`);

// Wartość inputu i DOM elementów 

itemQuantityCart.value = localStorage['cartQuantity']

fullPrice.innerText = `${3799 * localStorage['cartQuantity']},00 zł`
youSave.innerText = `${200 * localStorage['cartQuantity']} zł`
firstLineAmount.innerText = `Koszyk (${localStorage['cartQuantity']})`

if (localStorage['cartQuantity'] == 0) {
    cartSection.classList.add('hide')
} 
if (localStorage['cartQuantity'] > 0) {
    cartImgCounter.style.setProperty('--visible', 'visible');
    emptyCartSection.classList.add('hide');
}
if (localStorage['cartQuantity'] > 10) {
    localStorage['cartQuantity'] = 10
 }

 // Opróżnianie koszyka przez przycisk, :after niewidoczny
 removeFromCartBtn.forEach((removeBtn) => {
    let removeFromCart = removeBtn

    removeFromCart.addEventListener('click', () => {
        cartSection.classList.add('hide');
        cartImgCounter.style.setProperty('--visible', 'hidden');
        localStorage['cartQuantity'] = 0;
        emptyCartSection.classList.remove('hide');
    })
})
//  aktualizacja ilości produktu po naduszeniu Enter gdy zaznaczony jest input
itemQuantityCart.addEventListener('keypress', (e)=> {
    if (e.keyCode === 13) {
        e.preventDefault();
        inputExit()
    }
})
//  aktualizacja ilości produktu po wyjściu z inputu
function inputExit() {
    if (itemQuantityCart.value > 10) {
        itemQuantityCart.value = 10
    }
    if (itemQuantityCart.value < 1) {
        itemQuantityCart.value = 1
    }
      //Zmiana stylu elementu ::after na ilość produktu 
    cartImgCounter.style.setProperty('--content',`'${itemQuantityCart.value}'`)

    localStorage['cartQuantity'] = itemQuantityCart.value

    fullPrice.innerText = `${3799 * localStorage['cartQuantity']},00 zł`
    youSave.innerText = `${200 * localStorage['cartQuantity']} zł`
    firstLineAmount.innerText = `Koszyk (${localStorage['cartQuantity']})`
}


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

// BURGER MENU

const hamburgerMenuBtn = document.querySelector('.hamburger-menu')
const headerMenuItems = document.querySelector('.header-menu-items')

hamburgerMenuBtn.addEventListener('click', () => {
    hamburgerMenuBtn.classList.toggle('hamburger-active')
    headerMenuItems.classList.toggle('small-device')
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


