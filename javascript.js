// Ajax

$('#navigation').load('navigation.html');

window.onload = loadRest;

function loadRest() { // Loads everything that refers to elements from navigation.html
    
$(".tabsbar").delegate("button", "click", function() {
    _link = $(this).attr("href");
    _name = $(this).attr("data-name")
    history.pushState(null, null, _link);
    $('#pagecontent').load(_link + ' #pagecontent');
    document.title = "John Rioux | " + _name;
    return false;
});
    
$(window).bind("popstate", function() {
    _link = location.pathname.replace(/^.*[\\/]/, "");
    $('#pagecontent').load(_link + ' #pagecontent');
});
    
} // End of function loadRest()


// Animations

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").style.cssText = "box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 8px;";
        document.getElementById("topbar").style.cssText = "height:56px;";
        document.getElementById("hiddentopbar").style.cssText = "height:56px; padding-bottom:48px;";
        document.getElementById("logo").style.cssText = "width:152px;";
        document.getElementById("hiddenlogo").style.cssText = "width:152px;";
    } else {
        document.getElementById("navbar").style.cssText = "box-shadow: 0px 1px 4px rgba(0, 0, 0, .14);";
        document.getElementById("topbar").style.cssText = "height:184px;";
        document.getElementById("hiddentopbar").style.cssText = "height:184px; padding-bottom:48px;";
        document.getElementById("logo").style.cssText = "width:calc(100% - 152px);";
        document.getElementById("hiddenlogo").style.cssText = "width:calc(100% - 152px);";                
    }
    if (document.documentElement.clientWidth > 1312) {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {   
            document.getElementById("menuID").style.cssText = "padding-top:104px;";
        } else {
            document.getElementById("menuID").style.cssText = "padding-top:232px;";
        }
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

function newsButton() {
    document.getElementById("tabstroke").style.cssText = "margin-left:0px; width:90px;";            
    document.getElementById("newsbutton").style.cssText = "opacity: 1; color: #db4437; animation: tab-click .25s ease-out 1;";
    document.getElementById("videosbutton").style.cssText = "opacity: 7; color: black;";
    document.getElementById("comicsbutton").style.cssText = "opacity: .7; color: black;";
}
function videosButton() {
    document.getElementById("tabstroke").style.cssText = "margin-left:90px; width:90px;";            
    document.getElementById("newsbutton").style.cssText = "opacity: .7; color: black;";
    document.getElementById("videosbutton").style.cssText = "opacity: 1; color: #db4437; animation: tab-click .25s ease-out 1;";
    document.getElementById("comicsbutton").style.cssText = "opacity: .7; color: black;";

}
function comicsButton() {
    document.getElementById("tabstroke").style.cssText = "margin-left:453.39px; width:92.61px;";            
    document.getElementById("newsbutton").style.cssText = "opacity: .7; color: black;";
    document.getElementById("videosbutton").style.cssText = "opacity: .7; color: black;";
    document.getElementById("comicsbutton").style.cssText = "opacity: 1; color: #db4437; animation: tab-click .25s ease-out 1;";
}
