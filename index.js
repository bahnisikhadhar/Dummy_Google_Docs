const mainBody=document.querySelector("main");

//-----------------------------------------FOR THE STAR'S COLOR CHANGE ON CLICK----------------------------------

const star=document.querySelector(".fa-star");
star.addEventListener("click",(event)=>{
    star.classList.toggle("stars")
})

//--------------------------------------------DROP DOWN PART IN FILE SECTION---------------------------------------
const dropDown=document.querySelector(".drop_down");
const fileMenu=document.querySelector(".file_menu");
fileMenu.addEventListener("click",()=>{
    dropDown.classList.toggle("display_block")
})
mainBody.addEventListener("click",()=>{
    dropDown.classList.remove("display_block");
})


//---------------------------------------FOR PHONE VIEW--------------------------------------------------------------

const special=document.querySelector(".special_entry");
const phoneBar=document.querySelector(".phone_bar");


phoneBar.addEventListener("click",()=>{
    special.classList.toggle("display_block")
})

mainBody.addEventListener("click",()=>{
    special.classList.remove("display_block");
})