const button = document.querySelector(".icon");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  input.classList.toggle("active");
});
