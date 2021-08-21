// some global

// customer supplier --------------------------------------------------------
var customerSupplierCategories = document.querySelectorAll(
  ".add-customer-supplier-main-first > div"
);
var clientCategory = document.querySelector(".client-category");
var customerSupplierSec = document.querySelector(".add-customer-supplier");
let customer = false;
let supplier = false;

// total customer or supplier
var ttlCus = document.querySelector(".total-customers");
var ttlSup = document.querySelector(".total-suppliers");
let ttlCusNum = 0;
let ttlSupNum = 0;

// home------------------------------------------------------------
var ttlDbtCus = document.getElementById("total-debt-for-customer");
var ttlDbtMe = document.getElementById("total-debt-for-me");

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

var enToBnNumbers = {
  0: "০",
  1: "১",
  2: "২",
  3: "৩",
  4: "৪",
  5: "৫",
  6: "৬",
  7: "৭",
  8: "৮",
  9: "৯",
};

var bnToEnNumbers = {
  "০": 0,
  "১": 1,
  "২": 2,
  "৩": 3,
  "৪": 4,
  "৫": 5,
  "৬": 6,
  "৭": 7,
  "৮": 8,
  "৯": 9,
};

function replaceNumbers(num) {
  var output = [];
  for (var i = 0; i < num.length; ++i) {
    if (enToBnNumbers.hasOwnProperty(num[i])) {
      output.push(enToBnNumbers[num[i]]);
    } else {
      output.push(num[i]);
    }
  }
  return output.join("");
}

let dbtForCus;
let dbtForMe;

let storageDbtCus =
  localStorage.getItem("totalDebtForCustomers") !== null
    ? localStorage.getItem("totalDebtForCustomers")
    : 0;
let storageDbtMe =
  localStorage.getItem("totalDebtForMe") !== null
    ? localStorage.getItem("totalDebtForMe")
    : 0;
dbtForCus = Math.floor(storageDbtCus);
dbtForMe = Math.floor(storageDbtMe);

function totalDebt(input, cus, sup) {
  category();
  input.value === "" ? (input.value = 0) : input.value;
  let value = parseFloat(input.value);
  customer ? (dbtForCus += value) : (dbtForMe += value);
  dbtForCusBn = replaceNumbers(dbtForCus.toFixed(2));
  dbtForMeBn = replaceNumbers(dbtForMe.toFixed(2));
  cus.textContent = dbtForCusBn;
  sup.textContent = dbtForMeBn;

  localStorage.setItem("totalDebtForCustomers", dbtForCus.toFixed(2));
  localStorage.setItem("totalDebtForMe", dbtForMe.toFixed(2));
}

function filterClients(input, p) {
  let filterValue = input.value.toUpperCase();
  for (let i = 0; i < p.length; i++) {
    let name = p[i].getElementsByTagName("h4")[0];
    if (name.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      p[i].style.display = "";
    } else {
      p[i].style.display = "none";
    }
  }
}

// function hideKeyboard(element) {
//   element.setAttribute("readonly", "readonly"); // Force keyboard to hide on input field.
//   element.setAttribute("disabled", "true"); // Force keyboard to hide on textarea field.
//   setTimeout(function () {
//     element.blur(); //actually close the keyboard
//     // Remove readonly attribute after keyboard is hidden.
//     element.removeAttribute("readonly");
//     element.removeAttribute("disabled");
//   }, 100);
// }
