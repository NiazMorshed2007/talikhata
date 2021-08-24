var homeSection = document.querySelector(".home");
var helpBtn = document.querySelector(".second-home-header");
var homeFooter = document.querySelectorAll(".home-footer > div");
var InboxBtn = document.querySelector(".inbox");
var homeBtn = document.querySelector(".tali");

helpBtn.addEventListener("click", () => {
  activeSection(helpSection);
});

homeFooter.forEach((e, i) => {
  toggleBetweenSec(e, i, homeFooter);
});
