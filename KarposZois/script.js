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
