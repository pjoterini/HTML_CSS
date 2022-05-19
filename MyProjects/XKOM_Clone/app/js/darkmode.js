// DARK MODE

// darkmode file
let link = document.createElement('link')
link.rel = 'stylesheet'
link.href = '/dist/dark-mode.css'

const lightModeBtn = document.querySelector('.light')
const darkModeBtn = document.querySelector('.dark')

if (localStorage['darkMode'] == null) {
    localStorage.setItem('darkMode', 'light')
}
if (localStorage['darkMode'] == 'dark') {
    document.head.appendChild(link)
    darkModeBtn.classList.add('active')
    lightModeBtn.classList.remove('active')
}

darkModeBtn.addEventListener('click', () => {
  darkModeBtn.classList.add('active')
  lightModeBtn.classList.remove('active')
  localStorage.setItem('darkMode', 'dark')
  document.head.appendChild(link)
})

lightModeBtn.addEventListener('click', () => {
  darkModeBtn.classList.remove('active')
  lightModeBtn.classList.add('active')
  localStorage.setItem('darkMode', 'light')
  document.head.removeChild(link)
})

