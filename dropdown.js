/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
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

// Dialog and shade:

function menuCreate() {
    var w = document.getElementById('menuID')
    w.style.cssText = "animation: menu-enter .25s 1; animation-timing-function: ease-in-out; left: 0px;";
}

function shadeCreate() {
    var x = document.getElementById('shadeID');
    x.style.cssText = "animation: shade-enter .25s 1; animation-timing-function: ease-in-out; opacity: 1;";
}

function dialogCreate() {
    var y = document.getElementById('dialogID')
    y.style.display = 'block';
}

function searchCreate() {
    var z = document.getElementById('searchID')
    z.style.display = 'block';
}

function shadeKill() {
    var w = document.getElementById('menuID');
    var x = document.getElementById('shadeID');    
    var y = document.getElementById('dialogID'); 
    var z = document.getElementById('searchID'); 
    w.style.cssText = "animation: menu-exit .25s 1; animation-timing-function: ease-in-out; left: -256px;";
    x.style.cssText = "animation: shade-exit .25s 1; animation-timing-function: ease-in-out; opacity: 0;";
    y.style.display = 'none';
    z.style.display = 'none';
}

searchbarFocus = function getFocus() {           
  	document.getElementById("gsc-i-id1").focus();
}
