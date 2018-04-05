
$(window).on('load', function(){
    setTimeout(function() {
        $('.pre-loader').hide();
    }, 1000);    
});

$(document).ready(function() {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".bg-login").css('height', 'initial');
        $(".bg-login").css('min-height', '100%');
    }
    //Dropdown Menus
    $(".dropdown").hover(
        function() {
            $(this).addClass('show');
        },
        function() {
            $(this).removeClass('show');
        }
    );

    $('#carousel-example-generic').carousel();


    // Make a sticky navbar on scrolling
    $(window).scroll(function() {

        function makeItFixed(x) {

            var body = $('body'),
                navbar = $('nav.navbar');

            if ($(window).scrollTop() >= x) {
                navbar.addClass('fixed-top');
                body.css('padding-top', $('nav.navbar').outerHeight());
            } else {
                navbar.removeClass('fixed-top');
                body.css('padding-top', '0');
            }
        }

        makeItFixed($('.top-bar').outerHeight());
    });

});


