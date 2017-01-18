var UB = {};

$(function() {

  // projects swiper
  $('.swiper-container').each(function(){
    new Swiper($(this), {
      spaceBetween: 3,
      slidesPerView: 1,
      grabCursor: true,

      speed: 1000,
      pagination: $(this).find('.swiper-pagination'),
      paginationClickable: $(this).find('.swiper-pagination')
    });
  });

  //autoplay first
  var mySwiper = $('.swiper-container')[0].swiper;
  mySwiper.params.autoplay = 5000;
  mySwiper.startAutoplay();

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

