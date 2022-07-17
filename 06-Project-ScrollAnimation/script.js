const contentList = document.querySelectorAll(".content");

window.addEventListener("scroll", showContent);

showContent();

function showContent() {
  const windowHeight = (window.innerHeight / 5) * 4;

  contentList.forEach((element) => {
    const topPos = element.getBoundingClientRect().top;

    if (topPos < windowHeight) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
}
