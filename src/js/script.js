// simplyCountdown
simplyCountdown('.simply-countdown-losange', {
  year: 2024, // required
  month: 4, // required
  day: 13, // required
  hours: 8, // Default is 0 [0-23] integer
  words: { //words displayed into the countdown
    days: { singular: 'hari', plural: 'hari' },
    hours: { singular: 'jam', plural: 'jam' },
    minutes: { singular: 'menit', plural: 'menit' },
    seconds: { singular: 'detik', plural: 'detik' }
  },
});

// get data inside params
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama') || '';
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';

const namaContainer = document.querySelector('.hero h4 span');
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ',');

// disable scroll
const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
let isPlaying = false;

function disableScroll() {
  scrollTop = window.scrollY || document.documentElement.scrollTop;
  scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  window.onscroll = function() {
    window.scrollTo(scrollTop, scrollLeft);
  }

  rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
  window.onscroll = function() { }
  rootElement.style.scrollBehavior = 'smooth';
  playAudio();
  isPlaying = true;
}

const bgm = document.querySelector('#bgm');
const audioIcon = document.querySelector('.audio-icon-wrapper i');

function playAudio() {
  bgm.play();
  audioIconWrapper.style.display = 'flex';
}

audioIconWrapper.onclick = function() {
  if(isPlaying) {
    bgm.pause();
    audioIcon.classList.remove('bi-play-circle');
    audioIcon.classList.add('bi-pause-circle');
  } else {
    bgm.play();
    audioIcon.classList.add('bi-play-circle');
    audioIcon.classList.remove('bi-pause-circle');
  }

  isPlaying = !isPlaying;
}

disableScroll();

// navbaroffcanvas
const stickyTop = document.querySelector('.sticky-top');
const offCanvas = document.querySelector('.offcanvas');

offCanvas.addEventListener('show.bs.offcanvas', () => {
  stickyTop.style.overflow = 'visible';
})
offCanvas.addEventListener('hidden.bs.offcanvas', () => {
  stickyTop.style.overflow = 'hidden';
})

// google sheets data input
window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Terimakasih atas konfirmasinya :)");
    })
  });
});

// comment
document.querySelector('#nama').value = nama;