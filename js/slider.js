$(function() {
  // Owl Carousel
  var owl = $(".thrd-block .photos-slider");
  owl.owlCarousel({
    items: 2,
    margin: 40,
    loop: true,
    nav:true,
    navContainer:'.owl-nav',
    lazyLoad: true,
    navText: [
        "<img src='images/icons/arrow-prev.svg'>",
        "<img src='images/icons/arrow-next.svg''>"
        ],
    rtl: false,
    loop:true,
    center: true,
    animateIn: 'linear',
    // animateOut: 'linear',
    // autoplay:true,
    // autoplayTimeout:9000,
    // autoplayHoverPause:false,
    dots: true,
    dotsEach:true,
    responsiveClass:true,
    responsive:{
        0:{
          items:1,
          nav:false,
          margin: 30,
        },
        600:{
          items:1,
          nav:false,
          margin: 30,
        },
        700:{
          items:1,
          nav:false,
          margin: 50,
        },
        900:{
          items:1,
          nav:false,
          margin: 50,
        },
        1000:{
          margin: 40
        }
    }
  });
});

$(function() {
  // Owl Carousel
  var owl = $(".frth-block .testi-slider");
  owl.owlCarousel({
    lazyLoad: true,
    loop: true,
    items: 1,
    margin: 21,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 9500,
    autoplaySpeed: 9500,
    smartSpeed: 9500,
    // center: true,
    dots:false,
    });


    jQuery('.testi-slider').trigger('play.owl.autoplay',[9500]);

    function setSpeed(){
        jQuery('.testi-slider').trigger('play.owl.autoplay',[9500]);
    }

    setTimeout(setSpeed, 9500);
});