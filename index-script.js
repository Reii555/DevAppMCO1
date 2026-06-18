$(document).ready(function() {
    // Smooth scroll to search section
    $('#pressScrollSearch').click(function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        
        $('html, body').animate({
            scrollTop: $('#searchFlightContainer').offset().top - 80 // 80px offset for navbar
        }, 800); // 800ms scroll speed
    });
});