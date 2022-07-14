const contentList = document.querySelectorAll(".content");

contentList.forEach((content) => {
  content.classList.add("show");
  console.log(content.innerHTML.substring(8, 10));
});
