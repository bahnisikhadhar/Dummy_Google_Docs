const star=document.querySelector(".fa-star");
star.addEventListener("click",(event)=>{
    star.classList.toggle("stars")
})

const dropDown=document.querySelector(".drop_down");
const fileMenu=document.querySelector(".file_menu");
fileMenu.addEventListener("click",()=>{
    dropDown.classList.toggle("display_block")
})



//---------------------------------------FOR PHONE VIEW----------------------------------------------------

const special=document.querySelector(".special_entry");
const phoneBar=document.querySelector(".phone_bar");
phoneBar.addEventListener("click",()=>{
    special.classList.toggle("display_block")
})

s