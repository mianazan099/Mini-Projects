const iconOpen = document.querySelector(".icon_open");
const iconClose = document.querySelector(".icon_close");
const menuBtn = document.querySelector(".menu-btn");
const container = document.querySelector(".container");
const navbar = document.querySelector(".navbar");
iconOpen.addEventListener("click", () => {
  menuBtn.classList.add("nav-open");
  container.classList.add("nav-open_body");
  navbar.classList.add("show-nav");
});
iconClose.addEventListener("click", () => {
  menuBtn.classList.remove("nav-open");
  container.classList.remove("nav-open_body");
  navbar.classList.remove("show-nav");
});
