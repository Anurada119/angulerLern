$(document).ready(function () {
    $('.mp-burger').on('click', function () {
        $('.mp-sidenav').toggleClass('sidenav-open');
        $('.mp-burger').toggleClass('sidenav-open');
        $('.mp-grid').toggleClass('sidenav-open');
        $('.mp-cv-link svg').toggle();

        if ($('mp-grid').hasClass('sidenav-open')) {
            $('.mp-wrapper').css({
                'overflow': 'hidden'
            })
        }

        $('.mp-main-nav li').on('click', function () {
            $('.mp-sidenav').removeClass('sidenav-open');
            $('.mp-cv-link svg').toggle();
            $('.mp-burger').removeClass('sidenav-open');
        })
    });
});

