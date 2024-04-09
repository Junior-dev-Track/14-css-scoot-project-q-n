const header = document.querySelector('header');
let prevScrollPos = window.scrollY;

window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  // Scroll down
  if (prevScrollPos < currentScrollPos) {
    header.classList.add('header-hidden');
    header.classList.remove('header-visible');
  }
  // Scroll up
  else {
    header.classList.add('header-visible');
    header.classList.remove('header-hidden');
  }

  prevScrollPos = currentScrollPos;
};
