// PRELOADER JS---------------------------------------------------------------------------
var loader = document.getElementById("preloader");

// Add an event listener for the "load" event
window.addEventListener("load", () => {
  // Use setTimeout to delay hiding the preloader for x seconds (xxxx milliseconds)
  setTimeout(() => {
    loader.style.display = "none";
  }, 5000);
});

/* <!--LIGHT MODE/DARK MODE CODE---------------------------------------------------------------------------------------------------- --> */

// Function to set the mode in local storage
function setModeInLocalStorage(mode) {
  localStorage.setItem("mode", mode);
}

// Function to retrieve the mode from local storage
function getModeFromLocalStorage() {
  return localStorage.getItem("mode");
}

// Function to initialize the mode based on local storage
function initializeMode() {
  const savedMode = getModeFromLocalStorage();

  if (savedMode === "light-mode") {
    // Apply light mode
    document.body.classList.add("light-mode");
  } else {
    // Apply dark mode (or the default mode if not found in local storage)
    document.body.classList.remove("light-mode");
  }
}

// Add event listeners and initialize the mode
document.querySelectorAll(".switch").forEach(function (element) {
  element.addEventListener("click", function () {
    // Toggle the "light-mode" class on the body element.
    document.body.classList.toggle("light-mode");

    // Save the current mode in local storage
    const currentMode = document.body.classList.contains("light-mode")
      ? "light-mode"
      : "dark-mode";
    setModeInLocalStorage(currentMode);

    // Check if the "light-mode" class is applied to the body.
    if (document.body.classList.contains("light-mode")) {
      // Change the name attribute to "ri-moon-line" for all elements with the class "switch".
      document.querySelectorAll(".switch").forEach(function (switchElement) {
        switchElement.setAttribute("name", "ri-palette-line");
      });
    } else {
      // Change the name attribute to "ri-sun-line" for all elements with the class "switch".
      document.querySelectorAll(".switch").forEach(function (switchElement) {
        switchElement.setAttribute("name", "ri-palette-fill");
      });
    }
  });
});

// Initialize the mode when the page loads
initializeMode();

/* <!--CARD SLIDING JS---------------------------------------------------------------------------------------------------- --> */
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

/* <!-- CUSTOMIZE CURSOR JS ---------------------------------------------------------------------------------------------------- --> */
new kursor({
  type: 1,
  removeDefaultCurser: true,
  color: "#00FFFF",
});
/* <!-- TYPING ANIMATION JS SECTION---------------------------------------------------------------------------------------------------- --> */

var typed = new Typed(".textline", {
  strings: ["Frontend Developer", "Web Developer", "UI/UX Designer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
/* <!-- ACTIVE NAVBAR LINK FOR ACCESSING PAGES---------------------------------------------------------------------------------------------------- --> */
const section = querySelectorAll("section");
const navLink = querySelectorAll("header nav a");
window.onscroll = () => {
  section.array.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offersetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /* <!-- STICKY BEHAVIOUR FOR NAVBAR---------------------------------------------------------------------------------------------------- --> */
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menubar.classList.remove("ri-close-line");
  navbar.classList.remove("active");
};
/* <!--BACKUP CODE FOR ACTIVE MENUBAR---------------------------------------------------------------------------------------------------- --> */
let menubar = classList.querySelector("#menu");
let navbar = classList.querySelector(".navbar");
menubar.onclick = () => {
  menubar.classList.toggle("ri-close-line");
  navbar.classList.toggle("active");
};
