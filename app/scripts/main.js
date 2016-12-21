var SFPS = {};

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


SFPS.modal = (function($){

  var modalOverlay,
      modalCloseBtn,
      modalContent,
      btnMobileMenu;

  function init(){
    modalOverlay = $('.modal-overlay');
    modalCloseBtn = modalOverlay.find('.icon-close-white');
    modalContent = $('.modal-content');
    btnMobileMenu = $('.hamburger');
    btnMobileMenu.on('click',  mobileMenuHandler);
    modalCloseBtn.on('click', modalClose);
  }

  // show overlay
  function modalOpen(e) {
    modalOverlay.addClass('show-modal');
    $('body').css('overflow-x', 'hidden');
    $('html').css('overflow', 'hidden');
    $('#wrapper').addClass('fixed');
  }

  //hide overlay and modal content
  function modalClose() {
    modalOverlay.removeClass('show-modal');
    $('body').css('overflow-x', 'auto');
    $('html').css('overflow', 'auto');
    $('#wrapper').removeClass('fixed');
  }

  function mobileMenuHandler(e){
    e.preventDefault();
    modalOpen();
  }

  init();

})(jQuery);

