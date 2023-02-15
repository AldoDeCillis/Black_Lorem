let navbar = document.querySelector("#navbar")
document.addEventListener("scroll", ()=>{
    if(window.scrollY > 120){
        navbar.classList.add("navbar_bg")
        document.querySelector(".navbar-brand i").classList.remove("main_color")
    }else{
        navbar.classList.remove("navbar_bg")
        document.querySelector(".navbar-brand i").classList.add("main_color")
    }
})

let arrowButton = document.querySelector("#arrowButton")
arrowButton.addEventListener("click", ()=>{
    window.scrollBy(0,window.innerHeight-60)
})