var currentItem = 0;
let counter = 1;

export const scrollTo = function(e, right, slides){
    const ss = document.querySelectorAll(slides);
    var aa = Array.from(ss);
    if(right){
        currentItem--;
        if(currentItem < 0){
            currentItem = aa.length - 1;
        }
    }
    else{
        currentItem++;
        if(currentItem >= aa.length){
            currentItem = 0;
        }
    }
    const itemm = aa[currentItem];
    itemm.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
}

export const translateTo = function (e, right, container_class, item_class){
    const container = document.getElementById(container_class);
    const items = document.getElementsByClassName(item_class);
    const item_size = items[0].clientWidth;

    if(right){
        container.scrollBy({
                top: 0,
                left: (item_size + 20),
                behavior: 'smooth'
        });

        if(container.scrollLeft === 0){
            container.scrollTo({
                top: 0,
                left: - (item_size + 20) * items.length,
                behavior: 'auto'
            }) ;
        }

    }
    else{
        container.scrollBy({
            top: 0,
            left: - (item_size + 20),
            behavior: 'smooth'
        });

        let x = container.scrollWidth;

        if(container.scrollWidth + container.scrollLeft === container.clientWidth){
            container.scrollTo({
                top: 0,
                left: (item_size + 20) * items.length,
                behavior: 'auto'
            }) ;
        }

    }

}

