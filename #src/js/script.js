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
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
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
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 890,
        settings: {
          infinite: true,
          slidesToShow: 2,
          initialSlide: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 740,
        settings: {
          infinite: true,
          slidesToShow: 1,
          initialSlide: 1,
          centerMode: true,
        }
      }
    ]
  });

});