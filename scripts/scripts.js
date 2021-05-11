let menuButton = document.getElementsByClassName("nav-menu-collapse");
let navModal = document.getElementsByClassName("nav-modal");
let navMenu = document.getElementsByClassName("nav-menu");
let closeModal = document.getElementsByClassName("close-btn-wrapper");

// menuButton[0].addEventListener("click", function(event){
//     console.log(event);
//     if (navModal[0].style.display == "none" || navModal[0].style.display == ""){
//         navModal[0].style.display = "flex";
//         menuButton[0].style.display = "none";
//     } else {
//         navModal[0].style.display ="none";
//         menuButton[0].style.display = "block";
//     }
// });

// closeModal[0].addEventListener("click", function(event){
//     console.log(event);
//     if (navModal[0].style.display == "flex" || navModal[0].style.display == ""){
//         navModal[0].style.display = "none";
//         menuButton[0].style.display = "block";
//     } else {
//         navModal[0].style.display ="block";
//         menuButton[0].style.display = "none";
//     }
// });

// window.addEventListener("scroll", function(){
//     let menuScroll = Math.round(this.scrollY);
//     console.log(menuScroll);
//     if (menuScroll >= 50){
//         menuButton[0].style.display = "block";
//     } else if (menuScroll < 100){
//         menuButton[0].style.display = "none";
//     } else {
//         console.log("error");
//     }
// });

let txtDaniel = document.getElementsByClassName("animation-daniel");
let txtBabin = document.getElementsByClassName("animation-babin");
let scrollPos;

document.addEventListener('scroll', (e) => {
    scrollPos = e.path[1].window.scrollY;
    if (scrollPos >= 100 && scrollPos <= 199.99){
        animate
    }
    console.log(scrollPos);
});





// console.log(scrollPos);