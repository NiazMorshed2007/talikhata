var loaderWrapper = document.querySelector(".loader-wrapper");

window.addEventListener("load", () => {
  setTimeout(() => {
    loaderWrapper.classList.add("loaded");
  }, 1200);
});
