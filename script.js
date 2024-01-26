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

var destinationsSwiper = new Swiper('.destinations-swiper', {
  speed: 800,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    type: 'progressbar',
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
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

var thumbsSwiper = new Swiper('.gallery-thumb-swiper', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});

var gallerySwiper = new Swiper('.gallery-swiper', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  speed: 800,
  autoplay: true,
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: thumbsSwiper,
  },

  breakpoints: {
    520: {
      slidesPerView: 2,
    },
    998: {
      slidesPerView: 3,
    },
  },
});
