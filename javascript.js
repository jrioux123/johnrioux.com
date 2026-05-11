// ============================
// PAGEFIND SEARCH
// ============================

let pagefindInitialized = false;

function initSearch() {
    const el = document.querySelector("#search");
    if (!el) return;

    if (pagefindInitialized) return;

    new PagefindUI({
        element: "#search"
    });

    pagefindInitialized = true;
}


// ============================
// NAVBAR LOAD (ENTRY POINT)
// ============================

$("#navigation").load("/navigation.html", function () {

    // ----------------------------
    // NAV BUTTONS (tabsbar)
    // ----------------------------
    $(".tabsbar").on("click", "button", function () {

        $(".tabsbar").children().css("animation", "");

        this.style.cssText = "animation: tab-click .25s ease-in-out;";

        document.getElementById("pagecontent").classList.add("exit");

        const _link = $(this).attr("href");
        const _name = $(this).attr("data-name");

        history.pushState(null, null, _link);

        setTimeout(function () {
            $('#contentloader').load(_link + ' #pagecontent');
            document.title = _name + " | John Rioux";
        }, 125);

        
        initSearch();
    });


    // ----------------------------
    // MENU BUTTONS
    // ----------------------------
    $(".menu").on("click", "button", function () {

        $(".menu").children().css("animation", "");

        this.style.cssText = "animation: tab-click .25s ease-in-out;";

        document.getElementById("pagecontent").classList.add("exit");

        const _link = $(this).attr("href");
        const _name = $(this).attr("data-name");

        history.pushState(null, null, _link);

        setTimeout(function () {
            $('#contentloader').load(_link + ' #pagecontent');
            document.title = _name + " | John Rioux";
        }, 125);

        $("#cardopenstyle").remove();

        document.getElementById("menubutton").classList.remove("hidden");
        document.getElementById("backbutton").classList.add("hidden");
    });


    // ============================
    // PAGEFIND INIT (CRITICAL FIX)
    // ============================
    // This MUST happen AFTER navbar is loaded
    initSearch();
});


// ============================
// SINGLE POPSTATE HANDLER
// ============================

$(window).on("popstate", function () {

    document.getElementById("pagecontent").classList.add("exit");

    const _link = location.pathname.replace(/^.*[\\/]/, "");

    setTimeout(function () {
        $('#contentloader').load(_link + ' #pagecontent');
    }, 125);
});

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
        document.getElementById("app").scrollTo(0, 0);
        $('#contentloader').load(_link + ' #pagecontent');
        document.title = _name + " | John Rioux";
        $("head").append($("<link>",{id: "cardopenstyle", rel: "stylesheet", type: "text/css", href: "/cardopen.css"}));
        document.getElementById("menubutton").classList.add("hidden");
        document.getElementById("backbutton").classList.remove("hidden");
        return false;
    }, 125);
});

// Back functionality
$(window).bind("popstate", function() {
    $("#cardopenstyle").remove();
    document.getElementById("menubutton").classList.remove("hidden");
    document.getElementById("backbutton").classList.add("hidden");
    document.getElementById("pagecontent").classList.add("exit");
    _link = location.pathname.replace(/^.*[\\/]/, "");
});



// Email switcheroo
$('a.emailurl').on('click', function(){
    var href = $(this).attr('href');
    $(this).attr('href', href.replace('spam.', ''));
});

// Searchbar fix

$( window ).on( "load", function() {
    document.getElementsByName("search")[0].value = "";
    document.getElementsByName("search")[0].placeholder = "Search johnrioux.com";
    document.querySelector('input').autofocus = true;
});

function searchFocus() {    
    $('#gsc-i-id1').focus();
};


// Image gallery

$(document).on("click", ".galleryimage", function(){
    _source = $(this).attr("src");
    _title = $(this).attr("data-name");
    _galleryID = $(this).parent().attr('id');
    document.getElementById('enlargedimage').src = _source;
    document.getElementById('imagetitle').innerHTML = _title;
    document.getElementById('gallerywrapper').innerHTML = document.getElementById(_galleryID).innerHTML;
    document.getElementById("enlargedwrapper").classList.remove("hidden");
});

function enlargedClose() {
    document.getElementById("enlargedwrapper").classList.add("hidden");
}


// Animations

document.getElementById("app").onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.getElementById("app").scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").classList.add("scrolled");
        
    } else {
        document.getElementById("navbar").classList.remove("scrolled");
    }
    if (document.documentElement.clientWidth <= 1059 && document.getElementById("app").scrollTop >= 128 || document.documentElement.clientWidth > 1059 && document.getElementById("app").scrollTop >= 192) {
        document.getElementById("topbar").classList.add("scrolled");
        document.getElementById("logo").classList.add("scrolled");
        document.getElementById("menuID").classList.add("scrolled");
        document.getElementById("searchbutton").classList.add("scrolled");        
        document.getElementById("searchbuttonlong").classList.add("scrolled");
    } else {
        document.getElementById("topbar").classList.remove("scrolled");
        document.getElementById("logo").classList.remove("scrolled");
        document.getElementById("menuID").classList.remove("scrolled");
        document.getElementById("searchbutton").classList.remove("scrolled");
        document.getElementById("searchbuttonlong").classList.remove("scrolled");
        document.getElementById("pagecontent").classList.remove("force-scrolled");
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
    document.getElementById("searchID").classList.remove("animate", "hidden");
    document.getElementById("searchshade").classList.remove("animate", "hidden");
    
    const input = document.querySelector(".pagefind-ui__search-input");

    // 1. focus immediately (must be first or near-first)
    if (input) {
        input.focus();
    }
    
    document.getElementById("app").classList.add("searchopen");

    const width = document.documentElement.clientWidth;
    const scrollTop = document.getElementById("app").scrollTop;

    if (width <= 800 && scrollTop < 128) {        
        document.getElementById("topbar").classList.add("scrolled");
        document.getElementById("logo").classList.add("scrolled");
        document.getElementById("menuID").classList.add("scrolled");
        document.getElementById("searchbutton").classList.add("scrolled");        
        document.getElementById("searchbuttonlong").classList.add("scrolled");
        document.getElementById("pagecontent").classList.add("force-scrolled");
    } else if (width <= 1059 && scrollTop < 128) {
        document.getElementById("app").scrollTo(0, 128);
    } else if (width > 1059 && scrollTop < 192) {
        document.getElementById("app").scrollTo(0, 192);
    }

}
function searchClose() {
    document.getElementById("searchID").classList.add("animate");
    document.getElementById("searchshade").classList.add("animate");
    setTimeout(function(){
        document.getElementById("searchID").classList.add("hidden");
        document.getElementById("searchshade").classList.add("hidden");
        document.getElementById("app").classList.remove("searchopen");
        const width = document.documentElement.clientWidth;
        const scrollTop = document.documentElement.scrollTop;
        if (width <= 800 && scrollTop < 128) {
            document.getElementById("topbar").classList.remove("scrolled");
            document.getElementById("logo").classList.remove("scrolled");
            document.getElementById("menuID").classList.remove("scrolled");
            document.getElementById("searchbutton").classList.remove("scrolled");
            document.getElementById("searchbuttonlong").classList.remove("scrolled");
            document.getElementById("pagecontent").classList.remove("force-scrolled");
        }
    }, 250);
}

//Test

const vv = window.visualViewport;

document.documentElement.style.setProperty(
    '--vvh',
    `${vv.height}px`
);

function update() {
  if (!vv) return;

  // Expose visual viewport height globally
  document.documentElement.style.setProperty(
    '--vvh',
    `${vv.height}px`
  );
}

function init() {
  update();

  if (!vv) return;

  vv.addEventListener('resize', update);
  vv.addEventListener('scroll', update);
}

init();