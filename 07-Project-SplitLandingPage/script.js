const body = document.querySelector(".body");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseover", () => {
  body.classList.add("hover-left");
});
left.addEventListener("mouseleave", () => {
  body.classList.remove("hover-left");
});

right.addEventListener("mouseover", () => {
  body.classList.add("hover-right");
});
right.addEventListener("mouseleave", () => {
  body.classList.remove("hover-right");
});
