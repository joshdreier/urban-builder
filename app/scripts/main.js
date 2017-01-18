var UB = {};

$(function() {

  // Swiper
  var swiperMain = new Swiper('.swiper-container', {
    spaceBetween: 10,
    slidesPerView: 1,
    slideToClickedSlide: true,
    grabCursor: true,
    loop: true,
    autoplay: 6000,
    speed: 1000,
    effect: 'fade',
    fade: {
      crossFade: true
    }
  });


});


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

