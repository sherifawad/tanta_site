


export const show_search_input = function(e) {
    const search_container = document.querySelector(".search-container");
    const search_input = search_container.querySelector("input");
    const search_btn = search_container.querySelector("button");
    if(search_input.style.display != "block"){
        search_input.style.display = "block";
        search_btn.style.background = "#ccc";
    }
}

export const hide_search_input = function(search_container) {
    const search_input = search_container.querySelector("input");
    const search_btn = search_container.querySelector("button");
    if(search_input.style.display != "none"){
        search_input.style.display = "none";
        search_btn.style.background = "transparent";
    }
}
