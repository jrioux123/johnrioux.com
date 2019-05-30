// Ajax

// Back button
function goBack() {
    history.back();
}

// Open a card
$(document).on("click", ".card", function() {
    document.getElementById("pagecontent").classList.add("exit");
    _link = $(this).attr("href");
    _name = $(this).attr("data-name");
    history.pushState(null, null, _link);
    setTimeout(function(){
        window.scrollTo(0, 0);
        $('#contentloader').load(_link + ' #pagecontent');
        $("#cardopenstyle").load("cardopenstyle.html");
        document.title = _name + " | John Rioux";
        return false;
    }, 125);
});

// Back functionality
$(window).bind("popstate", function() {
    document.getElementById("pagecontent").classList.add("exit");
    _link = location.pathname.replace(/^.*[\\/]/, "");
});

// Tab-switching
$("#navigation").load("navigation.html", function() {        
    $(".tabsbar").delegate("button", "click", function() {
        $(".tabsbar").children().css("animation","");        
        this.style.cssText = "animation: tab-click .25s ease-in-out;";
        document.getElementById("pagecontent").classList.add("exit");
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
        document.getElementById("pagecontent").classList.add("exit");
        _link = location.pathname.replace(/^.*[\\/]/, "");
        setTimeout(function(){
            $('#contentloader').load(_link + ' #pagecontent');
        }, 125);
    });
});


// Searchbar fix

$( window ).on( "load", function() {
    document.getElementsByName("search")[0].value = "";
    document.getElementsByName("search")[0].placeholder = "Search johnrioux.net";
    document.querySelector('input').autofocus = true;
});

function searchFocus() {    
    $('#gsc-i-id1').focus();
};


// Image gallery

$(document).on("click", ".galleryimage", function(){
    _source = $(this).attr("src");
    document.getElementById('enlargedimage').src = _source;
    document.getElementById("enlargedwrapper").classList.remove("hidden");
});

function enlargedClose() {
    document.getElementById("enlargedwrapper").classList.add("hidden");
}


// Animations

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").classList.add("scrolled");
        
    } else {
        document.getElementById("navbar").classList.remove("scrolled");
    }
    if (document.documentElement.clientWidth <= 1059 && document.documentElement.scrollTop >= 128 || document.documentElement.clientWidth > 1059 && document.documentElement.scrollTop >= 192 || document.body.clientWidth <= 1059 && document.body.scrollTop >= 128 || document.body.clientWidth > 1059 && document.body.scrollTop >= 192) {
        document.getElementById("topbar").classList.add("scrolled");
        document.getElementById("logo").classList.add("scrolled");
        document.getElementById("menuID").classList.add("scrolled");
        document.getElementById("searchbutton").classList.add("scrolled");        
        document.getElementById("searchbuttonlong").classList.add("scrolled");
        document.getElementById("searchID").classList.add("scrolled");
    } else {
        document.getElementById("topbar").classList.remove("scrolled");
        document.getElementById("logo").classList.remove("scrolled");
        document.getElementById("menuID").classList.remove("scrolled");
        document.getElementById("searchbutton").classList.remove("scrolled");
        document.getElementById("searchbuttonlong").classList.remove("scrolled");
        document.getElementById("searchID").classList.remove("scrolled");
    }
}

function newsTab() {
    document.getElementById("tabstroke").style.cssText = "margin-left:0px;";    
}
function videosTab() {
    document.getElementById("tabstroke").style.cssText = "margin-left:90px;";
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

function searchOpen() {    
    document.getElementById("logo").classList.add("hidden");
    document.getElementById("searchID").classList.remove("animate", "hidden");
    document.getElementById("searchshade").classList.remove("animate", "hidden");
    if (document.documentElement.clientWidth <= 1059 && document.documentElement.scrollTop < 128) {
        window.scrollTo(0, 128);
    }
    if (document.documentElement.clientWidth > 1059 && document.documentElement.scrollTop < 192) {
        window.scrollTo(0, 192);
    }
}
function searchClose() {
    document.getElementById("logo").classList.remove("hidden");
    document.getElementById("searchID").classList.add("animate");
    document.getElementById("searchshade").classList.add("animate");
    setTimeout(function(){
        document.getElementById("searchID").classList.add("hidden");
        document.getElementById("searchshade").classList.add("hidden");
    }, 250);
}
