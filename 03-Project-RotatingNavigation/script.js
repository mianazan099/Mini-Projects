const iconOpen = document.querySelector(".icon_open");
const iconClose = document.querySelector(".icon_close");
const body = document.querySelector(".body");
iconOpen.addEventListener("click", () => body.classList.add("open-nav"));
iconClose.addEventListener("click", () => body.classList.remove("open-nav"));
