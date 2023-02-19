var menuBtn = document.querySelector(".menu-icon"),
    closeBtn = document.querySelector(".close-btn"),
    sideBar = document.querySelector(".side-bar"),
    jumpFood = document.querySelector("#jump-food-section"),
    jumpAbout = document.querySelector("#jump-about-section");

menuBtn.addEventListener("click", () => {
    sideBar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("open");
});

console.log(jumpFood, jumpAbout)


jumpFood.addEventListener("click", () => {
    sideBar.classList.remove("open");
});

jumpAbout.addEventListener("click", () => {
    sideBar.classList.remove("open");
});

console.log(sideBar);

// console.log(sideBar.target.id);

// document.onclick = function(e){

//     // console.log(e.target.class);

//     if (e.target.class !== "side-bar" && e.target.class !== "menu-icon") {
//         sideBar.classList.remove("open");
//     }
// };


