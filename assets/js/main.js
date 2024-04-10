`use strict`;

// header movements
const header = document.querySelector('header');
const main = document.querySelector('main');
let prevScrollPos = window.scrollY;

window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  // Scroll down
  if (prevScrollPos < currentScrollPos) {
    header.classList.add('header-hidden');
    header.classList.remove('header-visible');
    // main.classList.remove('paddingMain');
  }
  // Scroll up
  else {
    header.classList.add('header-visible');
    header.classList.remove('header-hidden');
    // main.classList.add('paddingMain');
  }

  prevScrollPos = currentScrollPos;
};
