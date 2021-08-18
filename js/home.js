var homeSection = document.querySelector(".home");
var helpBtn = document.querySelector(".second-home-header");

var ttlDbtCus = document.getElementById("total-debt-for-customer");
var ttlDbtMe = document.getElementById("total-debt-for-me");

helpBtn.addEventListener("click", () => {
  activeSection(helpSection);
});
