//! custom js ..........

const navMenuIcon = document.getElementById("nav-menu-icon");
const navMenu = document.getElementById("nav-menu");

navMenuIcon.addEventListener("click", () => {
  if (navMenu.className === "hidden") {
    navMenu.classList.remove("hidden");
  } else {
    navMenu.classList.add("hidden");
  }
});
