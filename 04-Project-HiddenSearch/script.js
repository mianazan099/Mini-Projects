const button = document.querySelector(".icon");
const input = document.querySelector(".input");
input.focus();

button.addEventListener("click", () => {
  input.classList.toggle("active");
});
