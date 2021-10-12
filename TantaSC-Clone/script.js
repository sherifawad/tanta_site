import { menu_items, toogle_menu, toogle_menu_item } from "./js/menu.js";
import { plusSlides, currentSlide } from "./js/slides.js";
import {scrollTo} from "./js/scroll_with_buttons.js";

document.querySelector(".mobile_button").addEventListener('click', toogle_menu);

for (const item of menu_items) {
    item.addEventListener('click', toogle_menu_item);
}

currentSlide(1);
document.querySelector(".slideshow_container .prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".slideshow_container .next").addEventListener("click", () => plusSlides(1));
document.querySelector(".dot_1").addEventListener("click", () => currentSlide(1));
document.querySelector(".dot_2").addEventListener("click", () => currentSlide(2));
document.querySelector(".dot_3").addEventListener("click", () => currentSlide(3));

const prev_control = document.querySelector(".prev_control").addEventListener("click", e => scrollTo(e, false));
const next_control = document.querySelector(".next_control").addEventListener("click", e => scrollTo(e, true));