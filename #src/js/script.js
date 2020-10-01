@@include('slick.min.js');

$(document).ready(function () {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    asNavFor: '.header__slider-dots',
  });

  $('.header__slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });

});