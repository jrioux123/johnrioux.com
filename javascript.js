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
        document.getElementById("navbar").classList.add("scrolled");
        
    } else {
        document.getElementById("navbar").classList.remove("scrolled");
    }
    if (document.body.scrollTop > 128 || document.documentElement.scrollTop > 128) {
        document.getElementById("topbar").classList.add("scrolled");
        document.getElementById("logo").classList.add("scrolled");
        document.getElementById("menuID").classList.add("scrolled");
        
    } else {
        document.getElementById("topbar").classList.remove("scrolled");
        document.getElementById("logo").classList.remove("scrolled");
        document.getElementById("menuID").classList.remove("scrolled");
    }
}

function menuOpen() {
    document.getElementById("menuID").classList.remove("animate", "hidden");
    document.getElementById("menushade").classList.remove("animate", "hidden");
}
function menuClose() {
    document.getElementById("menuID").classList.add("animate");
    document.getElementById("menushade").classList.add("animate");
    setTimeout(function(){
        document.getElementById("menuID").classList.add("hidden");
        document.getElementById("menushade").classList.add("hidden");
    }, 250);
}
