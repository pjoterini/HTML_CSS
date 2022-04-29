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
