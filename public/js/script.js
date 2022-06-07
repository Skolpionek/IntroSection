const MENUBTN = document.querySelector(".menuIcon")
const MOBILEMENU = document.querySelector(".mobileMenu")
const FDROPDOWN = document.querySelector(".features")
const Fmark = document.querySelector(".features span")
const CDROPDOWN = document.querySelector(".company")
const Cmark = document.querySelector(".company span")

let flag = false
MENUBTN.addEventListener("click",()=>{
   // MOBILEMENU.classList.toggle("active")
   if(!flag){
      MENUBTN.style.backgroundImage = "url('../assets/images/icon-close-menu.svg')"
      MENUBTN.style.position = "fixed"
      MOBILEMENU.classList.add('active')
      flag = !flag
   }
   else{
      MENUBTN.style.backgroundImage = "url('../../assets/images/icon-menu.svg')"
      MOBILEMENU.classList.remove('active')
      MENUBTN.style.position = "inherit"
      flag = !flag
   }

})

FDROPDOWN.addEventListener("click",(e)=>{
   if(e.target == Fmark)FDROPDOWN.classList.toggle("active")
   console.log(e.target)
})
CDROPDOWN.addEventListener("click",(e)=>{
   if(e.target == Cmark)CDROPDOWN.classList.toggle("active")
   

})