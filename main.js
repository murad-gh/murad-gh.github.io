
// Menu activation

const mobile_div = document.querySelector(".mobile-div"); /* This the button  (.mobile_div_menu)*/
const mobile_menu_line1 = document.querySelector(".mobile-menu-line1"); /* This the target class (.mobile_menu_line1) */


mobile_div.addEventListener("click", () => {
    mobile_menu_line1.classList.toggle("active");
})

const mobile_menu_line2 = document.querySelector(".mobile-menu-line2"); /* This the target class (.mobile_menu_line2) */

mobile_div.addEventListener("click", () => {
    mobile_menu_line2.classList.toggle("active");
})


const mobile_div_menu = document.querySelector(".mobile-div-menu");

mobile_div.addEventListener("click", () => {
    mobile_div_menu.classList.toggle("active");
})

mobile_div.addEventListener("click", () => {
    mobile_div_gh.classList.toggle("active");
})

mobile_div.addEventListener("click", () => {
    mobile_div_lang_logo.classList.toggle("active");
})

// Logo activation

const mobile_div_lang_logo = document.querySelector(".mobile-div-lang-logo");
const mobile_div_gh = document.querySelector(".mobile-div-gh");
const mobile_img = document.querySelector(".menu-img");
const mobile_div_langs = document.querySelector(".mobile-div-langs");
const mobile_div_lang = document.querySelector(".mobile-div-lang");

mobile_div_lang_logo.addEventListener("click", () => {
    mobile_img.classList.toggle("active");
})

mobile_div_lang_logo.addEventListener("click", () => {
    mobile_div_gh.classList.toggle("active");
})

mobile_div_lang_logo.addEventListener("click", () => {
    mobile_div.classList.toggle("active");
})

mobile_div_lang_logo.addEventListener("click", () => {
    mobile_div_lang.classList.toggle("active");
})

mobile_div_lang_logo.addEventListener("click", () => {
    mobile_div_langs.classList.toggle("active");
})



// header after active language


const mobile_header = document.querySelector(".mobile-header");

mobile_img.addEventListener("click", () => {
    mobile_header.classList.toggle("active");
})

// mobile div menu About Me clicked hide 

const mobile_div_menu_nav_a1 = document.querySelector(".mobile-div-menu-nav-a1");
const mobile_div_menu_nav =document.querySelector("mobile-div-menu-nav");

mobile_div_menu_nav_a1.addEventListener("click", () => {
    mobile_div_menu_nav.classList.toggle("hide");
})

mobile_div_menu_nav_a1.addEventListener("click", () => {
    mobile_div_menu.classList.toggle("active");
})

mobile_div_menu_nav_a1.addEventListener("click", () => {
    mobile_menu_line1.classList.toggle("active");
})

mobile_div_menu_nav_a1.addEventListener("click", () => {
    mobile_menu_line2.classList.toggle("active");
})

mobile_div_menu_nav_a1.addEventListener("click", () => {
    mobile_div_gh.classList.toggle("active");
})
mobile_div_menu_nav_a1.addEventListener("click", () => {
    mobile_div_lang_logo.classList.toggle("active");
})