`use strict`;

// header movements
const header = document.querySelector("header");
const main = document.querySelector("main");
let prevScrollPos = window.scrollY;

window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  // Scroll down
  if (prevScrollPos < currentScrollPos) {
    header.classList.add("header-hidden");
    header.classList.remove("header-visible");
  }
  // Scroll up
  else {
    header.classList.add("header-visible");
    header.classList.remove("header-hidden");
  }

  prevScrollPos = currentScrollPos;
};

//Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
