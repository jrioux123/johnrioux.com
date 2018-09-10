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

function shadeCreate() {
    var x = document.getElementById('shadeID');
    x.style.display = 'block';
}

function shadeKill() {
    var x = document.getElementById('shadeID');
    x.style.display = 'none';
    var y = document.getElementById('searchID');
    y.style.display = 'none';
    var z = document.getElementById('dialogID');
    z.style.display = 'none';
}

function searchCreate() {
    var y = document.getElementById('searchID')
    y.style.display = 'block';
}

function dialogCreate() {
    var z = document.getElementById('dialogID')
    z.style.display = 'block';
}
