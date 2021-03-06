// Select element function
const selectElement = function (element) {
  return document.querySelector(element);
};

// Variables
const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');
const navLinks = document.querySelectorAll('.nav-link');

// Event listener to add the open css class to the body element
menuToggler.addEventListener('click', function () {
  body.classList.toggle('open');
});

// Function: Close menu when clicking an element
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', function() {
      // Check if menu is open
    if (document.body.classList.contains('open')) {
      body.classList.toggle('open');
    } 
  });
});

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1100,
  distance: '25rem',
  delay: 300,
});

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1100,
  distance: '25rem',
  delay: 300,
});

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1100,
  distance: '25rem',
  delay: 300,
});

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1100,
  distance: '25rem',
  delay: 300,
});
