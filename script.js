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
  const allowedGopis = ['gopi', 'laptop'];
  const naughtyGopis = ['ahem', 'ahemji', 'love', 'pyaar'];
  const savageGopis = ['kokila', 'kokila modi', 'rashi'];

  // Check if any of the entered names match the allowed names for Thala
  if (names.some((name) => allowedThalaNames.includes(name))) {
    celebrateThala();
    return;
  }
  // Gopi Bhauu
  else if (names.some((name) => allowedGopis.includes(name))) {
    celebrateGopiBhau();
    return;
  }
  // Naughty Gopi Bhauu
  else if (names.some((name) => naughtyGopis.includes(name))) {
    let sound = document.getElementById('gopiNaughty');
    sound.pause();
    sound.currentTime = 0;
    sound.play();
    confettiAnimation();
    Swal.fire({
      title: 'Naughty Gopi Bahu For A Reason!',
      text: 'Naughty Gopi Bahu For A Reason!',
      html: '<video autoplay muted loop class="text-center"><source src="./assets/gopiLove.mp4" type="video/mp4"></video>',
      showCloseButton: true,
      focusConfirm: true,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'OK',
      onClose: () => {
        sound.pause();
      },
    }).then((result) => {
      if (result.isConfirmed) {
        sound.pause();
      }
    });
    return;
  }
  // Savage Gopi Bhauu
  else if (names.some((name) => savageGopis.includes(name))) {
    let sound = document.getElementById('kokila');
    sound.pause();
    sound.currentTime = 0;
    sound.play();
    confettiAnimation();
    Swal.fire({
      title: 'Chup Kar Kokila Modi Bhen Ki L...',
      text: 'Chup Kar Kokila Modi Bhen Ki L...',
      html: '<video autoplay muted loop class="text-center"><source src="./assets/savageGopi.mp4" type="video/mp4"></video>',
      showCloseButton: true,
      focusConfirm: true,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'OK',
      onClose: () => {
        sound.pause();
      },
    }).then((result) => {
      if (result.isConfirmed) {
        sound.pause();
      }
    });
    return;
  } else if (isNumeric(snippet)) {
    let digits = Array.from(snippet, Number);
    sum = digits.reduce((a, b) => a + b, 0);
  } else {
    sum = snippet.length;
  }

  // Check if the sum is 7
  if (sum === 7) {
    celebrateThala();
  } else {
    faltuEvents();
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
    onClose: () => {
      sound.pause();
    },
  }).then((result) => {
    if (result.isConfirmed) {
      sound.pause();
    }
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
    onClose: () => {
      sound.pause();
    },
  }).then((result) => {
    if (result.isConfirmed) {
      sound.pause();
    }
  });
}

// Function to display message when not Thala or Gopi Bhau
function faltuEvents() {
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
