// Works in Fire Fox - 6.0.2
// Works in IE9

// This IIFE is used to make a static navbar stick to the top
// of the window when the user scrolls it out of view.
// @param navSelector : CSS selector used to identify the navbar.
(function (navSelector) {

    var navbar = document.querySelector(navSelector);
    var navbarDimensions = navbar.getBoundingClientRect();

    // navbarDefaultTop is the top value that is used to determine when the
    // navbar is in its original place on the page.
    var navbarDefaultTop = navbarDimensions.top;

    window.onresize = function () {
        console.log('resizzed');
        navbarDefaultTop = navbar.getBoundingClientRect().top;
        navbarDimensions = navbar.getBoundingClientRect();
    };

    window.onscroll = function () {
        
        // Refresh navbarDimensions variable to get an updated
        // top value every time.
        navbarDimensions = navbar.getBoundingClientRect();

        // If navbar top reaches the top of the viewport window.
        // Attach the navbar to the top of the viewport by setting it's position
        // to fixed, top to 0, and width to 100%.
        if (navbarDimensions.top <= 0 && navbar.style.position !== "fixed") {
            console.log('dd' );
            navbar.style.position = "fixed";
            navbar.style.top = 0;
            navbar.style.width = "100%";

        }
        console.log(window.pageYOffset);
        
        // If window.pageYOffset is less than the navbar's static top position.
        // Set navbar position to static to snap to original position on page.
        if (navbarDefaultTop > window.pageYOffset && navbar.style.position !== "static") {
            
            navbar.style.position = "static";
            console.log(navbarDefaultTop > window.pageYOffset, navbarDefaultTop, window.pageYOffset);

        }

    };

})(".navbar");