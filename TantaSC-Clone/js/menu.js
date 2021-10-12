const menu_items = document.querySelectorAll(".has-children");

const colse_all_Sub_menues = function(e){
    let sub_menu_item = document.querySelector(".sub-menu");
    let toogle_button = document.querySelector(".dropdown-toggle");
    toogle_button.innerHTML = `<span class="screen-reader-text">Expand child menu</span>`;
    toogle_button.setAttribute('aria-expanded', 'false');
    toogle_button.classList.remove('toggled-on');
    sub_menu_item.classList.remove('toggled-on');
}

const toogle_menu = function(e){
    let nav_menu= document.querySelector(".nav_menu");
    nav_menu.classList.toggle('menu_toggled');
    document.querySelector(".symbol_menu").classList.toggle('menu_toggled');
    document.querySelector(".symbol_cross").classList.toggle('menu_toggled');
    if(!nav_menu.classList.contains("menu_toggled")){
        for (const item of menu_items) {
            colse_all_Sub_menues();
        }
    }
}


const toogle_menu_item = function(e){
    let sub_menu_item = document.querySelector(".sub-menu");
    let toogle_button = document.querySelector(".dropdown-toggle");
    toogle_button.classList.toggle('toggled-on');
    sub_menu_item.classList.toggle('toggled-on');
    if (toogle_button.classList.contains("toggled-on")){
        toogle_button.innerHTML = `<span class="screen-reader-text">Collapse child menu</span>`;
        toogle_button.setAttribute('aria-expanded', 'true');
    }
    else{
        toogle_button.innerHTML = `<span class="screen-reader-text">Expand child menu</span>`;
        toogle_button.setAttribute('aria-expanded', 'false');
    }

}

export {menu_items, toogle_menu, toogle_menu_item};
