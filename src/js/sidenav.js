
$(document).ready(function() {
    $('.mp-burger').on('click', function() {
        $('.mp-sidenav').toggleClass('sidenav-open');
        $('.mp-burger').toggleClass('sidenav-open');
        $('.mp-grid').toggleClass('sidenav-open');
        $('.mp-quote-slider').toggleClass('menu-fix');
        $('.mp-cv-link svg').toggle();
        $('.mp-main-nav li').toggleClass('addLinks');

        if ($('mp-grid').hasClass('sidenav-open')) {
            $('.main-page').removeAttr("style");
            $('.mp-burger').removeClass('removeMe');
            alert();
        }
        
        $('.mp-main-nav li').on('click', function() {
            $('.mp-sidenav').removeClass('sidenav-open');
            $('.mp-cv-link svg').toggle();
            $('.mp-burger').removeClass('sidenav-open');
            $('.mp-quote-slider').removeClass('menu-fix');
            $('.mp-main-nav li').removeClass('addLinks');
        })
    }); 
});

