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

