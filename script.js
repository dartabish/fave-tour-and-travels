import PhotoSwipeLightbox from './photoswipe/dist/photoswipe-lightbox.esm.js';

export function addNavBg() {
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
}

addNavBg();

var destinationsSwiper = new Swiper('.destinations-swiper', {
  speed: 800,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: '.destination-pagination',
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

const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  zoom: false,
  tapAction: 'close',
  showHideAnimationType: 'zoom',
  closeAnimationDuration: '0000',

  pswpModule: () => import('./photoswipe/dist/photoswipe.esm.js'),
});
lightbox.init();

var gallerySwiper = new Swiper('.gallery-swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.gallery-pagination',
    type: 'progressbar',
    clickable: true,
  },
  speed: 800,
  autoplay: true,
  spaceBetween: 10,
  slidesPerView: 1,
  breakpoints: {
    560: {
      slidesPerView: 2,
    },
    998: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});

// About section

const container = document.getElementById('animation-container');
const animation = lottie.loadAnimation({
  container: container,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './assets/Animation - 1706528908157.json',
});

new TypeIt('#hero-punchline', {
  strings: 'Embark Kashmir',
  speed: 70,
  cursor: false,
}).go();

new TypeIt('.hero-one-liner', {
  strings: 'Crafting journeys, not just trips ',
  speed: 100,
}).go();
