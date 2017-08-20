/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Here's the same thing, but for popups instead! */

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function popupFunction() {
    document.getElementById("myPopup").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.popbtn')) {
    var popups = document.getElementsByClassName("popup-content");
    var i;
    for (i = 0; i < popups.length; i++) {
      var openPopup = popups[i];
      if (openPopup.classList.contains('show')) {
        openPopup.classList.remove('show');
      }
    }
  }
}

