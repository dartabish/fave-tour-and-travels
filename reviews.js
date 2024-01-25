/* Reviews */
$('.responsive').slick({
  loop: true,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><i class="fa fa-angle-left"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><i class="fa fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1092,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
