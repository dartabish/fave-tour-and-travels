import PhotoSwipeLightbox from './photoswipe/dist/photoswipe-lightbox.esm.js';
document.addEventListener('DOMContentLoaded', () => {
  let video = document.querySelector('.background-video');
  video.oncanplaythrough = function () {
    video.play();
    video.style.display = 'block';
    document.querySelector('.video-placeholder').style.display = 'none';
  };
});

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
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
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
  loop: false,

  pswpModule: () => import('./photoswipe/dist/photoswipe.esm.js'),
});
lightbox.init();

var gallerySwiper = new Swiper('.gallery-swiper', {
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
  path: './assets/landing-page/about-us.json',
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
  duration: 500,
  once: true,
  useClassNames: true,
  easing: 'ease-in',
});

const reviews = [
  {
    id: 1,
    img: './assets/reviews/shakeel.png',
    fullName: 'Shakeelahmed MA',
    reviewText: `We came across <strong>Firoz's</strong> number in Google and booked our 3 days trip with them in Kashmir.. <strong>Asif</strong> was very friendly, humble driver. He suggests the place to visit, eat and shop. Asif was patient through out the trip. Highly recommended service if anyone visiting Kashmir.\nThank you <strong>Firoz</strong> and <strong>Asif</strong> for the great service during our Srinagar visit.`,
  },

  {
    id: 2,
    img: './assets/reviews/pranav.png',
    fullName: 'Pranav Bhasin',
    reviewText: `Booked taxi service for our whole Kashmir trip from <strong>Mr Feroz</strong>. He was very kind and friendly to talk to. He also helped us to bargain in local markets and referred a local guide to us who helped in gulmarg sightseeing. The entire journey was pleasant and we have no complaints. <strong>Mr.Irfan</strong> drove us to Sonamarg and he was generous enough to show us the viewpoints on the way and take our pictures.`,
  },
  {
    id: 3,
    img: './assets/reviews/himanshu.jpg',
    fullName: 'Himanshu Chauhan',
    reviewText: `Tried to contact the taxi service in Srinagar and luckily found them. I was traveling with my family with two little ones.<strong>Mr Asif Baba</strong> was our driver and he is very punctual in time and very good to drive. They provide a very neat and clean car to us.
    One more thing not only <strong>Mr Asif Baba</strong>, during my visit I can say that all Kashmiri people are very good at hospitality. They are very polite and especially the people of Pahalgam are very decent.
    <br>
    <strong>"Kashmir jannat hai, aur vaha k log Kashmir ko jannat banate hain"</strong>`,
  },
  {
    id: 4,
    img: './assets/reviews/sanjay.png',
    fullName: 'Sanjay Rastogi',
    reviewText: `Highly recommend <strong>Feroz</strong> for any type of tour or excursion or adventure tour. Highly knowledgeable and soft spoken person knows Kashmir better than any other tour operators. Had really good times with him.`,
  },

  {
    id: 5,
    img: './assets/reviews/younus.png',
    fullName: 'Younus Qadri',
    reviewText: `Our trip to Kashmir wouldn' t have been the same without the exceptional service of our driver, <strong>Firdaus</strong>. From the moment we met him, his warmth and genuine smile made us feel instantly at ease. His humble and helpful nature was evident throughout the journey, always willing to go the extra mile to ensure our comfort and satisfaction.\n<strong>Firdaus'</strong> expertise as a driver was equally impressive. He navigated the winding mountain roads with confidence, ensuring a smooth and safe ride. He even doubled as our local guide, pointing out hidden gems and sharing insightful anecdotes about the places we visited. His knowledge of the region added a deeper dimension to our experience.\nBeyond his professional skills, <strong>Firdaus'</strong> most remarkable quality was his genuine kindness. He treated us like family, always anticipating our needs and offering assistance without hesitation. He went above and beyond, helping us with luggage, making recommendations for local restaurants.\nThe car itself was well-maintained and comfortable, making the journey even more enjoyable. <strong>Firdaus</strong> kept the car clean throughout the trip. He also helped us in getting local SIM card, so that we stay connected with our family.\nIn conclusion, <strong>Firdaus'</strong> exceptional service played a pivotal role in making our trip to Kashmir unforgettable. His helpfulness, expertise, and genuine personality elevated our experience from a simple vacation to a truly heartwarming journey. We would wholeheartedly recommend <strong>Firdaus</strong> to anyone seeking a comfortable and enriching travel experience in Kashmir`,
  },
  {
    id: 6,
    img: './assets/reviews/thangam.png',
    fullName: 'Thangam Subramaniam',
    reviewText: `Great Service! Wonderful taxi service. <strong>Asif</strong>, our driver for the trip was really great. He suggested us the best places around and took us to all the places we wanted to visit. Overall a wonderful experience with <strong>Feroze Bhat’s</strong> taxi service.`,
  },

  {
    id: 7,
    img: './assets/reviews/mohit.png',
    fullName: 'Mohit Hussein',
    reviewText: `Outstanding, efficient service, safe, courteous and respectful driver. Most important....a clean and well maintained vehicle. When you travel with family these are the key factors one considers. All boxes ticked.`,
  },
  {
    id: 8,
    img: './assets/reviews/charu.png',
    fullName: 'Charu Mehrotra',
    reviewText: `We had a wonderful trip and our driver <strong>Mr. Irfan</strong> made it even more fun and memorable. He’s very kind and cooperative and was very informative about the places we were going to, he had also suggested us amazing restaurants for lunch and dinner breaks while travelling, we would love to travel with him for our next trip too! Thank you so much for your amazing service.`,
  },
  {
    id: 9,
    img: './assets/reviews/musab.png',
    fullName: 'Musab Jummal',
    reviewText: `I had an excellent experience with the taxi driver <strong>(Asif Iqbal)</strong>. He was well-mannered, polite, and incredibly humble throughout the journey. His friendly demeanor made the ride enjoyable, and he even provided helpful suggestions, enhancing the overall experience. Highly recommend his service!`,
  },
  {
    id: 10,
    img: './assets/reviews/mahattam.png',
    fullName: 'Mahattam Prasad',
    reviewText: `Taxi services Kashmir is very very good service provider. We have used the services for nine days and their services are just too good. The driver <strong>Asif Eqbal Baba</strong> is an extraordinary person and very friendly. He is just like a family member and he is very supportive. He helped me a lot when my wife became sick in Srinagar. He took us to Hospital and remained with us till discharge of my wife. I really appreciate him with core of my heart. The second driver <strong>Mr. Shameer</strong> is also an excellent person and he guided us at all places. He is also very friendly. We thank both of them.`,
  },
  {
    id: 11,
    img: './assets/reviews/ajay.png',
    fullName: 'Ajay Pandey',
    reviewText: `Taxi service Kashmir is fabulous taxi service in Kashmir. We would like thank specially <strong>Mr. Irfan</strong> who is our driver, in our whole Kashmir trip. Caring loving and reliable thank <strong>Irfan</strong> to make our holidays so special.`,
  },
  {
    id: 12,
    img: './assets/reviews/anushi.png',
    fullName: 'Anushi Bisen',
    reviewText: `We had a wonderful trip and our driver <strong>Mr. Irfan</strong> made it even more fun and memorable. He’s very kind and cooperative and was very informative about the places we were going to, he had also suggested us amazing restaurants for lunch and dinner breaks while travelling, we would love to travel with him for our next trip too! Thankyou so much for your amazing service.`,
  },

  {
    id: 13,
    img: './assets/reviews/gajapathy.png',
    fullName: 'Gajapathy N',
    reviewText: `Based on the online Reviews we spoke with <strong>Mr. Feroze Bhat</strong> and booked Cab from Taxi Service Kashmir for a family trip for 7 days. Our driver  <strong>Mr. Firdous Ahmed Bhat</strong> was with us for our entire trip. He was very courteous, gave tips to bargain  ,very helpful throughout. He really made our trip to Kashmir a memorable one. He was like a family to us and took good care of us. Thankyou.`,
  },
  {
    id: 14,
    img: './assets/reviews/vaibhav.png',
    fullName: 'Vaibhav',
    reviewText: `Best taxi service. If you are reading this review, look no further. Go for it.
    <strong>Mr. Feroz</strong> bhai is very friendly and cooperative person. We were provided with very experienced driver <strong>Mr. Irfan</strong> bhai who took care of our travel like a family member.`,
  },
  {
    id: 15,
    img: './assets/reviews/zubiya.png',
    fullName: 'Zubiya Shaikh',
    reviewText: `Our Kashmir trip success goes to these organisers especially <strong>Mr. Firdous Ahmed</strong> who accompanied us throughout and welcomed us to his city. Our trip was made memorable due to his kind gestures and family feel taken good care of us. I have already started recommending these services to my friends and family . And wishing them all the success and to see them again for our winter trip.`,
  },
  {
    id: 16,
    img: './assets/reviews/arvind.png',
    fullName: 'Arvind Singh',
    reviewText: `Thanks to the lucky moment we decided to book Taxi services from <strong>Mr Feroz Bhat</strong>. We booked Taxi for 7 days with them and amazed with their services and dedication throughout the tour.
    All thanks to <strong>Mr. Firdous </strong>(our Pilot), he is a wonderful person who treated us as his family and guided us throughout the trip. He's is very informative, courteous and cool minded person and goes out of way to help you even in situations that should not concern him. He always made us comfortable, he alerted/ gave tips for bargaining, took us to the best and cheap shops for clothes and best restaurants as well, also suggested the best hotels to stay in different places with reasonable prices. God bless you dear <strong>Firdous</strong>.
    Thanks a lot <strong>Firoz Bhai</strong> for suggesting us great itinerary and helping to book a nice houseboat. All these at a reasonable cost. We are really grateful to you. God bless you.
    After all I can say that Taxi Services Kashmir deserves for all stars and highly recommend their services for people planning to visit Kashmir. They will take care of you beyond your expectations.`,
  },
  {
    id: 17,
    img: './assets/reviews/kirti.png',
    fullName: 'Kirti Malhotra',
    reviewText: `We booked Cab from Taxi Service Kashmir for a family trip for 7 days starting on 20th June 23. Our driver <strong>Mr. Firdous Ahmed Bhat</strong> was with us for our entire trip. Now what do I say about this gentleman, he was very courteous and very helpful throughout. He really made our trip to Kashmir a memorable one. He was like a family to us and took good care of us. I would highly recommend services of Taxi Service Kashmir to everyone and thanks and Good Wishes to Feroze Bhat.`,
  },
  {
    id: 18,
    img: './assets/reviews/saurabh.png',
    fullName: 'Saurabh Dakhane',
    reviewText: `<strong>Ahmad Suhaib</strong> sir is amazing and very jolly person .He treat us like family member.
    We were so much comfortable with him.
    I will personally recommend to have tour with him .
    Thank you sir for making our tour memorable and fantastic.`,
  },

  {
    id: 19,
    img: './assets/reviews/praveen.png',
    fullName: 'Praveen Pahwa',
    reviewText: `Had Nice experience during My Seven days of Family tour of Srinagar.
    <strong>Mr. Feroz</strong> ji is nice person and is professional in the the services.
    The Car was neat and clean and well maintained.
    Our tour driver <strong>Mr Irfan</strong> is also Good person., He was quite informative and was very friendly with kids.
    Will love to travel with them if I visit again in Kashmir.`,
  },
  {
    id: 20,
    img: './assets/reviews/haseeb.png',
    fullName: 'Hasibur Rahman Khan',
    reviewText: `Very nice organized service. They provided a brand new car which was extra comfortable. Booking from outside India was smooth and hassle free. Throughout the tour assigned person <strong>Mr. Firdaus</strong> helped us plan the itinerary and provided us important information regarding local sightseeing and shopping. Suggested some local places to eat which were delicious, especially Mutton Kabab at <strong>Khayam Chowk</strong>. He was always present to help us if we needed something. Sometimes we started early for sightseeing and he was always cooperative.
    Overall very nice service for couples and families.`,
  },
  {
    id: 21,
    img: './assets/reviews/rifa.png',
    fullName: 'Mohamed Rifa',
    reviewText: `Our expedition to the breathtaking region of Kashmir has left an indelible mark on our memories, and undoubtedly, the primary contributor to our delightful experience was the exceptional hospitality and guidance proffered by our driver, <strong>Shahid</strong>. This benevolent and unassuming gentleman adeptly chauffeured us around Srinagar, and further escorted us to the picturesque locations of Pahalgam and Gulmarg. His impeccable driving skills ensured our safety throughout the journey. Additionally, his astute recommendations led us to shops that offered high-quality products at reasonable prices, catering to the varied needs of our family members, both young and old, resulting in a relaxed and comfortable ride. Moreover, Shahid's in-depth knowledge of the Kashmiri culture and surroundings, coupled with his amiable demeanor, made our trip truly gratifying. It is exceptionally rare to encounter such a personable and genial driver, and we unequivocally recommend Shahid to anyone planning a visit to the beautiful land of Kashmir. Rest assured, you will not be disappointed, and your journey will be enriched with comfort, satisfaction, and fond memories.`,
  },
  {
    id: 22,
    img: './assets/reviews/ankkit.png',
    fullName: 'Ankkit M Talwaar',
    reviewText: `It was our first vacation post marriage to Srinagar me and wife . So we got in touch with Taxi services Kashmir by <strong>Mr.Feroz</strong> who is such a gentleman the way he spoke and cleared my concerns. He acknowledged our needs and deputed <strong>Mr. Ferdous Ahmed</strong> with us for our tourist excursions and sight seeing in Srinagar and we must say he’s such a helpful and polite person we felt so like home in his company he was more like a brother and family to us . Very professional and safe driving by him and showed us each and every place with full zeal and guided us about everything . I would recommend who so ever is planning to visit Srinagar kindly hire Taxi services Kashmir and your buddy and brother <strong>Mr. Ferdous Ahmed</strong> is there to take care of you and welcome you with open arms . Hope to see you guys soon . Regards`,
  },
  {
    id: 23,
    img: './assets/reviews/eshika.png',
    fullName: 'Eshika Thakur',
    reviewText: `I had a very delightful experience with taxi service kashmir. Our driver <strong>Mr Firdous</strong> has been really accommodating and helpful through out our trip.He’s been like a family and always on time.We got more than what we asked for and talking about the pricing it’s been reasonable when compared to other taxi services. I would highly recommend to everyone who’s visiting Kashmir to give them a chance and you won’t be disappointed. Thank you for the great hospitality.`,
  },
  {
    id: 24,
    img: './assets/reviews/manish.png',
    fullName: 'Manish Mittal',
    reviewText: `Just wanted to share the feedback for <strong>Sameer</strong> -
    <br>
    1. Very punctual, which I liked most about him.
    <br>
    2. Very cooperative and supportive, also bought medicine for my wife on Thursday when she was unwell.
    <br>
    3. Worked as a guide as well, stopping the cab on all the beautiful points and wherever we asked him to, for clicking photographs.
    <br>
    4. Became like a good friend and a family member at the end of our journey.
    <br>
    5. Highly recommendable to other travelers.
    <br>
    Overall a great experience.
    <br>
    Thanks and all the best 👍😊`,
  },
  {
    id: 25,
    img: './assets/reviews/bhatia.png',
    fullName: 'Manoj Bhatia',
    reviewText: `I just completed a family trip of Kashmir. Apart from the pleasure we got in Kashmir Valley , the comfort of commuting was provided by <strong>Feroz </strong>bhai. Right from the booking , to our arrival , site seeing , guided tours till our departure everything was perfect to be rated nothing less than 100% service just to achieve customer delight . Our Driver <strong>Mushtaq</strong> bhai treated us not like customers but guests to Kashmir . He kept us guiding on the tours - pros and cons , time required , time to be spend at each site .. be it <strong>Gulmarg</strong>, <strong>Pehelgam</strong>, <strong>Sonmarg</strong>, <strong>Srinagar</strong>.. everywhere . When you travel what matter the most is time management and with this team its perfect 10 on 10. A day where <strong>Feroz </strong>bhai felt that <strong>Mushtaq</strong> will not be able to make it due to some family urgency , he himself drive us from 8 am in the morning to 8pm covering Gulmarg . So thats the professionalism you can expect and that's the reason ... its recommended service who soever wants to spend valuable time in exploring Kashmir , leaving commuting challenges to this team . All the <strong>Feroz</strong> Bhai , <strong>Mushtaq</strong> Bhai and a variety of Cars fleet with experienced drivers`,
  },
];

const testimonialContainer = document.querySelector('.review-cards-container');
reviews.forEach(review => {
  const reviewCard = document.createElement('div');
  reviewCard.className = 'swiper-slide reviews-slide';
  reviewCard.innerHTML = `

            <div class="reviewer-profile">
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
            <article class="review-text d-flex">
              <p >
              ${review.reviewText}
            </p>
            </article>
  `;
  testimonialContainer.appendChild(reviewCard);
});

let reviewsSwiper = new Swiper('.reviews-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.reviews-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
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
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const offerBtn = document.querySelector('.special-btn');
offerBtn.addEventListener('click', e => {
  const message = `Hi,I want to book the Special Gulmarg Offer!`;
  let whatsappUrl = `https://wa.me/917780938501?text=${message}`;
  window.open(whatsappUrl, '_blank').focus();
});
