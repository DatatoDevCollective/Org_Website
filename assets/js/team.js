document.querySelectorAll(".member-content").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    document.querySelectorAll(".member-content.active").forEach((item_) => {
      if (item_ !== item) {
        item_.classList.toggle("active");
      }
    });
  });
});
