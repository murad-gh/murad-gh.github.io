const menu_icon_container = document.querySelector(".menu-icon-container"); /* This the button  (.menu-icon-container)*/
const mobile_nav = document.querySelector(".mobile-nav"); /* This the target class (.mobile-nav) */

menu_icon_container.addEventListener("click", () => {
    mobile_nav.classList.toggle("active");
})


const header_li = document.querySelector(".header-li"); /* This the target class (.header-li) */


menu_icon_container.addEventListener("click", () => {
    header_li.classList.toggle("active");
})


const header_div2 = document.querySelector(".header-div2"); /* This the target class (.header-div2) */

menu_icon_container.addEventListener("click", () => {
    header_div2.classList.toggle("active");
})

