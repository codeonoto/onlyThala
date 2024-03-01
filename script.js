// Utility function to check if a string is numeric
function isNumeric(str) {
  return /^\d+$/.test(str);
}

// Function to handle both Thala and Gopi Bhau checking
function checkEvents() {
  // Get input snippet and initialize sum
  let snippet = document.getElementById('snippet').value.trim();
  let sum = 0;

  // Check if the input is an array of names
  let names = snippet.split(',').map((name) => name.trim().toLowerCase());

  // Define sets of allowed names for Thala and Gopi Bhau
  const allowedThalaNames = [
    'csk',
    'mahi',
    'dhoni',
    'drs',
    'ms',
    '2007',
    '2011',
    '2013',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2018',
  ];
  const allowedGopis = ['gopi', 'ahem'];

  // Check if any of the entered names match the allowed names for Thala
  if (names.some((name) => allowedThalaNames.includes(name))) {
    celebrateThala();
    return;
  }
  // Check if any of the entered names match the allowed names for Gopi Bhau
  else if (names.some((name) => allowedGopis.includes(name))) {
    celebrateGopiBhau();
    return;
  } else if (isNumeric(snippet)) {
    // If input is numeric, calculate the sum of digits
    let digits = Array.from(snippet, Number);
    sum = digits.reduce((a, b) => a + b, 0);
  } else {
    // If input is not numeric, set sum to the length of the snippet
    sum = snippet.length;
  }

  // Check if the sum is 7
  if (sum === 7) {
    // Celebrate Thala if the sum is 7
    celebrateThala();
  } else {
    // Display a message for not Thala or Gopi Bhau
    displayNotThalaOrGopiBhau();
  }
}

// Function to display Thala celebration
function celebrateThala() {
  let sound = document.getElementById('thalaAudio');
  sound.pause();
  sound.currentTime = 0;
  sound.play();
  confettiAnimation();
  Swal.fire({
    title: 'Thala For A Reason!',
    text: 'Thala For A Reason!',
    html: '<video autoplay muted loop class="text-center"><source src="./assets/correct.mp4" type="video/mp4"></video>',
    showCloseButton: true,
    focusConfirm: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'OK',
  });
}

// Function to display Gopi Bhau celebration
function celebrateGopiBhau() {
  let sound = document.getElementById('gopiAudio');
  sound.pause();
  sound.currentTime = 0;
  sound.play();
  confettiAnimation();
  Swal.fire({
    title: 'Gopi Bahu For A Reason!',
    text: 'Gopi Bahu For A Reason!',
    html: '<video autoplay muted loop class="text-center"><source src="./assets/gopi-bahu.mp4" type="video/mp4"></video>',
    showCloseButton: true,
    focusConfirm: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'OK',
  });
}

// Function to display message when not Thala or Gopi Bhau
function displayNotThalaOrGopiBhau() {
  Swal.fire({
    title: 'Not Thala For A Reason!',
    text: 'Not Thala For A Reason!',
    imageUrl: './assets/wrong.png',
    imageWidth: 400,
    imageHeight: 250,
    imageAlt: 'Not Thala',
  });
}

// Function for confetti animation
function confettiAnimation() {
  let duration = 5 * 1000;
  let animationEnd = Date.now() + duration;

  let interval = setInterval(function () {
    let timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
  }, 250);
}

// Run on page load
const urlParams = new URLSearchParams(window.location.search);
const entries = urlParams.entries();
const params = {};
for (entry of entries) {
  params[entry[0]] = entry[1];
}
if (params['s'] != undefined && params['s'] != '') {
  try {
    document.getElementById('snippet').value = atob(params['s']).trim();
  } catch (_) {
    // pass
  }
}
