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
    console.log(text.innerText)
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
})















// SLIDER

const sliderContainer = document.querySelector('.slides-container')
const slides = document.querySelector('.slides')

const leftButton = document.querySelector('.slider-btn-left')
const rightButton = document.querySelector('.slider-btn-right');
const slidesLength = slides.querySelectorAll('div').length;
const sliderTextsContainer = document.querySelector('.slider-texts')
const sliderTexts = document.querySelectorAll('.slider-text')

const ST1 = document.querySelector('.slider-text-1')
const ST2 = document.querySelector('.slider-text-2')
const ST3 = document.querySelector('.slider-text-3')
const ST4 = document.querySelector('.slider-text-4')
const ST5 = document.querySelector('.slider-text-5')
const ST6 = document.querySelector('.slider-text-6')


let activeSlideIndex = 0

slides.style.left = `-${(slidesLength - 6) * 100}%`

leftButton.addEventListener('click', () => changeSlide('left'))
rightButton.addEventListener('click', () => changeSlide('right'))

const changeSlide = (direction) => {
   
    if(direction === 'right') {
       
       activeSlideIndex++
       if (activeSlideIndex > slidesLength - 1) {
           activeSlideIndex = 0
       }
       
        slides.style.transform = `translateX(${activeSlideIndex * -100}%)`

        if (activeSlideIndex === 0) {
            sliderTexts.forEach(sliderText => {
            sliderText.classList.remove('active-slider-text')
        })
            ST1.classList.add('active-slider-text')   
        }
        if (activeSlideIndex === 1) {
            sliderTexts.forEach(sliderText => {
            sliderText.classList.remove('active-slider-text')
        })
            ST2.classList.add('active-slider-text')   
        }
        if (activeSlideIndex === 2) {
            sliderTexts.forEach(sliderText => {
            sliderText.classList.remove('active-slider-text')
        })
            ST3.classList.add('active-slider-text')   
        }
        if (activeSlideIndex === 3) {
            sliderTexts.forEach(sliderText => {
            sliderText.classList.remove('active-slider-text')
        })
            ST4.classList.add('active-slider-text')   
        }
        if (activeSlideIndex === 4) {
            sliderTexts.forEach(sliderText => {
            sliderText.classList.remove('active-slider-text')
        })
            ST5.classList.add('active-slider-text')   
        }
        if (activeSlideIndex === 5) {
            sliderTexts.forEach(sliderText => {
            sliderText.classList.remove('active-slider-text')
        })
            ST6.classList.add('active-slider-text')   
        }
       
       
    }
    
    
    if(direction === 'left') {
        
         activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = 5
        }
        
        slides.style.transform = `translateX(${activeSlideIndex * -100}%)`

        if (activeSlideIndex === 0) {
            sliderTexts.forEach(sliderText => {
            sliderText.classList.remove('active-slider-text')
        })
            ST1.classList.add('active-slider-text')   
        }
        if (activeSlideIndex === 1) {
            sliderTexts.forEach(sliderText => {
            sliderText.classList.remove('active-slider-text')
        })
            ST2.classList.add('active-slider-text')   
        }
        if (activeSlideIndex === 2) {
            sliderTexts.forEach(sliderText => {
            sliderText.classList.remove('active-slider-text')
        })
            ST3.classList.add('active-slider-text')   
        }
        if (activeSlideIndex === 3) {
            sliderTexts.forEach(sliderText => {
            sliderText.classList.remove('active-slider-text')
        })
            ST4.classList.add('active-slider-text')   
        }
        if (activeSlideIndex === 4) {
            sliderTexts.forEach(sliderText => {
            sliderText.classList.remove('active-slider-text')
        })
            ST5.classList.add('active-slider-text')   
        }
        if (activeSlideIndex === 5) {
            sliderTexts.forEach(sliderText => {
            sliderText.classList.remove('active-slider-text')
        })
            ST6.classList.add('active-slider-text')   
        }
    }
    
}

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

// TIMER

const countdown = () => {
    const countDate = new Date('May 6, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000
    const minute = second * 60
    const hour = minute * 60 
    const day = hour * 24

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector('.hours').innerText = textHour
    document.querySelector('.minutes').innerText = textMinute
    document.querySelector('.seconds').innerText = textSecond
}

setInterval(countdown, 1000)