// When the user scrolls down 80px from the top of the document, resize the navbar-right's padding and the logo's font size
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar-right").style.paddingTop = "15px";
        document.getElementById("navbar-right").style.paddingRight = "20px";
        document.getElementById("navbar-right").style.paddingBottom = "15px";
        document.getElementById("navbar-right").style.paddingLeft = "10px";
        document.getElementById("navbar-right").style.height = "25px";
    } else {
        document.getElementById("navbar-right").style.paddingTop = "35px";
        document.getElementById("navbar-right").style.paddingRight = "20px";
        document.getElementById("navbar-right").style.paddingBottom = "15px";
        document.getElementById("navbar-right").style.paddingLeft = "10px";
        document.getElementById("navbar-right").style.height = "35px";
    }
}