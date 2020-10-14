@@include('slick.min.js');
@@include('wow.min.js');

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

  // Якоря на ссылки
  $(".header__menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $(".header__arrows").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  // Scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('.scrolltop').fadeIn();
    } else {
      $('.scrolltop').fadeOut();
    }
  });

  $('.scrolltop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
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

  // Travel section
  $('.section-slider').slick({
    infinite: true,
    fade: true,
  });



  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/sleep/plus.png" alt="add"></div><div class="quantity-button quantity-down"><img src="img/sleep/minus.png" alt="remove"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });



  $('.quantity-button').on('click', function () {
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);
  });
  let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
  $('.summ').html('$' + summ);


  // Shop section
  $('.shop__surfboard-row').on('click', function () {
    $(this).toggleClass('shop__surfboard-row_active')
  });

  $('.shop__slider').slick({
    infinite: true,
    fade: true,
  });

});