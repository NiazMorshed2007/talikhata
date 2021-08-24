var cashBtn = document.getElementById("cash-btn");
var homeFromCash = document.querySelector(".home-from-cash");
var cashSec = document.querySelector(".cash-section");
var cashSecCategoryWrapper = document.querySelectorAll(
  ".cash-sec-inner-main1 > div"
);

console.log(cashSecCategoryWrapper);

cashBtn.addEventListener("click", () => {
  activeSection(cashSec);
});

homeFromCash.addEventListener("click", () => {
  unactiveSection(cashSec);
});

toggleBetweenSec(homeFromCash, 0, homeFooter);
//inner cash sec toggle sec
cashSecCategoryWrapper.forEach((e, i) => {
  toggleBetweenSec(e, i, cashSecCategoryWrapper);
});
