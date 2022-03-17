let theme = localStorage.getItem("theme")

// NIE WIEM CZY COOKIE DZIAŁAJĄ

// if(theme === null){
//     setTheme('light')
// } else {
//     setTheme(theme)
// }

let themeDots = document.querySelectorAll(".theme-dot")

let arr = Array.from(themeDots)

arr.forEach((dot) =>{
   
    dot.addEventListener("click", () => {
        let clr = dot.dataset.mode
        
         function setTheme(clr){ 
            if(clr === 'blue') {
            document.getElementById("theme-style-color").href = "/TraversyMedia/Portfolio/theme2.css"
            } 
            if(clr === 'light') {
            document.getElementById("theme-style-color").href = "/TraversyMedia/Portfolio/index.css"
            }

            localStorage.setItem("theme", clr)
        }
        
        setTheme(clr)
    })
})



