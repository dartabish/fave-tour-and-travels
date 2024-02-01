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

const tourPackages = [
  {
    id: 1,
    title: '2-Day Kashmir Package',
    img: '../assets/packages/package-1.jpg',
    details: {
      duration: {
        days: 2,
        nights: 1,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description:
            'Airport to Gulmarg to Srinagar | Night Stay at Srinagar Hotel',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Gift shopping and departure',
        },
      },
    },
  },
  {
    id: 2,
    title: '4-Day Kashmir Package',
    img: '../assets/packages/package-2.jpg',
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
            'Arrival and Srinagar city tour | Night Stay at Srinagar Hotel',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description:
            'Srinagar to Gulmarg to Srinagar | Night Stay at Srinagar Hotel',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description:
            'Srinagar to Pahalgam to Srinagar | Night Stay at Srinagar Hotel',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'Gift shopping and departure',
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
            'Arrival and Transfer to Hotel | Night Stay at Srinagar Hotel',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Srinagar City Tour | Night stay at Srinagar Hotel',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'Sonamarg Day Tour | Night Stay at Srinagar Hotel',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'Gulmarg Day Tour | Night Stay at Gulmarg Hotel',
        },
        day5: {
          id: 5,
          title: 'Day 5',
          description: 'Gulmarg to Srinagar| Night Stay at Srinagar Hotel',
        },
        day6: {
          id: 6,
          title: 'Day 6',
          description: 'Gift shopping and departure',
        },
      },
    },
  },
  {
    id: 4,
    title: '8-Day Kashmir Package',
    img: '../assets/packages/package-4.jpg',
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
            'Arrival and Transfer to Hotel | Night Stay at Srinagar Hotel',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Srinagar City Tour | Night stay at Srinagar Hotel',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'Srinagar to Sonamarg | Night Stay at Sonamarg Hotel',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'Sonamarg Stay  | Night Stay at Sonamarg Hotel',
        },
        day5: {
          id: 5,
          title: 'Day 5',
          description: 'Sonamarg to Gulmarg | Night Stay at Gulmarg  Hotel',
        },
        day6: {
          id: 6,
          title: 'Day 6',
          description: 'Gulmarg to Pahalgam| Night Stay at Pahalgam Hotel',
        },
        day7: {
          id: 7,
          title: 'Day 7',
          description: 'Pahalgam to Srinagar | Night Stay Srinagar Hotel',
        },
        day8: {
          id: 8,
          title: 'Day 8',
          description: 'Gift shopping and Departure',
        },
      },
    },
  },
  {
    id: 5,
    title: '5 Days Leh-Ladakh Package',
    img: '../assets/packages/package-5.jpeg',
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
    id: 6,
    title: '7 Days Leh-Ladakh Package',
    img: '../assets/packages/package-6.jpeg',
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
    id: 7,
    title: 'Gurez Valley Exploration',
    img: '../assets/packages/package-10.jpg',
    details: {
      duration: {
        days: 5,
        nights: 4,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description: ' Arrival in Gurez, check-in to hotel',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: ' Explore Dawar, Tulail Valley',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'Visit Habba Khatoon Peak, Sheikh Baba Behram Shah Shrine',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'Trek to Trunkhol Lake',
        },
        day5: {
          id: 5,
          title: 'Day 5',
          description: 'Departure',
        } 
      },
    },
  },
  {
    id: 8,
    title: ' Bangus Valley Adventure',
    img: '../assets/packages/package-9.jpg',
    details: {
      duration: {
        days: 2,
        nights: 1,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description: ' Arrival in Bangus Valley and night camping in green meadows',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Departure ',
        } 
      },
    },
  },
  {
    id: 9,
    title: ' Teetwal Cultural Experience',
    img: '../assets/packages/package-8.png',
    details: {
      duration: {
        days: 5,
        nights: 4,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description: '  Arrive in Teetwal, explore the village',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Visit Tithwal Fort, interact with locals',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'Trek to Tum Khan',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'Experience traditional Kashmiri cuisin',
        },
        day5: {
          id: 5,
          title: 'Day 5',
          description: 'Departure',
        },  
      },
    },
  },
  {
    id: 10,
    title: ' Karen Sector Discovery',
    img: 'https://flypakistan.pk/assets/img/blog/keran.jpg',
    details: {
      duration: {
        days: 5,
        nights: 4,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1',
          description: ' Arrive in Keran, check-in to hotel',
        },
        day2: {
          id: 2,
          title: 'Day 2',
          description: 'Explore Shalbatoo, enjoy river views',
        },
        day3: {
          id: 3,
          title: 'Day 3',
          description: 'Visit Kishan Ganga River, Nukus',
        },
        day4: {
          id: 4,
          title: 'Day 4',
          description: 'Trek to Habba Khatoon Peak',
        },
        day5: {
          id: 5,
          title: 'Day 5',
          description: 'Departure',
        },  
      },
    },
  },
];
const packageCardsContainer = document.querySelector('.package-card-container');
tourPackages.forEach(tourPackage => {
  const packageCard = document.createElement('div');
  packageCard.className = 'package-card';
  packageCard.id = tourPackage.id;
  packageCard.innerHTML = `
  
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
                <i class="fa-solid fa-cutlery"></i>
              </div>
            </li>
            <li>
              <div
                class="package-card-amenities-icon"
                title="3 & 4 Star Hotels"
              >
                <i class="fa-solid fa-hotel"></i>
              </div>
            </li>
            <li>
              <div class="package-card-amenities-icon" title="Transportation">
                <i class="fa-solid fa-cab"></i>
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
            class="package-card-booking ps-3 pe-3 d-flex justify-content-center"
          >
            <button class="book-package w-100" id="${tourPackage.id}">
              Book Now
            </button>
          </div>
        </div>
   
  `;
  packageCardsContainer.appendChild(packageCard);
});

const bookBtns = document.querySelectorAll('.book-package');
bookBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    let selectedPackage;
    switch (e.target.id) {
      case '1':
        selectedPackage = tourPackages[0].title;
        break;
      case '2':
        selectedPackage = tourPackages[1].title;
        break;
      case '3':
        selectedPackage = tourPackages[2].title;
        break;
      case '4':
        selectedPackage = tourPackages[3].title;
        break;
      case '5':
        selectedPackage = tourPackages[4].title;
        break;
    }

    let url = `https://wa.me/917780846177?text=Hi, I want to book the ${selectedPackage}`;
    window.open(url, '_blank').focus();
  });
});

AOS.init({
  duration: 800,
  once: true,
  useClassNames: true,
  offset: 100,
  easing: 'ease-in',
});
