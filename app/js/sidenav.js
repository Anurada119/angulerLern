$(document).ready(function() {
    $('.mp-burger').on('click', function() {
        $('.mp-sidenav').toggleClass('sidenav-open');
        $('.mp-burger').toggleClass('sidenav-open');
        $('.mp-grid').toggleClass('sidenav-open');
        $('.mp-quote-slider').toggleClass('menu-fix');
        $('.mp-cv-link svg').toggle();

        if ($('mp-grid').hasClass('sidenav-open')) {
            $('.main-page').removeAttr("style");
            $('.mp-burger').removeClass('removeMe');
            alert();
        }

        $('.mp-main-nav li').on('click', function() {
            $('.mp-sidenav').removeClass('sidenav-open');
            $('.mp-cv-link svg').toggle();
            $('.mp-burger').removeClass('sidenav-open');
        })
    });

    //sidenavHeight()



    $('.mp-burger').on('click', function() {
        var sideNavHeight = $('.mp-sidenav').height();
        var wHeight = $('.main-page').offset().top;
        // $('.main-page').css({
        //     'height': sideNavHeight - wHeight + 'px'
        // });
        // $('.main-page').css('height', 'auto');


    });
});