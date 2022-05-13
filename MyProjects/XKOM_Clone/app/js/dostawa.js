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