const carsContainer = document.querySelector('.cars-container');
const carCollection = [
  {
    id: 'car-1',
    name: 'Toyota Glanza',
    seats: 4,
    baggage: 3,
    image: '../assets/cab-service/glanza.png',
  },
  {
    id: 'car-2',
    name: 'Honda Amaze',
    seats: 4,
    baggage: 3,
    image: '../assets/cab-service/amaze.png',
  },
  {
    id: 'car-3',
    name: 'Maruti Swift DZire',
    seats: 4,
    baggage: 3,
    image: '../assets/cab-service/dzire.png',
  },
  {
    id: 'car-4',
    name: 'Toyota Etios',
    seats: 4,
    baggage: 3,
    image: '../assets/cab-service/etios.png',
  },
  {
    id: 'car-5',
    name: 'Toyota Innova ',
    seats: 6,
    baggage: 5,
    image: '../assets/cab-service/innova.png',
  },
  {
    id: 'car-6',
    name: 'Toyota Crysta Luxury',
    seats: 6,
    baggage: 5,
    image: '../assets/cab-service/crysta.png',
  },
  {
    id: 'car-7',
    name: 'Maruti Suzuki Ertiga',
    seats: 6,
    baggage: 4,
    image: '../assets/cab-service/ertiga.png',
  },
  {
    id: 'car-8',
    name: 'Chevrolet Tavera',
    seats: 8,
    baggage: 6,
    image: '../assets/cab-service/chevrolet-tavera.png',
  },
  {
    id: 'car-9',
    name: 'Tempo Traveller 12',
    seats: 12,
    baggage: 8,
    image: '../assets/cab-service/tempo12.png',
  },
  {
    id: 'car-10',
    name: 'Tempo Traveller 17',
    seats: 17,
    baggage: 15,
    image: '../assets/cab-service/tempo-17.png',
  },
  {
    id: 'car-11',
    name: 'Tempo Traveller 25',
    seats: 25,
    baggage: 15,
    image: '../assets/cab-service/tempo.png',
  },
  {
    id: 'car-12',
    name: 'Urbania',
    seats: 17,
    baggage: 12,
    image: '../assets/cab-service/urbania.png',
  },
];

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

// Rendering car cards
carCollection.forEach(car => {
  let card = document.createElement('div');
  card.className = 'car-card';

  let cardContent = `
        <div class="car-img-container">
            <img src="${car.image}" alt="${car.name} Image"/>
        </div>
        <h3 class="car-title">${car.name}</h3>
        <div class="car-details d-flex align-items-center justify-content-between">
            <div>
                <span class="car-capacity">
                    <i class="fa-solid fa-user "></i>
                    Seats: ${car.seats}
                </span>
                <span class="car-baggage">
                    <i class="fa-solid fa-suitcase-rolling"></i>
                    Baggage: ${car.baggage}
                </span>
            </div>
            <button type="button" class="book btn" data-bs-toggle="modal" data-bs-target="#exampleModal${car.id}">
                Book Now
            </button>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal${car.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content p-4">
                    <div class="d-flex justify-content-between">
                        <h4>Your Booking Details</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <hr>
                    <div class="booking-details"></div>
                    <form id="bookingForm${car.id}" class="booking-form" data-car-id="${car.id}"  method="POST">
                        <div class="form-floating mb-2">
                            <input
                                disabled
                                value="${car.name}"
                                type="text"
                                name="Selected car"
                                class="form-control"
                                id="floatingCar${car.id}"
                                placeholder="Selected car"
                                required
                            />
                            <label for="floatingCar${car.id}">Selected Car</label>
                        </div>
                        <div class="form-floating mb-2">
                            <select class="form-select" id="floatingSector${car.id}">
                                <option selected value="Srinagar">Srinagar</option>
                                <option>Jammu</option>
                                <option>Ladakh</option>
                            </select>
                            <label for="floatingSector${car.id}">Sector</label>
                        </div>
                        <div class="row ps-2 pe-2">
                              <div class="form-floating mb-2 col p-1">
                                <input
                                    type="date"
                                    name="Start Date"
                                    class="form-control"
                                    id="floatingStartDate${car.id}"
                                    placeholder="Date of Arrival" 
                                    />
                               <label for="floatingStartDate${car.id}">Date of Arrival</label>
                              </div>
                              <div class="form-floating mb-2 col p-1">
                                  <input
                                    type="date"
                                    name="End Date"
                                    class="form-control"
                                    id="floatingEndDate${car.id}"
                                    placeholder="Date of Departure" 
                                    />
                               <label for="floatingEndDate${car.id}">Date of Departure</label>
                              </div>
                        </div>
                        <div class="form-floating mb-2">
                            <input
                                type="text"
                                name="Full Name"
                                class="form-control"
                                id="floatingFullName${car.id}"
                                placeholder="Full Name"
                                required
                            />
                            <label for="floatingFullName${car.id}">Full Name</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input
                                type="tel"
                                name="Phone"
                                class="form-control"
                                id="floatingPhone${car.id}"
                                placeholder="Phone"
                                required
                            />
                            <label for="floatingPhone${car.id}">Phone</label>
                        </div>
                                <div class="form-floating mb-2">
                                    <input
                                        type="email"
                                        name="Email"
                                        class="form-control"
                                        id="floatingEmail${car.id}"
                                        placeholder="Email" 
                                    />
                                    <label for="floatingEmail${car.id}">Email (Optional)</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <textarea
                                        class="form-control"
                                        name="Message"
                                        id="floatingMessage${car.id}"
                                        placeholder="Message"
                                        style="height: 160px"
                                    ></textarea>
                                    <label for="floatingMessage${car.id}">Additional Instructions</label>
                                </div>
                                <button id="submitForm${car.id}" type="submit" class="send-enquiry mt-2 w-100">Send Enquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            `;

  card.innerHTML = cardContent;
  carsContainer.appendChild(card);
});

// Event listener for form submissions
carsContainer.addEventListener('submit', function (event) {
  if (event.target.classList.contains('booking-form')) {
    event.preventDefault();

    // Extract form data
    let carId = event.target.getAttribute('data-car-id');
    let formData = {
      vehicle: event.target.querySelector(`#floatingCar${carId}`).value,
      sector: event.target.querySelector(`#floatingSector${carId}`).value,
      fullName: event.target.querySelector(`#floatingFullName${carId}`).value,
      phone: event.target.querySelector(`#floatingPhone${carId}`).value,
      startDate: event.target.querySelector(`#floatingStartDate${carId}`).value,
      endDate: event.target.querySelector(`#floatingEndDate${carId}`).value,
      email: event.target.querySelector(`#floatingEmail${carId}`).value,
      message: event.target.querySelector(`#floatingMessage${carId}`).value,
    };

    let whatsappMessage =
      `Selected Vehicle: ${encodeURIComponent(formData.vehicle)}%0a` +
      `Sector: ${encodeURIComponent(formData.sector)}%0a` +
      `Full Name: ${encodeURIComponent(formData.fullName)}%0a` +
      `Phone: ${encodeURIComponent(formData.phone)}%0a` +
      `Date of Arrival: ${encodeURIComponent(formData.startDate)}%0a` +
      `Date of Departure: ${encodeURIComponent(formData.endDate)}%0a` +
      `Email: ${encodeURIComponent(formData.email)}%0a` +
      `Additional Instructions: ${encodeURIComponent(formData.message)}`;

    let whatsappUrl = `https://wa.me/919797231194?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank').focus();
  }
});

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-in',
});
