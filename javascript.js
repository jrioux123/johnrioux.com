function goBack() {
    history.back();
}

// Ajax
$("#pagecontent").delegate("button", "click", function() {
    document.getElementById("pagecontent").style.cssText = "margin-top: 56px; opacity: 0;"; // Transition animation
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
    document.getElementById("pagecontent").style.cssText = "margin-top: 56px; opacity: 0;"; // Transition animation
    document.getElementById("backbutton").style.cssText = "display: none;";
    document.getElementById("menubutton").style.cssText = "display: block;";
    _link = location.pathname.replace(/^.*[\\/]/, "");
    $('#contentloader').load(_link + ' #pagecontent');
});

$("#navigation").load("navigation.html", function() {        
    $(".tabsbar").delegate("button", "click", function() {
        $(".tabsbar").children().css("animation","");        
        this.style.cssText = "animation: tab-click .25s ease-in-out;";
        document.getElementById("pagecontent").style.cssText = "margin-top: 56px; opacity: 0;"; // Transition animation
        _link = $(this).attr("href");
        _name = $(this).attr("data-name");
        history.pushState(null, null, _link);
        setTimeout(function(){
            $('#contentloader').load(_link + ' #pagecontent');
            document.title = _name + " | John Rioux";
            return false;
        }, 125);
    });
    $(window).bind("popstate", function() {
        document.getElementById("pagecontent").style.cssText = "margin-top: 56px; opacity: 0;"; // Transition animation
        _link = location.pathname.replace(/^.*[\\/]/, "");
        setTimeout(function(){
            $('#contentloader').load(_link + ' #pagecontent', backHome());
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
        document.getElementById("navbar").style.cssText = "box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 8px;";
        document.getElementById("topbar").style.cssText = "padding-top:0px;";
        document.getElementById("hiddentopbar").style.cssText = "padding-top:0px; padding-bottom:48px;";
        document.getElementById("logo").style.cssText = "height:56px; margin-top:0px; transform:none;";
        document.getElementById("menuID").style.cssText = "padding-top:104px;";
        
    } else {
        document.getElementById("navbar").style.cssText = "box-shadow: 0px 1px 4px rgba(0, 0, 0, .14);";
        document.getElementById("topbar").style.cssText = "padding-top:128px;";
        document.getElementById("hiddentopbar").style.cssText = "padding-top:128px; padding-bottom:48px;";
        document.getElementById("logo").style.cssText = "height:184px; margin-top:0px; transform:none;";
        document.getElementById("menuID").style.cssText = "padding-top:232px;";
    }
}

function menuOpen() {
    document.getElementById("menuID").style.cssText = "display:block; left: 0px;";
    document.getElementById("menushade").style.cssText = "display:block; opacity: 1";
}
function menuClose() {
    document.getElementById("menuID").style.cssText = "display:block; left: -320px;";
    document.getElementById("menushade").style.cssText = "display:block; opacity: 0;";
    setTimeout(function(){
        document.getElementById("menuID").style.cssText = "display:none;";
        document.getElementById("menushade").style.cssText = "display:none;";
    }, 250);
}
