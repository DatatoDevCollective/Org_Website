const members = document.querySelectorAll(".member-content");
const html = document.querySelector("html");
console.log(members);
const outsideClick = (e, notElem) => {
  let clickedOut = true;
  notElem.forEach((elem) => {
    if (e.target === elem || elem.contains(e.target)) {
      clickedOut = false;
    }
  });
  return clickedOut;
};

/* Functions passed to addEventListener as callbacks need to be declared with
the function keyword if you want the this keyword to mean the element the
event was triggered on. If you use an arrow function then this will mean
the global object which in the case of a broser is the window. */
function toggleDescription(event) {
  if (
    event.type === "click" ||
    (event.type === "keydown" && event.keyCode === 13)
  ) {
    this.classList.toggle("active");
    document.querySelectorAll(".member-content.active").forEach((item_) => {
      if (item_ !== this) {
        item_.classList.toggle("active");
      }
    });
  }
  /* For removing keyboard focus from element when clicked to collapse.
  Otherwise :focus css remains active when collapsed after click */
  if (event.type === "click") {
    this.blur();
  }
}

members.forEach((item) => {
  item.addEventListener("click", toggleDescription);
  item.addEventListener("keydown", toggleDescription);
});

html.addEventListener("click", (e) => {
  if (outsideClick(e, members)) {
    members.forEach((item) => {
      item.classList.remove("active");
    });
  }
});
