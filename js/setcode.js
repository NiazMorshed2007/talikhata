// declare section
var setCodeSection = document.querySelector(".set-code");

// declare btn
var setCodeBtn = document.getElementById("set-code-btn");

// declare input
var setCodeInput = document.querySelectorAll(".set-code-third > label > input");

// declare absolute input to store data
var pinInput = document.getElementById("pinInput");

// visibility of password input
var visibility = document.querySelectorAll(".visibility");

// adding event listeners
setCodeBtn.addEventListener("click", () => {
  activeSection(homeSection);
});
setCodeBtn.addEventListener("click", logged);
setCodeBtn.addEventListener("click", savePin);
visibility.forEach((e, i) => {
  toggleVisibility(e, i, setCodeInput);
});

setInterval(() => {
  checkPin(setCodeInput, setCodeBtn);
  btnFunc(setCodeBtn);
}, 1000);
