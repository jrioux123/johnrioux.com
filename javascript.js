function goBack() {
    history.back();
}

// Ajax

// Open a card
$("#pagecontent").delegate("button", "click", function() {
    document.getElementById("pagecontent").style.cssText = "margin-top: -56px;"; // Transition animation
    document.getElementById("menubutton").style.cssText = "display: none;";
    document.getElementById("backbutton").style.cssText = "display: block;";
    _link = $(this).attr("href");
    _name = $(this).attr("data-name");
    history.pushState(null, null, _link);
    $('#contentloader').load(_link + ' #pagecontent');
    document.title = _name + " | John Rioux";
    return false;
});
$(window).bind("popstate", function() {
    document.getElementById("pagecontent").style.cssText = "margin-top: 56px;"; // Transition animation
    document.getElementById("backbutton").style.cssText = "display: none;";
    document.getElementById("menubutton").style.cssText = "display: block;";
    _link = location.pathname.replace(/^.*[\\/]/, "");
    $('#contentloader').load(_link + ' #pagecontent');
});

// Tab-switching
$("#navigation").load("navigation.html", function() {        
    $(".tabsbar").delegate("button", "click", function() {
        $(".tabsbar").children().css("animation","");        
        this.style.cssText = "animation: tab-click .25s ease-in-out;";
        document.getElementById("pagecontent").style.cssText = "margin-top: 56px; opacity: 0;"; // Transition animation
        _link = $(this).attr("href");
        _name = $(this).attr("data-name");
        history.pushState(null, null, _link);
        setTimeout(function(){
            $('#contentloader').load(_link + ' #pagecontent', function() {
                $("#pagecontent").delegate("button", "click", function() {
                    document.getElementById("pagecontent").style.cssText = "margin-top: -56px;"; // Transition animation
                    document.getElementById("menubutton").style.cssText = "display: none;";
                    document.getElementById("backbutton").style.cssText = "display: block;";
                    _link = $(this).attr("href");
                    _name = $(this).attr("data-name");
                    history.pushState(null, null, _link);
                    $('#contentloader').load(_link + ' #pagecontent');
                    document.title = _name + " | John Rioux";
                    return false;
                });
                $(window).bind("popstate", function() {
                    document.getElementById("pagecontent").style.cssText = "margin-top: 56px;"; // Transition animation
                    document.getElementById("backbutton").style.cssText = "display: none;";
                    document.getElementById("menubutton").style.cssText = "display: block;";
                    _link = location.pathname.replace(/^.*[\\/]/, "");
                    $('#contentloader').load(_link + ' #pagecontent');
                });
            });
            document.title = _name + " | John Rioux";
            return false;
        }, 125);
    });
    $(window).bind("popstate", function() {
        document.getElementById("pagecontent").style.cssText = "margin-top: 56px; opacity: 0;"; // Transition animation
        _link = location.pathname.replace(/^.*[\\/]/, "");
        setTimeout(function(){
            $('#contentloader').load(_link + ' #pagecontent', function() {
                $("#pagecontent").delegate("button", "click", function() {
                    document.getElementById("pagecontent").style.cssText = "margin-top: -56px;"; // Transition animation
                    document.getElementById("menubutton").style.cssText = "display: none;";
                    document.getElementById("backbutton").style.cssText = "display: block;";
                    _link = $(this).attr("href");
                    _name = $(this).attr("data-name");
                    history.pushState(null, null, _link);
                    $('#contentloader').load(_link + ' #pagecontent');
                    document.title = _name + " | John Rioux";
                    return false;
                });
                $(window).bind("popstate", function() {
                    document.getElementById("pagecontent").style.cssText = "margin-top: 56px;"; // Transition animation
                    document.getElementById("backbutton").style.cssText = "display: none;";
                    document.getElementById("menubutton").style.cssText = "display: block;";
                    _link = location.pathname.replace(/^.*[\\/]/, "");
                    $('#contentloader').load(_link + ' #pagecontent');
                });
            });
        }, 125);
    });
});


// Animations

function loadingAnimation() {
            document.getElementById("loading").style.cssText = "height:0px;";
            document.getElementById("logo").style.cssText = "margin-top:0px; transform:none;"
        }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").style.cssText = "box-shadow: rgba(0, 0, 0, 0.3) 0px .0625rem .5rem;";
        
    } else {
        document.getElementById("navbar").style.cssText = "box-shadow: 0 .0625rem .125rem rgba(0, 0, 0, .14);";
    }
    if (document.body.scrollTop > 128 || document.documentElement.scrollTop > 128) {
        document.getElementById("topbar").style.cssText = "margin-top:0;";
        document.getElementById("logo").style.cssText = "height:3.5rem; margin-top:0; transform:none;";
        document.getElementById("menuID").style.cssText = "display:block; padding-top:6.5rem;";
        
    } else {
        document.getElementById("topbar").style.cssText = "margin-top:8rem;";
        document.getElementById("logo").style.cssText = "height:11.5rem; margin-top:0; transform:none;";
        document.getElementById("menuID").style.cssText = "display:block; padding-top:14.5rem;";
    }
}

function menuOpen() {
    document.getElementById("menuID").style.cssText = "display:block; left:0;";
    document.getElementById("menushade").style.cssText = "display:block; opacity:1";
}
function menuClose() {
    document.getElementById("menuID").style.cssText = "display:block; left:-20rem;";
    document.getElementById("menushade").style.cssText = "display:block; opacity: 0;";
    setTimeout(function(){
        document.getElementById("menuID").style.cssText = "display:none;";
        document.getElementById("menushade").style.cssText = "display:none;";
    }, 250);
}
