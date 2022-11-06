const mobile_div_menu = document.querySelector(".mobile-div-menu"); /* This the button  (.mobile_div_menu)*/
const mobile_menu_line1 = document.querySelector(".mobile-menu-line1"); /* This the target class (.mobile_menu_line1) */

mobile_div_menu.addEventListener("click", () => {
    mobile_menu_line1.classList.toggle("active");
})

const mobile_menu_line2 = document.querySelector(".mobile-menu-line2"); /* This the target class (.mobile_menu_line2) */

mobile_div_menu.addEventListener("click", () => {
    mobile_menu_line2.classList.toggle("active");
})

