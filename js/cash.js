var cashBtn = document.getElementById("cash-btn");
var homeFromCash = document.querySelector(".home-from-cash");
var cashSec = document.querySelector(".cash-section");

cashBtn.addEventListener("click", () => {
  activeSection(cashSec);
});

homeFromCash.addEventListener("click", () => {
  unactiveSection(cashSec);
});

toggleBetweenSec(homeFromCash, 0, homeFooter);
