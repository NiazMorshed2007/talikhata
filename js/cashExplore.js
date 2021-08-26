var cashExploreBtn = document.querySelector(".cash-explore-btn");
var cashFromExploreBtn = document.querySelector(".cash-from-explore");
var cashExploreSec = document.querySelector(".cash-explore");

cashExploreBtn.addEventListener("click", () => {
  activeSection(cashExploreSec);
});

cashFromExploreBtn.addEventListener("click", () => {
  unactiveSection(cashExploreSec);
});
