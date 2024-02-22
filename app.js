let nav = document.querySelector(".nav");
let scroll = document.querySelector(".scroll");
let logo_img= document.querySelector(".logo-img");
let fixed_nav =document.querySelector(".fixed-nav");
let book_btn = document.querySelector(".book-btn");
let link_a= document.querySelectorAll(".link-a");
let nav_icon = document.querySelectorAll(".nav-icon");
let fa_bars_menu = document.querySelector(".fa-bars-menu");
let border = document.querySelector(".border");
let accordion = document.querySelector(".accordion ");
let box_menu = document.querySelector(".box-menu");

// box_menu.style.display="none";
console.log(fa_bars_menu);


nav.style.display="flex";

fa_bars_menu.addEventListener("click",()=>{
    accordion.classList.toggle("accordion-toggle");
    box_menu.style.display="initial";
    
})

if(fa_bars_menu.getAttribute("display")=="none"){
    box_menu.setAttribute("display","none");
}



window.addEventListener("scroll",()=>{
    let distance = window.scrollY;
    if(distance>1){
  
        logo_img.style.display="none";
        scroll.style.display="inline";
        nav.style.backgroundColor="white";
        nav.style.boxShadow="0 1px 3px rgba(0, 0, 0, 0.09)";
        fixed_nav.style.top="0";
        fixed_nav.style.zIndex="1000";
        book_btn.addEventListener("mouseenter",()=>{
            book_btn.style.backgroundColor="black";
            book_btn.style.color="white"
        })
        book_btn.addEventListener("mouseleave",()=>{
            book_btn.style.backgroundColor="#bb9356";
            
        });
        link_a.forEach(item=>{
            item.style.color="#222 "
        });
        nav_icon.forEach(item=>{
            item.style.color="#222 "
        })
        fa_bars_menu.style.color= "black";
        border.style.border = "1px solid black";

        
    }
    else if(distance==0){
        logo_img.style.display="inline";
        scroll.style.display="none";
        nav.style.backgroundColor="transparent";
        fixed_nav.style.top="15px";
        book_btn.addEventListener("mouseenter",()=>{
            book_btn.style.backgroundColor="white";
            book_btn.style.color="#bb9356";
        });
        book_btn.addEventListener("mouseleave",()=>{
            book_btn.style.color="#fff";
            
        });
        link_a.forEach(item=>{
            item.style.color="white";
        })
        nav_icon.forEach(item=>{
            item.style.color="white";
        })
        fa_bars_menu.style.color= "white";
        border.style.border = "1px solid white";
        
    }


})

let windowY = screenX;
if(windowY>=992){
    box_menu.style.display="none !important";
}


