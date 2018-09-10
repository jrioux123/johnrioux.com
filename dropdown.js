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
}

function dialogCreate() {
    var x = document.getElementById('dialogID')
    x.style.display = 'block';
}

function dialogKill() {
    var x = document.getElementById('dialogID');
    x.style.display = 'none';
}

// Here's some maybe dangerous garbage:

    var dialogIndex = 1;
    showDialog(dialogIndex);
    
    function currentDialog(n) {
      showDialog(dialogIndex = n);
    }

    
    function showDialog(n) {
      var i;
      var dialog = document.getElementsByClassName("dialog-indexer");
      var dialogButtons = document.getElementsByClassName("dialogButton");
      if (n > dialog.length) {dialogIndex = 1}    
      if (n < 1) {dialogIndex = dialog.length}
      for (i = 0; i < dialog.length; i++) {
          dialog[i].style.display = "none";  
      }
      for (i = 0; i < dialogButtons.length; i++) {
          dialogButtons[i].className = dialogButtons[i].className.replace(" active", "");
      }
      dialog[dialogIndex-1].style.display = "block";  
      diaogButtons[dialogIndex-1].className += " active";
    }

