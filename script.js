import PhotoSwipeLightbox from './photoswipe/dist/photoswipe-lightbox.esm.js';
function addNavBg() {
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

AOS.init({
  duration: 800,
  once: true,
  useClassNames: true,
  offset: 300,
  delay: 200,
  easing: 'ease-in',
});

const reviews = [
  {
    id: 1,
    img: './assets/reviews/anushi.png',
    fullName: 'Anushi Bisen',
    reviewText:
      'We had a wonderful trip and our driver Mr. Irfan made it even more fun and memorable. He’s very kind and cooperative and was very informative about the places we were going to, he had also suggested us amazing restaurants for lunch and dinner breaks while travelling, we would love to travel with him for our next trip too! Thankyou so much for your amazing service.',
  },
  {
    id: 2,
    img: './assets/reviews/thangam.png',
    fullName: 'Thangam Subramaniam',
    reviewText:
      'Great Service! Wonderful taxi service. Asif, our driver for the trip was really great. He suggested us the best places around and took us to all the places we wanted to visit. Overall a wonderful experience with Feroze Bhat’s taxi service.',
  },
  {
    id: 3,
    img: './assets/reviews/pranav.png',
    fullName: 'Pranav Bhasin',
    reviewText:
      'Booked taxi service for our whole Kashmir trip from Mr Feroz. He was very kind and friendly to talk to. He also helped us to bargain in local markets and referred a local guide to us who helped in gulmarg sightseeing. The entire journey was pleasant and we have no complaints. Mr. Irfan drove us to Sonamarg and he was generous enough to show us the viewpoints on the way and take our pictures.',
  },
  {
    id: 4,
    img: './assets/reviews/shakeel.png',
    fullName: 'Shakeelahmed MA',
    reviewText:
      'We came across Firoz number in Google and booked our 3 days trip with them in Kashmir.. Asif was very friendly, humble driver. He suggests the place to visit, eat and shop. Asif was patient through out the trip. Highly recommended service if anyone visiting Kashmir.\nThank you Firoz and Asif for the great service during our Srinagar visit.',
  },
  {
    id: 5,
    img: './assets/reviews/ajay.png',
    fullName: 'Ajay Pandey',
    reviewText:
      'Taxi service Kashmir is fabulous taxi service in Kashmir. We would like thank specially Mr. Irfan who is our driver, in our whole Kashmir trip. Caring loving and Reliable thank Irfan to make our holidays so special',
  },
  {
    id: 6,
    img: './assets/reviews/younus.png',
    fullName: 'Younus Qadri',
    reviewText:
      "Our trip to Kashmir would'\nt have been the same without the exceptional service of our driver, Firdaus. From the moment we met him, his warmth and genuine smile made us feel instantly at ease. His humble and helpful nature was evident throughout the journey, always willing to go the extra mile to ensure our comfort and satisfaction.\nFirdaus' expertise as a driver was equally impressive. He navigated the winding mountain roads with confidence, ensuring a smooth and safe ride. He even doubled as our local guide, pointing out hidden gems and sharing insightful anecdotes about the places we visited. His knowledge of the region added a deeper dimension to our experience.\nBeyond his professional skills, Firdaus' most remarkable quality was his genuine kindness. He treated us like family, always anticipating our needs and offering assistance without hesitation. He went above and beyond, helping us with luggage, making recommendations for local restaurants.\nThe car itself was well-maintained and comfortable, making the journey even more enjoyable. Firdaus kept the car clean throughout the trip. He also helped us in getting local SIM card, so that we stay connected with our family.\nIn conclusion, Firdaus' exceptional service played a pivotal role in making our trip to Kashmir unforgettable. His helpfulness, expertise, and genuine personality elevated our experience from a simple vacation to a truly heartwarming journey. We would wholeheartedly recommend Firdaus to anyone seeking a comfortable and enriching travel experience in Kashmir",
  },
  {
    id: 7,
    img: './assets/reviews/charu.png',
    fullName: 'Charu Mehrotra',
    reviewText: `We had a wonderful trip and our driver Mr. Irfan made it even more fun and memorable. He’s very kind and cooperative and was very informative about the places we were going to, he had also suggested us amazing restaurants for lunch and dinner breaks while travelling, we would love to travel with him for our next trip too! Thankyou so much for your amazing service.`,
  },
  {
    id: 8,
    img: './assets/reviews/musab.png',
    fullName: 'Musab Jummal',
    reviewText:
      'I had an excellent experience with the taxi driver(Asif Iqbal). He was well-mannered, polite, and incredibly humble throughout the journey. His friendly demeanor made the ride enjoyable, and he even provided helpful suggestions, enhancing the overall experience. Highly recommend his service!',
  },
  {
    id: 9,
    img: './assets/reviews/mahattam.png',
    fullName: 'Mahattam Prasad',
    reviewText:
      'Taxi services Kashmir is very very good service provider. We have used the services for nine days and their services are just too good. The driver Aisf Eqbal Baba is an extraordinary person and very friendly. He is just like a family member and he is very supportive. He helped me a lot when my wife became sick in Srinagar. He took us to Hospital and remained with us till discharge of my wife. I really appreciate him with core of my heart. The second driver Mr. Shameer is also an excellent person and he guided us at all places. He is also very friendly. We thank both of them.',
  },
  {
    id: 10,
    img: './assets/reviews/sanjay.png',
    fullName: 'Sanjay Rastogi',
    reviewText:
      'Highly recommend Feroz for any type of tour or excursion or adventure tour. Highly knowledgeable and soft spoken person knows Kashmir better than any other tour operators. . Had really good times with him.',
  },
];

const testimonialContainer = document.querySelector('.review-cards-container');
reviews.forEach(review => {
  const reviewCard = document.createElement('div');
  reviewCard.className = 'swiper-slide reviews-slide';
  reviewCard.innerHTML = `

            <div class="reviewer-profile pb-3">
              <div class="picture">
                <img
                  src="${review.img}"
                  alt=""
                />
              </div>
              <div d-flex flex-column align-items-start>
                <h4 class="reviewer-name">${review.fullName}</h4>
                <div class="start-ratings">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
              </div>
              
            </div>
            <p class="review-text">
              ${review.reviewText}
            </p>
  `;
  testimonialContainer.appendChild(reviewCard);
});

let reviewsSwiper = new Swiper('.reviews-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.next-review',
    prevEl: '.prev-review',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    998: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
