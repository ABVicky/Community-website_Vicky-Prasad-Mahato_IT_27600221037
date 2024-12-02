
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




// Get the department dropdown element
const departmentDropdown = document.getElementById("department");

// Function to update section visibility and content based on department selection
function updateSectionVisibility() {
  const selectedDepartment = departmentDropdown.value.toLowerCase(); // Get the selected department

  // Hide all sections initially
  document.querySelectorAll(".department-section").forEach(section => {
    section.style.display = "none";
  });

  // If a department is selected, show the relevant section and update boxes
  if (selectedDepartment) {
    const sectionId = `${selectedDepartment}-sem1`; // ID format to match selected department
    const sectionToShow = document.getElementById(sectionId);
    
    if (sectionToShow) {
      sectionToShow.style.display = "block";

      // Update the department name in each semester box
      const departmentName = departmentDropdown.options[departmentDropdown.selectedIndex].text;

      sectionToShow.querySelectorAll(".boxes").forEach((box, index) => {
        box.querySelector("h3").textContent = departmentName; // Update department name
        box.querySelector("h5").textContent = `Semester ${index + 1}`; // Update semester
      });
    }
  }
}

// Add event listener to the department dropdown
departmentDropdown.addEventListener("change", updateSectionVisibility);

// Initial call to handle pre-selected department dropdown value
updateSectionVisibility();



