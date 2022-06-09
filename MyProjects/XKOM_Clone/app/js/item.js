
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

// SEARCHBAR 

const searchTexts = document.querySelectorAll('.search-text')
let itemInfoContainer = document.querySelector('.item-info-container')
const itemInfoCard = document.querySelector('[data-item-info-card')
const searchInput = document.querySelector('[data-search]')

searchTexts.forEach(searchText => {
    const card = itemInfoCard.content.cloneNode(true).children[0]
    const text = card.querySelector('[data-text]')
    text.textContent = searchText.innerText
    itemInfoContainer.append(card)
})

let cards = itemInfoContainer.querySelectorAll('.item-info-card')

searchInput.addEventListener('input', (e) => {
    itemInfoContainer.classList.remove('hide')
    
    const value = e.target.value.toLowerCase()
    console.log(value)
    cards.forEach(card => {
        const isVisible = card.innerText.toLowerCase().includes(value)
        card.classList.toggle('hide', !isVisible)
    })

    if (value === '') {
        itemInfoContainer.classList.add('hide')
    }
})

// ASYNC

async function catchTestImg() {
    const response = await fetch('/images/item-site/1.webp')
    const blob = await response.blob()
    document.getElementById('test-img').src = URL.createObjectURL(blob)
}

catchTestImg()
