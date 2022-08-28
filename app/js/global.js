var UB = {};

$(function() {


  if ($('.homepage').length) {
    const swiperHome = new Swiper('.swiper-container-home', {
      // Optional parameters
      loop: true,

      autoplay: {
        delay: 5000,
      },

      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    });
  }


  if ($('.projects').length) {
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }




});

// mobile nav

UB.modal = (function($){

  var modalOverlay,
      navButton;

  function init(){
    modalOverlay = $('.main-nav');
    navButton = $('.hamburger-icon');
    navButton.on('click',  mobileMenuHandler);
  }

  // show overlay
  function modalOpen() {
    modalOverlay.addClass('show-modal');
    $('body').css('overflow-x', 'hidden');
    $('html').css('overflow', 'hidden');
    $('#wrapper').addClass('fixed');
    modalOverlay.addClass('active');
  }

  //hide overlay and modal content
  function modalClose() {
    modalOverlay.removeClass('show-modal');
    $('body').css('overflow-x', 'auto');
    $('html').css('overflow', 'auto');
    $('#wrapper').removeClass('fixed');
    modalOverlay.removeClass('active');
  }

  function mobileMenuHandler(e){
    e.preventDefault();

    if (! $(this).is('.active') ) {
      modalOpen(this);
      $(this).addClass('active');
    }

    else {
      modalClose(this);
      $(this).removeClass('active');
    }

  }

  init();

})(jQuery);

