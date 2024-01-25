window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  let favHeight;
  var scrollPosition = window.scrollY;
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (screenWidth <= 998) {
    favHeight = 100;
  } else {
    favHeight = 500;
  }
  if (scrollPosition > favHeight) {
    navbar.style.background = 'darkslategrey ';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});

var swiper = new Swiper('.destinations-swiper', {
  speed: 800,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    disableOnClick: true,
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    998: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

/* Destinations */
/* const destinationSlides = document.querySelectorAll('.destination-slide');
destinationSlides.forEach(destinationSlide => {
  destinationSlide.addEventListener('mouseover', e => {
    console.log(e.target.querySelector('.destination-title'));
  });
  destinationSlide.addEventListener('mouseout', e => {});
});
 */
