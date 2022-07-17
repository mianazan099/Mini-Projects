const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.querySelector(".progress");
const circleList = document.querySelectorAll(".circle");

let stepNum = 0;
let num = 0;

nextBtn.addEventListener("click", () => gotoStep("next", nextBtn, prevBtn));
prevBtn.addEventListener("click", () => gotoStep("prev", prevBtn, nextBtn));

function gotoStep(step, btnN, btnP) {
  if (step === "next") {
    num = 3;
    stepNum++;
    circleList[stepNum].classList.add("active");
  }
  if (step === "prev") {
    num = 0;
    stepNum--;
    circleList[stepNum + 1].classList.remove("active");
  }
  progress.style.width = `${33.335 * stepNum}%`;
  btnP.disabled = false;
  if (stepNum == num) {
    btnN.disabled = true;
  }
}
