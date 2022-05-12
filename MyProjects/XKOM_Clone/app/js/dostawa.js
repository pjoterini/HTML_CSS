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
