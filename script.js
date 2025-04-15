const burgerMenuBtn = document.getElementById("burger-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const menuContainer = document.getElementById("menu-container");

// Open the menu
burgerMenuBtn.addEventListener("click", () => {
  menuContainer.classList.add("show");
  burgerMenuBtn.querySelector(".animated-icon2").classList.add("open");
});

// Close the menu
const closeMenu = () => {
  menuContainer.classList.remove("show");
  burgerMenuBtn.querySelector(".animated-icon2").classList.remove("open");
};

closeMenuBtn.addEventListener("click", closeMenu);

// Close the menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideMenu = menuContainer.contains(event.target);
  const isClickOnBurger = burgerMenuBtn.contains(event.target);
  if (!isClickInsideMenu && !isClickOnBurger) {
    closeMenu();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('.about-us');

  if (!aboutSection) {
    console.error("The '.about-us' section was not found in the DOM.");
    return;
  }

  // Add 'inactive' class to ensure animations trigger correctly
  aboutSection.classList.add('inactive');

  // Intersection Observer for scroll-triggered animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add('inView');
          aboutSection.classList.remove('inactive');
        } else {
          aboutSection.classList.remove('inView');
          aboutSection.classList.add('inactive');
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the section is visible
  );

  observer.observe(aboutSection);
});
// document.addEventListener("DOMContentLoaded", function() {
//   const productsSection = document.getElementById("products");
//   const firstHotspot = document.querySelector(".hotspot"); // selects the first hotspot in the section
  
//   if (!productsSection || !firstHotspot) {
//     console.error("Either the products section or a hotspot could not be found.");
//     return;
//   }
  
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Add preview class to only the first hotspot
//         firstHotspot.classList.add("preview");
//         // Remove the preview class after 4 seconds
//         setTimeout(() => {
//           firstHotspot.classList.remove("preview");
//         }, 4000);
        
//         // Disconnect if you only need this action once
//         observer.disconnect();
//       }
//     });
//   }, { threshold: 0.1 });
  
//   observer.observe(productsSection);
// });

