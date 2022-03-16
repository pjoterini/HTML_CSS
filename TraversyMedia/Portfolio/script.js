let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i;  i++){
   themeDots[i].addEventListener('click', function(){
       let mode = this.dataset.mode
       console.log("option clicked:", mode)
   }) 
}

