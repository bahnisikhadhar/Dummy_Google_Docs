const mainBody=document.querySelector("main");

//-----------------------------------------FOR THE STAR'S COLOR CHANGE ON CLICK----------------------------------

const star=document.querySelector(".fa-star");
star.addEventListener("click",(event)=>{
    star.classList.toggle("stars")
})

//--------------------------------------------DROP DOWN PART IN FILE SECTION---------------------------------------
const dropDown=document.querySelector(".drop_down");
const fileMenu=document.querySelector(".file_menu");
const editMenu=document.querySelector(".edit_menu");
const dropDown1=document.querySelector(".drop_down1");
const viewMenu=document.querySelector(".view_menu");
const dropDown2=document.querySelector(".drop_down2");
const toolsMenu=document.querySelector(".tools_menu");
const dropDown3=document.querySelector(".drop_down3");
const helpMenu=document.querySelector(".help_menu");
const dropDown4=document.querySelector(".drop_down4");

fileMenu.addEventListener("click",()=>{
    dropDown.classList.toggle("display_block");
    

fileMenu.addEventListener("mouseover",()=>{
    dropDown.classList.toggle("display_block");
    dropDown1.classList.remove("display_block");
    dropDown2.classList.remove("display_block");
    dropDown3.classList.remove("display_block");
    dropDown4.classList.remove("display_block");
})

    editMenu.addEventListener("mouseover",()=>{
        dropDown1.classList.add("display_block");
        dropDown.classList.remove("display_block");
        dropDown2.classList.remove("display_block");
        dropDown3.classList.remove("display_block");
        dropDown4.classList.remove("display_block");
    })

    viewMenu.addEventListener("mouseover",()=>{
        dropDown2.classList.add("display_block");
        dropDown1.classList.remove("display_block");
        dropDown3.classList.remove("display_block")
        dropDown.classList.remove("display_block");
        dropDown4.classList.remove("display_block")
    })

    toolsMenu.addEventListener("mouseover",()=>{
        dropDown3.classList.add("display_block");
        dropDown2.classList.remove("display_block");
        dropDown4.classList.remove("display_block");
        dropDown.classList.remove("display_block");
        dropDown1.classList.remove("display_block");
    })
    
    helpMenu.addEventListener("mouseover",()=>{
        dropDown4.classList.add("display_block");
        dropDown3.classList.remove("display_block");
        dropDown.classList.remove("display_block");
        dropDown1.classList.remove("display_block");
        dropDown2.classList.remove("display_block");
    })
})

editMenu.addEventListener("click",()=>{
    dropDown1.classList.toggle("display_block");
})
viewMenu.addEventListener("click",()=>{
    dropDown2.classList.toggle("display_block");
})
toolsMenu.addEventListener("click",()=>{
    dropDown3.classList.toggle("display_block");
})
helpMenu.addEventListener("click",()=>{
    dropDown4.classList.toggle("display_block");
})
mainBody.addEventListener("click",()=>{
    dropDown.classList.remove("display_block");
    dropDown1.classList.remove("display_block");
    dropDown2.classList.remove("display_block");
    dropDown3.classList.remove("display_block");
    dropDown4.classList.remove("display_block");
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