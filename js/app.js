var welcomeSection = document.querySelector(".welcome");
var setCodeSection = document.querySelector(".set-code");
var homeSection = document.querySelector(".home");
var welcomeBtn = document.getElementById("welcome-btn");
var setCodeBtn = document.getElementById("set-code-btn");
var welcomeInput = document.querySelectorAll(".welcome-third > label > input");
var setCodeInput = document.querySelectorAll(".set-code-third > label > input");
var nameInput = document.getElementById("name");
var numberInput = document.getElementById("number");
// var
var visibility = document.querySelectorAll(".visibility");

let loggedIn = false;

//addding event for welcome section
welcomeBtn.addEventListener("click", nameAndNumber);
welcomeBtn.addEventListener("click", emptyInput);
welcomeBtn.addEventListener("click", () => {
  activeSection(setCodeSection);
});
setInterval(() => {
  disableBtn(welcomeInput, welcomeBtn);
  btnFunc(welcomeBtn);
}, 1000);

// adding event for seCode Section
setCodeBtn.addEventListener("click", () => {
  activeSection(homeSection);
});
setCodeBtn.addEventListener("click", logged);
visibility.forEach((e, i) => {
  toggleVisibility(e, i, setCodeInput);
});

setInterval(() => {
  checkPin(setCodeInput, setCodeBtn);
  btnFunc(setCodeBtn);
}, 1000);

// writting functions
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

function toggleVisibility(e, i, input) {
  e.addEventListener("click", () => {
    e.innerHTML === "visibility_off"
      ? (e.innerHTML = "visibility")
      : (e.innerHTML = "visibility_off");

    const type =
      input[i].getAttribute("type") === "password" ? "text" : "password";
    input[i].setAttribute("type", type);
    // setCodeInput[i].attributes
  });
}

function activeSection(section) {
  section.classList.add("active");
}
