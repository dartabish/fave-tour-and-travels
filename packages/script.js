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

const tourPackages = [
  {
    id: 1,
    title: '4-Day Kashmir Package',
    img: '../assets/packages/package-1.jpg',
    details: {
      duration: {
        days: 4,
        nights: 3,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description:
            'Airport Pick-up | Srinagar Sightseeing | Stay in Srinagar',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Srinagar-Pahalgam-Srinagar',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'Srinagar-Gulmarg-Srinagar',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'On-time transfer to Srinagar Airport',
        },
      },
    },
  },
  {
    id: 2,
    title: '5-Day Kashmir Package',
    img: '../assets/packages/package-2.jpg',
    details: {
      duration: {
        days: 5,
        nights: 4,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description:
            'Airport Pickup | Srinagar Sightseeing | Stay in Srinagar',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Srinagar-Pahalgam-Srinagar',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'Srinagar-Gulmarg-Srinagar',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'Srinagar-Sonamarg-Srinagar',
        },
        day5: {
          id: 5,
          title: 'Day 5',
          description: 'On-time transfer to Srinagar Airport',
        },
      },
    },
  },
  {
    id: 3,
    title: '6-Day Kashmir Package',
    img: '../assets/packages/package-3.jpg',
    details: {
      duration: {
        days: 6,
        nights: 5,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description:
            'Airport Pick-up | Srinagar Sightseeing | Stay in Srinagar',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Srinagar-Pahalgam | Stay in Pahalgam',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'Pahalgam-Gulmarg | Stay in Gulmarg',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'Gulmarg-Srinagar',
        },
        day5: {
          id: 5,
          title: 'Day 5',
          description: 'Srinagar Sightseeing | Stay in Srinagar',
        },
        day6: {
          id: 6,
          title: 'Day 6',
          description: 'On-time transfer to Srinagar Airport',
        },
      },
    },
  },
  {
    id: 4,
    title: '7-Day Kashmir Package',
    img: '../assets/packages/package-11.jpg',
    details: {
      duration: {
        days: 7,
        nights: 6,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description:
            'Airport Pick-up | Srinagar Sightseeing | Stay in Srinagar',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Srinagar-Pahalgam',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'In Pahalgam',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'Pahalgam-Gulmarg',
        },
        day5: {
          id: 5,
          title: 'Day 5',
          description: 'In Gulmarg',
        },
        day6: {
          id: 6,
          title: 'Day 6',
          description: 'Gulmarg-Srinagar',
        },
        day7: {
          id: 7,
          title: 'Day 7',
          description: 'On-time transfer to Srinagar Airport',
        },
      },
    },
  },
  {
    id: 5,
    title: '8-Day Kashmir Package',
    img: '../assets/packages/package-5.jpg',
    details: {
      duration: {
        days: 8,
        nights: 7,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description:
            'Airport Pick-up | Srinagar Sightseeing | Stay in Srinagar',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Srinagar-Sonamarg-Srinagar',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'Srinagar-Pahalgam',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'In Pahalgam',
        },
        day5: {
          id: 5,
          title: 'Day 5',
          description: 'Pahalgam-Gulmarg',
        },
        day6: {
          id: 6,
          title: 'Day 6',
          description: 'In Gulmarg',
        },
        day7: {
          id: 7,
          title: 'Day 7',
          description: 'Gulmarg-Srinagar',
        },
        day8: {
          id: 8,
          title: 'Day 8',
          description: 'On-time transfer to Srinagar Airport',
        },
      },
    },
  },
  {
    id: 6,
    title: '5-Day Leh-Ladakh Package',
    img: '../assets/packages/package-6.jpg',
    details: {
      duration: {
        days: 5,
        nights: 4,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description: 'Departure from Srinagar to Kargil',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Kargil to Leh',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'Leh Sightseeing',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'Day trip to Pangong Lake',
        },
        day5: {
          id: 5,
          title: 'Day 5',
          description: 'Return from Leh to Srinagar',
        },
      },
    },
  },
  {
    id: 7,
    title: `7-Day Leh-Ladakh Package`,
    img: '../assets/packages/package-7.jpg',
    details: {
      duration: {
        days: 7,
        nights: 6,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description: 'Departure from Srinagar',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Drass/Kargil to Leh',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'Leh Local Sightseeing',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'Leh to Nubra Valley via Khardung La',
        },
        day5: {
          id: 5,
          title: 'Day 5',
          description: ' Nubra Valley to Pangong Tso',
        },
        day6: {
          id: 6,
          title: 'Day 6',
          description: 'Pangong Tso to Leh',
        },
        day7: {
          id: 7,
          title: 'Day 7',
          description: ' Return to Srinagar',
        },
      },
    },
  },
  {
    id: 8,
    title: 'Gurez Valley Exploration Package',
    img: '../assets/packages/package-10.png',
    details: {
      duration: {
        days: 6,
        nights: 5,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description:
            ' Airport Pick-up | Srinagar Sightseeing | Stay in Srinagar',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Srinagar to Gurez | Stay in Gurez',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'Gurez local sightseeing',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'Gurez to Tulail | Return to Gurez',
        },
        day5: {
          id: 5,
          title: 'Day 5',
          description: 'Gurez to Srinagar | Stay in Srinagar',
        },
        day6: {
          id: 6,
          title: 'Day 6',
          description: 'On-time transfer to Srinagar Airport',
        },
      },
    },
  },
  {
    id: 9,
    title: 'Customized Package',
    img: '../assets/packages/custom-package.jpeg',
    details: {
      duration: {
        days: 6,
        nights: 5,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description:
            ' Airport Pick-up | Srinagar Sightseeing | Stay in Srinagar',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Srinagar  to Gurez | Stay in Gurez',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'Gurez local Sightseeing',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'Gurez to Tulail | Return to Gurez',
        },
        day5: {
          id: 5,
          title: 'Day 5',
          description: 'Gurez to Srinagar | Stay in Srinagar',
        },
        day6: {
          id: 6,
          title: 'Day 6',
          description: 'On-time transfer to Srinagar Airport',
        },
      },
    },
  },
];

const packageCardsContainer = document.querySelector('.package-card-container');
tourPackages.forEach(tourPackage => {
  const packageCard = document.createElement('article');
  packageCard.className = 'package-card';
  packageCard.id = tourPackage.id;

  let innerHTMLContent;
  if (tourPackage.id === 9) {
    packageCard.className = 'package-card custom-package-card align-self-start';
    innerHTMLContent = `
        <div class="package-card-banner">
          <img src="${tourPackage.img}" alt="${tourPackage.title}" />
        </div>
        <div class="custom-package-details p-3">
            <h4 class="">${tourPackage.title}</h4>
        </div>
        <ul
            class="package-card-amenities d-flex justify-content-around pt-2 pb-2"
          >
            <li>
              <div class="package-card-amenities-icon" title="Meals">
                <i class="fa-solid fa-cutlery" aria-label="Meals"></i>
              </div>
            </li>
            <li>
              <div
                class="package-card-amenities-icon"
                title="3 & 4 Star Hotels"
              >
                <i class="fa-solid fa-hotel" aria-label="3 & 4 Star Hotels"></i>
              </div>
            </li>
            <li>
              <div class="package-card-amenities-icon" title="Transportation">
                <i class="fa-solid fa-cab"  aria-label="Cabs/Transportation"></i>
              </div>
            </li>
          </ul>
          <div
            class="package-card-booking ps-3 pe-3 pt-3 d-flex justify-content-center"
          >
            <button class="book-package w-100" id="book-button-${tourPackage.id}">
              Book Now
            </button>
          </div>
    `;
  } else {
    innerHTMLContent = `
        <div class="package-card-banner">
          <img src="${tourPackage.img}" alt="${tourPackage.title}" />
        </div>

        <div
          class="package-card-details d-flex flex-column justify-content-between pb-2"
        >
          <div
            class="package-card-header d-flex justify-content-between align-items-center p-3"
          >
            <h5 class="package-card-title">${tourPackage.title}</h5>
            <div class="duration d-flex gap-3">
              <h6 class="days d-flex flex-column align-items-center">
                <span>${tourPackage.details.duration.days}</span>
                <span>Days</span>
              </h6>
              <h6 class="nights d-flex flex-column align-items-center">
                <span>${tourPackage.details.duration.nights}</span>
                <span>Nights</span>
              </h6>
            </div>
          </div>
          
          <ul
            class="package-card-amenities d-flex justify-content-around pt-2 pb-2"
          >
            <li>
              <div class="package-card-amenities-icon" title="Meals">
                <i class="fa-solid fa-cutlery" aria-label="Meals"></i>
              </div>
            </li>
            <li>
              <div
                class="package-card-amenities-icon"
                title="3 & 4 Star Hotels"
              >
                <i class="fa-solid fa-hotel" aria-label="3 & 4 Star Hotels"></i>
              </div>
            </li>
            <li>
              <div class="package-card-amenities-icon" title="Transportation">
                <i class="fa-solid fa-cab"  aria-label="Cabs/Transportation"></i>
              </div>
            </li>
          </ul>

          <div class="itenary">
            <div
              class="accordion accordion-flush itenary-accordian"
              id="accordian-${tourPackage.id}"
            >
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#itenary-${tourPackage.id}"
                    aria-expanded="false"
                    aria-controls="itenary-${tourPackage.id}"
                  >
                    <h5 class="">Itenary</h5>
                  </button>
                </h2>
                <div
                  id="itenary-${tourPackage.id}"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordian-${tourPackage.id}"
                >
                  <div class="accordion-body">
                    <ul class="itenary">
                      ${Object.keys(tourPackage.details.tourPlan)
                        .map(
                          day => `
                      <li>
                        ${tourPackage.details.tourPlan[day].title} :
                        ${tourPackage.details.tourPlan[day].description}
                      </li>
                      `
                        )
                        .join('')}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="package-card-booking ps-3 pe-3 pb-2 d-flex justify-content-center"
          >
            <button class="book-package w-100" id="book-button-${
              tourPackage.id
            }">
              Book Now
            </button>
          </div>
        </div>
   
  `;
  }
  packageCard.innerHTML = innerHTMLContent;
  packageCardsContainer.appendChild(packageCard);
});

const bookBtns = document.querySelectorAll('.book-package');
bookBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    let selectedPackage;
    console.log(e.target.id);
    switch (e.target.id) {
      case 'book-button-1':
        selectedPackage = tourPackages[0].title;
        break;
      case 'book-button-2':
        selectedPackage = tourPackages[1].title;
        break;
      case 'book-button-3':
        selectedPackage = tourPackages[2].title;
        break;
      case 'book-button-4':
        selectedPackage = tourPackages[3].title;
        break;
      case 'book-button-5':
        selectedPackage = tourPackages[4].title;
        break;
      case 'book-button-6':
        selectedPackage = tourPackages[5].title;
        break;
      case 'book-button-7':
        selectedPackage = tourPackages[6].title;
        break;
      case 'book-button-8':
        selectedPackage = tourPackages[7].title;
        break;
      case 'book-button-9':
        selectedPackage = tourPackages[8].title;
        break;
    }

    let url = `https://wa.me/917780938501?text=Hi, I want to book the ${selectedPackage}`;
    window.open(url, '_blank').focus();
  });
});

AOS.init({
  duration: 600,
  offset: 100,
  easing: 'ease-in',
});
