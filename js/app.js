// some global

// customer supplier --------------------------------------------------------
var customerSupplierCategories = document.querySelectorAll(
  ".add-customer-supplier-main-first > div"
);
var clientCategory = document.querySelector(".client-category");
var customerSupplierSec = document.querySelector(".add-customer-supplier");
let customer = false;
let supplier = false;

// help --------------------------------------------------------------------
var helpSection = document.querySelector(".help");

var helpQuestionWrapper = document.querySelectorAll(".help-question-wrapper");
var helpQuestionHeading = document.querySelectorAll(".help-question-heading");
var showAnswerArrow = document.querySelectorAll(".help-show-answer-arrow");
// declare
var homeFromHelpBtn = document.querySelector(".home-from-help");

let loggedIn = false;

// help events
helpQuestionWrapper.forEach((e, i) => {
  toggleAnswer(e, i);
});

// unactivate sections
homeFromHelpBtn.addEventListener("click", () => {
  unactiveSection(helpSection);
});

// -----------------------------------------------------------------------

// writing functions
function category() {
  if (customerSupplierCategories[0].classList.contains("active")) {
    customer = true;
    supplier = false;
  } else {
    supplier = true;
    customer = false;
  }
  console.log(customer);
  // console.log(supplier);
}

function categoryText(e) {
  category();
  customer
    ? (e.textContent = "কাস্টমারের নাম")
    : (e.textContent = "সাপ্লায়ারের নাম");
}

categoryText(clientCategory);

function disableBtn(input, btn) {
  if (input[0].value === "" || input[1].value === "") {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

function selectCategory(e, i) {
  e.addEventListener("click", () => {
    for (let j = 0; j < customerSupplierCategories.length; j++) {
      if (j == i) {
        customerSupplierCategories[i].classList.add("active");
      } else {
        customerSupplierCategories[j].classList.remove("active");
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

function emptyInput(input) {
  input.forEach((e) => {
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
