import { menu_items, toogle_menu, toogle_menu_item } from "./js/menu.js";
import { plusSlides, currentSlide } from "./js/slides.js";
import {scrollTo, translateTo} from "./js/scroll_with_buttons.js";
import {opentab} from "./js/tab.js";

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

// document.querySelector("#players_slides_prev_control").addEventListener("click", e => scrollTo(e, false, ".player"));
// document.querySelector("#players_slides_next_control").addEventListener("click", e => scrollTo(e, true, ".player"));

// document.querySelector("#champ_slides_prev_control").addEventListener("click", e => scrollTo(e, false, ".champ"));
// document.querySelector("#champ_slides_next_control").addEventListener("click", e => scrollTo(e, true, ".champ"));

// document.querySelector("#vid_slides_prev_control").addEventListener("click", e => scrollTo(e, false, ".vid"));
// document.querySelector("#vid_slides_next_control").addEventListener("click", e => scrollTo(e, true, ".vid"));

document.querySelector("#players_slides_prev_control").addEventListener("click", e => translateTo(e, false, "players", "player"));
document.querySelector("#players_slides_next_control").addEventListener("click", e => translateTo(e, true, "players", "player"));

document.querySelector("#champ_slides_prev_control").addEventListener("click", e => translateTo(e, false, "champs", "champ"));
document.querySelector("#champ_slides_next_control").addEventListener("click", e => translateTo(e, true, "champs", "champ"));

document.querySelector("#vid_slides_prev_control").addEventListener("click", e => translateTo(e, false, "vids", "vid"));
document.querySelector("#vid_slides_next_control").addEventListener("click", e => translateTo(e, true, "vids", "vid"));


document.querySelector("#btn_football").addEventListener("click", e => opentab(e, "_football"));
document.getElementById("btn_football").click();
document.querySelector("#btn_basketball").addEventListener("click", e => opentab(e, "_basketball"));
document.querySelector("#btn_vollyball").addEventListener("click", e => opentab(e, "_vollyball"));
document.querySelector("#btn_tennis").addEventListener("click", e => opentab(e, "_tennis"));
document.querySelector("#btn_track").addEventListener("click", e => opentab(e, "_track"));
document.querySelector("#btn_handball").addEventListener("click", e => opentab(e, "_handball"));




