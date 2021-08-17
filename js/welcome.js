// declare section
var welcomeSection = document.querySelector(".welcome");

// declare btn
var welcomeBtn = document.getElementById("welcome-btn");

// declare input
var welcomeInput = document.querySelectorAll(".welcome-third > label > input");

// declare absolute input for store data
var nameInput = document.getElementById("name");
var numberInput = document.getElementById("number");

// adding event listeners
welcomeBtn.addEventListener("click", nameAndNumber);
welcomeBtn.addEventListener("click", logoTxtFunc);
welcomeBtn.addEventListener("click", () => {
  emptyInput(welcomeInput);
});
welcomeBtn.addEventListener("click", () => {
  activeSection(setCodeSection);
});
setInterval(() => {
  disableBtn(welcomeInput, welcomeBtn);
  btnFunc(welcomeBtn);
}, 1000);
