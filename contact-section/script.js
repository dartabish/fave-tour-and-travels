import { addNavBg } from '../script.js';

// Get the user's location using Geolocation API
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

function sendToWhatsApp() {
  // Get form data
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  var whatsappMessage =
    'New Inquiry from Tour and Travel Website\n\n' +
    'Name: ' +
    firstName +
    ' ' +
    lastName +
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
    'https://wa.me/919797231194?text=' + encodeURIComponent(whatsappMessage);

  // Open WhatsApp link in a new tab
  window.open(whatsappLink, '_blank');
}
