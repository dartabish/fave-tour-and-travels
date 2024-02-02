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
      favHeight = 400;
    }
    if (scrollPosition > favHeight) {
      navbar.style.background = 'darkslategrey ';
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
  });
}

addNavBg();

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
function successCallback(position) {
  // Update the iframe source with the user's current location
  var iframe = document.getElementById('mapIframe');
  var sampleLatitude = 34.1331693;
  var sampleLongitude = 74.8806496;

  var newSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d' +
    sampleLongitude +
    '!3d' +
    sampleLatitude +
    '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp';

  iframe.src = newSrc;
}

function errorCallback(error) {
  console.error('Error getting location:', error.message);
}

function callPhoneNumber(phoneNumber) {
  window.location.href = 'tel:' + phoneNumber;
}

let form = document.getElementById('contact-form');
console.log(form);

document.getElementById('contact-form').addEventListener('submit', e => {
  event.preventDefault();

  var fullName = document.getElementById('full-name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  var whatsappMessage =
    'New Inquiry for Fave Tour And and Travels from:\n' +
    'Name: ' +
    fullName +
    '\n' +
    'Email: ' +
    email +
    '\n' +
    'Phone: ' +
    phone +
    '\n' +
    'Message: ' +
    message;

  // Construct WhatsApp link
  var whatsappLink =
    'https://wa.me/917780938501?text=' + encodeURIComponent(whatsappMessage);

  // Open WhatsApp link in a new tab
  window.open(whatsappLink, '_blank');
});

AOS.init({
  duration: 800,
  once: true,
  useClassNames: true,
  offset: 100,
  easing: 'ease-in',
});
