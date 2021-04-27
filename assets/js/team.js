const members = document.querySelectorAll(".member-content");
const html = document.querySelector("html");

const outsideClick = (e, notElem) => {
  let clickedOut = true;
  notElem.forEach((elem) => {
    if (e.target === elem || elem.contains(e.target)) {
      clickedOut = false;
    }
  })
  return clickedOut;
}

members.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    document.querySelectorAll(".member-content.active").forEach((item_) => {
      if (item_ !== item) {
        item_.classList.toggle("active");
      }
    });
  });
});

html.addEventListener("click", (e) => {
  if (outsideClick(e, members)) {
    members.forEach((item) => {
      item.classList.remove("active");
    })
  }
});
