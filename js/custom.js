(function ($) {

"use strict";

// PRE LOADER
$(window).load(function(){
  $('.preloader').fadeOut(1000); // set duration in brackets    
});

// CUSTOM LINK
$('.custom-link').click(function(){
var el = $(this).attr('href');
var elWrapped = $(el);
var header_height = $('.navbar').height() + 10;

scrollToDiv(elWrapped,header_height);
return false;

function scrollToDiv(element,navheight){
  var offset = element.offset();
  var offsetTop = offset.top;
  var totalScroll = offsetTop-navheight;

  $('body,html').animate({
  scrollTop: totalScroll
  }, 300);
}
});

// Navbar Mobile Menu Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
        
        if (!isClickInside && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Add smooth transition for mobile menu
    navbarCollapse.style.transition = 'all 0.3s ease-in-out';
});

})(window.jQuery);


