const bg = document.querySelector(".bg");
const number = document.querySelector(".number");
let num = 0;

let int = setInterval(() => {
  num++;
  bg.style.filter = `blur(${scale(num, 0, 100, 30, 0)}px)`;
  number.style.opacity = scale(num, 0, 100, 1, 0);
  number.textContent = `${num}%`;
  if (num > 99) {
    clearInterval(int);
  }
}, 30);

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
