@@include('slick.min.js');

$(document).ready(function () {

  // Header section
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

  // Surf section
  $('.surf__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.surf__map',
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });

  $('.surf__map').slick({
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 8,
    focusOnSelect: true,
    arrows: false,
    asNavFor: '.surf__slider',
  });

});