// sections
var helpSection = document.querySelector(".help");
var customerSupplierSec = document.querySelector(".add-customer-supplier");

var helpQuestionWrapper = document.querySelectorAll(".help-question-wrapper");
var helpQuestionHeading = document.querySelectorAll(".help-question-heading");
var showAnswerArrow = document.querySelectorAll(".help-show-answer-arrow");
// declare
var homeFromHelpBtn = document.querySelector(".home-from-help");
var homeFromCustomerSupplierBtn = document.querySelector(
  ".home-from-customer-supplier"
);
var customerSuppBtn = document.querySelector(".home-add-customer");

var customerSupplierCategorys = document.querySelectorAll(
  ".add-customer-supplier-main-first > div"
);

// if logged in
let loggedIn = false;
// let opened = false;

helpQuestionWrapper.forEach((e, i) => {
  toggleAnswer(e, i);
});

customerSupplierCategorys.forEach((e, i) => {
  selectCategory(e, i);
});
// adding event for home section

customerSuppBtn.addEventListener("click", () => {
  activeSection(customerSupplierSec);
});

// unactivate sections
homeFromHelpBtn.addEventListener("click", () => {
  unactiveSection(helpSection);
});

homeFromCustomerSupplierBtn.addEventListener("click", () => {
  unactiveSection(customerSupplierSec);
});

// writing functions
function disableBtn(input, btn) {
  if (input[0].value === "" || input[1].value === "") {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

function selectCategory(e, i) {
  e.addEventListener("click", () => {
    for (let j = 0; j < customerSupplierCategorys.length; j++) {
      if (j == i) {
        customerSupplierCategorys[i].classList.add("active");
      } else {
        customerSupplierCategorys[j].classList.remove("active");
      }
    }
  });
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

function toggleAnswer(e, i) {
  e.addEventListener("click", () => {
    e.classList.contains("active")
      ? e.classList.remove("active")
      : e.classList.add("active");

    const arrow =
      showAnswerArrow[i].innerHTML === "keyboard_arrow_right"
        ? "keyboard_arrow_down"
        : "keyboard_arrow_right";
    showAnswerArrow[i].innerHTML = arrow;
  });
}

function unactiveSection(section) {
  section.classList.remove("active");
}
