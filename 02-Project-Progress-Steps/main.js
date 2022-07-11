const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.querySelector(".progress");
const circleList = document.querySelectorAll(".circle");
let step = 0;
nextBtn.addEventListener("click", () => {
  if (step < 3) {
    progress.setAttribute("style", `width: ${33.33 * (step + 1)}%`);
    step++;
    circleList[step].classList.add("active");
    prevBtn.removeAttribute("disabled");
    if (step == 3) {
      nextBtn.setAttribute("disabled", true);
    }
  }
});
prevBtn.addEventListener("click", () => {
  if (step > 0) {
    progress.setAttribute("style", `width: ${33.33 * (step - 1)}%`);
    circleList[step].classList.remove("active");
    step--;
    nextBtn.removeAttribute("disabled");
  }
  if (step == 0) {
    prevBtn.setAttribute("disabled", true);
  }
});
