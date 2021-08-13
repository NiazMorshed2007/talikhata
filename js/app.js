// sections
var homeSection = document.querySelector(".home");
var helpSection = document.querySelector(".help");

// declare
var helpBtn = document.querySelector(".second-home-header");
var homeFromHelpBtn = document.querySelector(".home-from-help");
// if logged in
let loggedIn = false;

// adding event for home section
helpBtn.addEventListener("click", () => {
  activeSection(helpSection);
});

homeFromHelpBtn.addEventListener("click", () => {
  unactiveSection(helpSection);
});

// writing functions
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

function unactiveSection(section) {
  section.classList.remove("active");
}
