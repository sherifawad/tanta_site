export const opentab = function (evt, tabContnetId) {

  evt.preventDefault();
  evt.stopPropagation();
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll(".tab_content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll(".tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabContnetId).style.display = "grid";
    evt.currentTarget.classList.add("active");
  } 