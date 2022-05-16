let sztuka = document.querySelector('.sztuka')
let beforePrice = document.querySelectorAll('.before-price')
let afterPrice = document.querySelectorAll('.after-price')
let save = document.querySelector('.save')

beforePrice.forEach((price) => {
  price.innerText = `${3999 * localStorage['cartQuantity']},00 zł`
})
afterPrice.forEach((price) => {
  price.innerText = `${3799 * localStorage['cartQuantity']},00 zł`
})

sztuka.innerText = `(${localStorage['cartQuantity']}) szt.`
save.innerText = `${200 * localStorage['cartQuantity']} zł`

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

// RADIO BATONY 

const radioBtns = document.querySelectorAll('.radio-btn-input')
const checkBoxes = document.querySelectorAll('.check-box')

radioBtns.forEach(radioBtn => {
  radioBtn.addEventListener('click', (e) => {
    checkBoxes.forEach(checkBox => {
      if (checkBox.classList.contains('check-box-clicked')) {
        checkBox.classList.remove('check-box-clicked')
        e.target.parentElement.parentElement.parentElement.classList.add('check-box-clicked')
      }
    })
  })
})

const radioBtns2 = document.querySelectorAll('.i2')
const checkBoxes2 = document.querySelectorAll('.cb2')

radioBtns2.forEach(radioBtn => {
  radioBtn.addEventListener('click', (e) => {
    checkBoxes2.forEach(checkBox => {
      if (checkBox.classList.contains('check-box-clicked-2')) {
        checkBox.classList.remove('check-box-clicked-2')
        e.target.parentElement.parentElement.parentElement.classList.add('check-box-clicked-2')
      }
    })
  })
})

// FORM

const formInputs = document.querySelectorAll('.form-input')
const forms = document.querySelectorAll('form')

formInputs.forEach(formInput => {
  formInput.addEventListener('click', (e) => {
      e.target.parentElement.classList.add('input-active')
  })

  formInput.addEventListener('focusout', (e) => {
    if (formInput.value === '') {
      e.target.parentElement.classList.remove('input-active')
    }
  })
})

// BTN - END

const btnEnd = document.querySelector('.btn-end')
const thankYouModal = document.querySelector('.thank-you-modal')

btnEnd.addEventListener('click', () => {
  thankYouModal.classList.remove('hide')
  localStorage.setItem('cartQuantity', '0')
})

