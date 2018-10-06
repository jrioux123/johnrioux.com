function onloadJS() {
    document.getElementsByName("search")[0].value="";
    document.getElementsByName("search")[0].placeholder="Search johnrioux.net";
    document.querySelector('input').autofocus = true;   
    document.querySelector('input').onblur="this.focus()";
    document.getElementById('gsc-i-id1').onblur = function (event) { 
        var blurEl = this; 
        setTimeout(function() {
            blurEl.focus()
        }, 10);
    };
}

