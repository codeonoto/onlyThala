function checkThala() {
  let snippet = document.getElementById('snippet').value.trim();
  let sum = 0;
  if (is_numeric(snippet)) {
    let digits = [];
    for (var i of String(snippet)) {
      digits.push(Number(i));
    }
    sum = digits.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
    }, 0);
  } else {
    sum = snippet.length;
  }
  if (sum == 7) {
    var sound = document.getElementsByTagName('audio')[0];
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
  } else {
    Swal.fire({
      title: 'Not Thala For A Reason!',
      text: 'Not Thala For A Reason!',
      imageUrl: './assets/wrong.png',
      imageWidth: 400,
      imageHeight: 250,
      imageAlt: 'Not Thala',
    });
  }
}

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

function is_numeric(str) {
  return /^\d+$/.test(str);
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
