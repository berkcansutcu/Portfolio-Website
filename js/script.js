document.addEventListener("scroll", (e) => {
    let imgdiv = document.getElementById("img-div")
    let toUp =document.getElementById("toUp")
    if(window.scrollY<=450){
        imgdiv.style.display="none";
        toUp.style.display="none";
    }
    if(window.scrollY>450){
        imgdiv.style.display="block";
        toUp.style.display="block";
    }
}) 

let toUp = document.getElementById("toUp")
toUp.addEventListener("click", (e) => {
    window.scrollTo(0,0);
})


 let navBtn = document.getElementById("navBtn")
 navBtn.addEventListener("click", (e) => {
     let links = document.getElementById("links")
     if (links.classList.contains('hide')) {
        links.classList.remove('hide');
      } else {
        links.classList.add('hide');
      }

      e.preventDefault();
 })

 let links = document.getElementById("links")
 links.addEventListener("click", (e) => {
    links.classList.remove('hide');
 })