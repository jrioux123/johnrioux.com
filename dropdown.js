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

var w = document.getElementById('menuID');
var w2 = document.getElementById('menushadeID');
var x = document.getElementById('shadeID');
var y = document.getElementById('dialogID');
var z = document.getElementById('searchID');

function menuCreate() {
    w.style.display='block';
    w.style.cssText = "animation: menu-enter .25s 1; animation-timing-function: ease-in-out; left: 0px;";
    w2.style.display='block';
    w2.style.cssText = "animation: shade-enter .25s 1; animation-timing-function: ease-in-out; opacity: 1;";
}

function shadeCreate() {
    x.style.display='block';
    x.style.cssText = "animation: shade-enter .25s 1; animation-timing-function: ease-in-out; opacity: 1;";
}

function dialogCreate() {
    y.style.display = 'block';
}

function searchCreate() {
    z.style.display = 'block';
}

function shadeKill() {
    x.style.cssText = "animation: shade-exit .25s 1; animation-timing-function: ease-in-out; opacity: 0;";
    setTimeout(function(){x.style.display='none';}, 250);
    y.style.display = 'none';
    z.style.display = 'none';
}

function menushadeKill() { 
    w.style.cssText = "animation: menu-exit .25s 1; animation-timing-function: ease-in-out; left: -360px;";
    setTimeout(function(){w.style.display='none';}, 250);
    w2.style.cssText = "animation: shade-exit .25s 1; animation-timing-function: ease-in-out; opacity: 0;";
    setTimeout(function(){w2.style.display='none';}, 250);
}

searchbarFocus = function getFocus() {           
  	document.getElementById("gsc-i-id1").focus();
}
