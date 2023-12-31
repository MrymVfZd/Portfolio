//Set ColorMode
const icon = document.getElementById("iconSwitch");
const defaultTheme = localStorage.getItem("data-bs-theme");
document.addEventListener("DOMContentLoaded", (event) => {
  if (defaultTheme === "dark") {
    icon.classList.add("bi-moon-stars");
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else {
    icon.classList.add("bi-sun");
    document.documentElement.setAttribute("data-bs-theme", "light");
  }
});
// Set current year
const currentDate = new Date();
const currentYear = document.getElementById("year");
currentYear.innerHTML = currentDate.getFullYear();

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Read more Read Less
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myColormode() {
  const icon = document.getElementById("iconSwitch");
  if (defaultTheme === "dark" && icon.classList.contains("bi-moon-stars")) {
    icon.classList.remove("bi-moon-stars");
    icon.classList.add("bi-sun");
    document.documentElement.setAttribute("data-bs-theme", "light");
    localStorage.setItem("data-bs-theme", "light");
  } else {
    icon.classList.remove("bi-sun");
    icon.classList.add("bi-moon-stars");
    document.documentElement.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("data-bs-theme", "dark");
  }
}
