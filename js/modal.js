var burger = document.querySelector(".burger");
var modal = document.querySelector(".modal");

burger.addEventListener("click", () => {
  activeSection(modal);
});

modal.addEventListener("click", (e) => {
  hideModal(e);
});

function hideModal(e) {
  e.target.classList.contains("modal")
    ? unactiveSection(modal)
    : activeSection(modal);
}
