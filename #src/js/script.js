@@include('slick.min.js');

$(document).ready(function () {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    asNavFor: '.header__slider-dots',
  });

  $('.header__slider-dots').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });


  // Burger and menu add Class
  $('.header__burger').click(function () {
    $('.menu').toggleClass('menu_active');
    $('.header__burger').toggleClass('header__burger_active');
    $('body').toggleClass('lock');
  });

});