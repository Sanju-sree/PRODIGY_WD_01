// script.js

// Add event listener to window for scroll event
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  
  // Toggle the "scrolled" class based on scroll position
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
