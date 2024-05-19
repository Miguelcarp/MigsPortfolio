// Navbar scroll effect
var nav = document.querySelector(".navbar");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// Menu collapse effect
var navbarLinks = document.querySelectorAll(".nav-link");
var navCollapse = document.querySelector(".collapse.navbar-collapse");

navbarLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    });
});

// Auto type js code
var typed = new Typed("#auto-complete", {
    strings: ["Miguel Carpio.", "BS Information technology.", "Second Year."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});
