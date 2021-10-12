const menu_items = document.querySelectorAll(".has-children");
const menu_button = document.querySelector(".mobile_button");

const colse_all_Sub_menues = function(e){
    let sub_menu_item = document.querySelector(".sub-menu");
    let toogle_button = document.querySelector(".dropdown-toggle");
    toogle_button.innerHTML = `<span class="screen-reader-text">Expand child menu</span>`;
    toogle_button.setAttribute('aria-expanded', 'false');
    toogle_button.classList.remove('toggled-on');
    sub_menu_item.classList.remove('toggled-on');
}

const toogle_menu = function(e){
    let nav_menu= document.querySelector(".nav-menu");
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

menu_button.addEventListener('click', toogle_menu);

for (const item of menu_items) {
    item.addEventListener('click', toogle_menu_item);
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

const prev_control = document.querySelector(".prev_control");
const next_control = document.querySelector(".next_control");
var currentItem = 0;

const scrollTo = function(e, right){
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

next_control.addEventListener("click", e => scrollTo(e, true));
prev_control.addEventListener("click", e => scrollTo(e, false));
// function scrollTo(image_id){
//     var topLeft = document.getElementById(image_id).offsetTop;
//     document.getElementById('container').scrollLeft = topLeft;
// }

// const slide_items = document.querySelectorAll(".slide_item");



// var carouselPositions;
// var halfContainer;
// var currentItem;

// function getCarouselPositions() {
//   carouselPositions = [];
//   document.querySelectorAll('#container div').forEach(function(div) {
//     carouselPositions.push([div.offsetTop, div.offsetTop + div.offsetHeight]); // add to array the positions information
//   })
//   halfContainer = document.querySelector('#container').offsetHeight/2;
// }

// getCarouselPositions(); // call it once

// function goCarousel(direction) {
  
//   var currentScrollTop = document.querySelector('#container').scrollTop;
//   var currentScrollBottom = currentScrollTop + document.querySelector('#container').offsetHeight;
  
//   if (currentScrollTop === 0 && direction === 'next') {
//       currentItem = 1;
//   } else if (currentScrollBottom === document.querySelector('#container').scrollHeight && direction === 'previous') {
//       console.log('here')
//       currentItem = carouselPositions.length - 2;
//   } else {
//       var currentMiddlePosition = currentScrollTop + halfContainer;
//       for (var i = 0; i < carouselPositions.length; i++) {
//         if (currentMiddlePosition > carouselPositions[i][0] && currentMiddlePosition < carouselPositions[i][1]) {
//           currentItem = i;
//           if (direction === 'next') {
//               currentItem++;
//           } else if (direction === 'previous') {
//               currentItem--    
//           }
//         }
//       }
//   } 
  
//   document.getElementById('container').scrollTo({
//     top: carouselPositions[currentItem][0],
//     behavior: 'smooth' 
//   });
  
// }
// window.addEventListener('resize', getCarouselPositions);