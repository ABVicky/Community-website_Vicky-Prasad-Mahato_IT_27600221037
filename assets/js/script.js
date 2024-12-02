'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);

function toggleSearch() {
  const overlay = document.getElementById("search-box-overlay");
  overlay.style.display = overlay.style.display === "flex" ? "none" : "flex";
}


//Organizer.html
document.getElementById('Read More').addEventListener('click', function(event) {
  event.preventDefault(); 
  window.location.href = 'organizer.html'; 
});

//previous.html
document.getElementById('Read More').addEventListener('click', function(event) {
  event.preventDefault(); 
  window.location.href = 'previous.html'; 
});


// Syllabus

document.getElementById('Read More').addEventListener('click', function(event) {
  event.preventDefault(); 
  window.location.href = 'syllabus.html'; 
});

//notes
document.getElementById('Read More').addEventListener('click', function(event) {
  event.preventDefault(); 
  window.location.href = 'notes.html'; 
});