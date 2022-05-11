const addToCartBtn = document.querySelector('.add-to-cart-btn')
const removeFromCartBtn = document.querySelectorAll('.remove-from-cart-btn')
const itemQuantityCart = document.querySelector('.item-quantity-cart')
const emptyCartSection = document.querySelector('.koszyk-pusty-container')
const cartSection = document.querySelector('.koszyk')
const cartImgCounter = document.querySelector('.cart')

// let amount = localStorage['cartQuantity']

addToCartBtn.addEventListener('click', () => {
    // amount++
    localStorage['cartQuantity']++
    console.log(localStorage['cartQuantity'])

    let cartImgCounterAfter = window.getComputedStyle(cartImgCounter, '::after');

    cartImgCounter.style.setProperty('--content',`'${localStorage['cartQuantity']}'`)

    if (localStorage['cartQuantity'] > 10) {
        localStorage['cartQuantity'] = 10;
    }

    if (localStorage['cartQuantity'] > 0) {
        cartImgCounter.style.setProperty('--visible', 'visible');
    }
})






