const cardList = document.querySelectorAll(".card");
cardList.forEach((element) => {
  element.addEventListener("click", () => {
    cardList.forEach((element) => {
      element.classList.remove("active");
    });
    element.classList.add("active");
  });
});
