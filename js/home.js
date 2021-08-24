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

function toggleBetweenSec(e, i, p) {
  e.addEventListener("click", () => {
    for (let j = 0; j < p.length; j++) {
      if (i == j) {
        p[i].classList.add("active");
      } else {
        p[j].classList.remove("active");
      }
    }
  });
}
