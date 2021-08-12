var welcomeSection = document.querySelector(".welcome");
var setCodeSection = document.querySelector(".set-code");
var homeSection = document.querySelector(".home");
var welcomeBtn = document.getElementById("welcome-btn");
var setCodeBtn = document.getElementById("set-code-btn");
var welcomeInput = document.querySelectorAll(".welcome-third > label > input");
var setCodeInput = document.querySelectorAll(".set-code-third > label > input");
var nameInput = document.getElementById("name");
var numberInput = document.getElementById("number");

let loggedIn = false;

welcomeBtn.addEventListener("click", nameAndNumber);
welcomeBtn.addEventListener("click", emptyInput);
welcomeBtn.addEventListener("click", () => {
  activeSection(setCodeSection);
});
setCodeBtn.addEventListener("click", () => {
  activeSection(homeSection);
});

setInterval(() => {
  checkPin(setCodeInput, setCodeBtn);
  btnFunc(setCodeBtn);
}, 1000);

setInterval(() => {
  disableBtn(welcomeInput, welcomeBtn);
  btnFunc(welcomeBtn);
}, 1000);

function disableBtn(input, btn) {
  if (input[0].value === "" || input[1].value === "") {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

function btnFunc(e) {
  e.disabled ? e.classList.add("disabled") : e.classList.remove("disabled");
}

function checkPin(input, btn) {
  if (
    input[0].value === "" ||
    input[1].value === "" ||
    input[0].value !== input[1].value
  ) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

function emptyInput() {
  welcomeInput.forEach((e) => {
    e.value = "";
  });
}

function activeSection(section) {
  section.classList.add("active");
}
