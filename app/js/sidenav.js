$(document).ready(function() {
    $('.mp-burger').on('click', function() {
        $('.mp-sidenav').toggleClass('sidenav-open');
        $('.mp-burger').toggleClass('sidenav-open');
        $('.mp-grid').toggleClass('sidenav-open');
        $('.mp-quote-slider').toggleClass('menu-fix');
        $('.mp-cv-link svg').toggle();
        $('.mp-main-nav li').toggleClass('addLinks');

        $('.mp-sidenav ul.mp-main-nav li').on('click', function () {
            $('.mp-sidenav').removeClass('sidenav-open');
            $('.mp-cv-link svg').show();
            $('.mp-burger').removeClass('sidenav-open');
            $('.mp-quote-slider').removeClass('menu-fix');
            $('.mp-main-nav li').removeClass('addLinks');
            $('.mp-main-nav li').removeClass('sidenav-open');
            $(this).parents('.mp-wrapper').find('.post .post-bg').addClass('preload-needed');
            $(this).parents('.mp-wrapper').find('.post .post-bg').addClass('imageLoadIn');

        });
    });

   setTimeout(function() {
      $('.post-bg').addClass('preload-needed');
   }, 2400);

   setTimeout(function(){
      $('.post-bg').addClass('imageLoadIn');
   }, 2410)

   $(window).load(function(){

      $('.preload').fadeOut('fast', function(){
         $(this).remove();
      })
   });
});

function imageLoads(){
   $('.post-bg').addClass('preload-needed');
   $('.post-bg').addClass('imageLoadIn');
   setTimeout(function() {
      $('.post-bg').addClass('preload-needed');
   }, 300);

   setTimeout(function(){
      $('.post-bg').addClass('imageLoadIn');
   }, 310)
}
