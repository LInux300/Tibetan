//= require slick-carousel/slick/slick

$(document).foundation();

// SLick Slider Code
var windowWidth=$(window).width();

$(window).resize(function() {
  var windowWidth=$(window).width();
    if((windowWidth > 1) && (windowWidth < 640)){
      $('.slick-multislider').unslick();
      $('.slick-multislider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          // dots: true,
      });
    } else {
      $('.slick-multislider').unslick();
      $('.slick-multislider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        // dots: true,
      });
    }
});

if((windowWidth > 1) && (windowWidth < 640)){
  $('.slick-multislider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    // dots: true,
  });
} else {
  $('.slick-multislider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    // dots: true,
  });
}
