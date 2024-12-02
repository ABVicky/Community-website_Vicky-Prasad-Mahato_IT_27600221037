
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




//Picking Organizer
// Get dropdown elements
const departmentDropdown = document.getElementById("department");
const semesterDropdown = document.getElementById("semester");

// Function to update section visibility
function updateSectionVisibility() {
  const selectedDepartment = departmentDropdown.value.toLowerCase(); // Match ID format
  const selectedSemester = semesterDropdown.value;

  // Hide all sections initially
  document.querySelectorAll(".department-section").forEach(section => {
    section.style.display = "none";
  });

  // Only show the section matching both department and semester if it exists
  if (selectedDepartment && selectedSemester) {
    const sectionId = `${selectedDepartment}-sem${selectedSemester}`;
    const sectionToShow = document.getElementById(sectionId);

    // Show only if the section exists for the combination
    if (sectionToShow) {
      sectionToShow.style.display = "block";
    }
  }
}

// Add event listeners to both dropdowns
departmentDropdown.addEventListener("change", updateSectionVisibility);
semesterDropdown.addEventListener("change", updateSectionVisibility);

// Initial call to handle pre-selected dropdown values
updateSectionVisibility();
