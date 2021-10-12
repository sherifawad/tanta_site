var currentItem = 0;

export const scrollTo = function(e, right){
    const ss = document.querySelectorAll(".slide_item");
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
    itemm.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
