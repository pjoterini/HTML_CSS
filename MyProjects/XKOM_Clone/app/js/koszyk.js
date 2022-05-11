
const addToCartBtn = document.querySelector('.add-to-cart-btn')
const removeFromCartBtn = document.querySelectorAll('.remove-from-cart-btn')
const itemQuantityCart = document.querySelector('.item-quantity-cart')
const emptyCartSection = document.querySelector('.koszyk-pusty-container')
const cartSection = document.querySelector('.koszyk')
const cartImgCounter = document.querySelector('.cart')

itemQuantityCart.value = localStorage.getItem('cartQuantity')

let cartImgCounterAfter = window.getComputedStyle(cartImgCounter, '::after');
    cartImgCounter.style.setProperty('--content',`'${itemQuantityCart.value}'`)

if (itemQuantityCart.value < 1) {
    cartSection.classList.add('hide')
} 
if (itemQuantityCart.value > 0) {
    cartImgCounter.style.setProperty('--visible', 'visible');
    emptyCartSection.classList.add('hide');
}
if (itemQuantityCart.value > 10) {
    itemQuantityCart.value = 10
 }

itemQuantityCart.addEventListener('input', () => {

    //Zmiana stylu elementu ::after na ilość produktu 
    let cartImgCounterAfter = window.getComputedStyle(cartImgCounter, '::after');
    cartImgCounter.style.setProperty('--content',`'${itemQuantityCart.value}'`)
    // Opróżnianie koszyka przez przycisk, :after niewidoczny
    removeFromCartBtn.forEach((removeBtn) => {
        let removeFromCart = removeBtn
    
        removeFromCart.addEventListener('click', () => {
            cartSection.classList.add('hide')
            cartImgCounter.style.setProperty('--visible', 'hidden')
        })
    })
    // Chowanie produktu przy ilości produktów mniejszej niż 1
    if (itemQuantityCart.value < 1) {
        cartSection.classList.add('hide')
    } 
    // :After widoczny gdy ilość produktów większa niż 0
    if (itemQuantityCart.value > 0) {
        cartImgCounter.style.setProperty('--visible', 'visible');
        emptyCartSection.classList.add('hide');
    }
    // Ilość produktu nie większa niż 10 
    if (itemQuantityCart.value > 10) {
       itemQuantityCart.value = 10
    }
    
})




