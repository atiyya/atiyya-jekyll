// Nav Toggle
$( ".nav-toggle" ).click(function() {
   $( "nav ul" ).slideToggle( "medium" );
   $( "body" ).toggleClass("nav-open");
});

// Smooth Scrolling: http://jsfiddle.net/9SDLw/
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

// Open External Links in a Different Window
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');

// // // Disable Double Tap on iOS
// $menuItem.on('touchstart mouseenter focus', function(e) {
//     if(e.type == 'touchstart') {
//         // Don't trigger mouseenter even if they hold
//         e.stopImmediatePropagation();
//         // If $item is a link (<a>), don't go to said link on mobile, show menu instead
//         e.preventDefault();
//     }
//
//     // Show the submenu here
// });
