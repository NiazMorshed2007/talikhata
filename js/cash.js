var cashBtn = document.getElementById("cash-btn");
var homeFromCash = document.querySelector(".home-from-cash");
var cashSec = document.querySelector(".cash-section");
var cashDebtInput = document.querySelector(".cash-sec-debt-input");
var cashDetailsInput = document.querySelector(".cash-details-input");
var cashSecBtn = document.getElementById("cash-sec-btn");
var cashSecCalculatorWrapper = document.querySelector(
  ".cash-sec-calculator-wrapper"
);
var cashSecSpan = document.querySelector(".cash-sec-category-span");
// var cash
setInterval(() => {
  checkCalculateBox(cashPreviousOperandTextElement, cashSecBtn);
  disableWhenEmpty(cashCurrentOperandTextElement, cashSecBtn);
  btnFunc(cashSecBtn);
}, 100);

setInterval(() => {
  validField(cashSecSpan, cashCurrentOperandTextElement);
}, 10);

cashBtn.addEventListener("click", () => {
  activeSection(cashSec);
});

cashSecBtn.addEventListener("click", saveCashList);

cashSecBtn.addEventListener("click", () => {
  createCashList();
});

cashSecBtn.addEventListener("click", () => {
  totalCash(cashCurrentOperandTextElement, ttlSold, ttlCash);
  cashCalculator.clear();
  cashCalculator.updateDisplay();
  unactiveSection(cashDebtInput);
});

cashDebtInput.addEventListener("click", () => {
  activeSection(cashSecCalculatorWrapper);
});

cashDetailsInput.addEventListener("click", () => {
  unactiveSection(cashSecCalculatorWrapper);
});

homeFromCash.addEventListener("click", () => {
  unactiveSection(cashSec);
});

toggleBetweenSec(homeFromCash, 0, homeFooter);
cashSecCategoryWrapper.forEach((e, i) => {
  toggleBetweenSec(e, i, cashSecCategoryWrapper);
  e.addEventListener("click", () => {
    cashCategory();

    cashCategoryTxt(cashCategorySpan);
  });
});

toggleInputDiv(cashDebtInput, ".cash-sec-main", cashSecSpan);

// set calc
let cashNumberButtons = document.querySelectorAll("[c-data-number]");
let cashOperationButtons = document.querySelectorAll("[c-data-operation]");
let cashEqualsButton = document.querySelector("[c-data-equals]");
let cashDeleteButton = document.querySelector("[c-data-delete]");
let cashAllClearButton = document.querySelector("[c-data-all-clear]");

const cashCalculator = new Calculator(
  cashPreviousOperandTextElement,
  cashCurrentOperandTextElement
);

cashNumberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cashCalculator.appendNumber(button.innerText);
    cashCalculator.updateDisplay();
  });
});

cashOperationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cashCalculator.chooseOperation(button.innerText);
    cashCalculator.updateDisplay();
  });
});

cashEqualsButton.addEventListener("click", (button) => {
  cashCalculator.compute();
  cashCalculator.updateDisplay();
});

cashAllClearButton.addEventListener("click", (button) => {
  cashCalculator.clear();
  cashCalculator.updateDisplay();
});

cashDeleteButton.addEventListener("click", (button) => {
  cashCalculator.delete();
  cashCalculator.updateDisplay();
});

function disableWhenEmpty(elem, btn) {
  elem.innerHTML === "" ? (btn.disabled = true) : (btn.disabled = false);
}

function createCashList() {
  cashCategory();

  let value = cashCurrentOperandTextElement.innerHTML;
  value = parseFloat(value);
  bnValue = replaceNumbers(value.toFixed(2));

  var list = document.createElement("div");
  list.setAttribute("class", "cash-list");
  var list1 = document.createElement("div");
  list1.setAttribute("class", "cash-list1");
  var logo = document.createElement("div");
  logo.setAttribute("class", "logo");
  sold ? logo.classList.add("sold-logo") : console.log("not sold logo");
  buy ? logo.classList.add("buy-logo") : console.log("not buy logo");
  expense
    ? logo.classList.add("expense-logo")
    : console.log("not expense logo");
  var icon = document.createElement("i");
  icon.setAttribute("class", "material-icons");
  icon.textContent = "attach_money";
  var txt = document.createElement("div");
  txt.setAttribute("class", "cash-list-txt");
  var txtP1 = document.createElement("p");
  if (sold) {
    txtP1.textContent = "ক্যাশ বেচা";
  } else if (buy) {
    txtP1.textContent = "ক্যাশ কেনা";
  } else if (expense) {
    txtP1.textContent = "খরচ";
  }

  var txtP2 = document.createElement("p");
  txtP2.textContent = "২৬ আগস্ট,";

  var txtP3 = document.createElement("p");
  txtP3.textContent = "১১ঃ ৪৫, AM";

  txt.appendChild(txtP1);
  txt.appendChild(txtP2);
  txt.appendChild(txtP3);

  logo.appendChild(icon);
  list1.appendChild(logo);
  list1.appendChild(txt);

  var list2 = document.createElement("div");
  list2.setAttribute("class", "cash-list2");
  var list2P = document.createElement("p");
  !sold ? (list2P.textContent = bnValue) : "";
  list2.appendChild(list2P);

  var list3 = document.createElement("div");
  list3.setAttribute("class", "cash-list3");
  var list3P = document.createElement("p");
  sold ? (list3P.textContent = bnValue) : "";
  list3.appendChild(list3P);

  list.appendChild(list1);
  list.appendChild(list2);
  list.appendChild(list3);

  cashExploreInnerMain.insertBefore(list, cashExploreInnerMain.firstChild);
}

function saveCashList() {
  cashCategory();
  var type;
  if (sold) {
    type = "sold";
  } else if (buy) {
    type = "buy";
  } else if (expense) {
    type = "expense";
  }

  var txt;
  if (sold) {
    txt = "ক্যাশ বেচা";
  } else if (buy) {
    txt = "ক্যাশ কেনা";
  } else if (expense) {
    txt = "খরচ";
  }
  var num = cashCurrentOperandTextElement.innerHTML;

  localStorage.getItem("cashLists") === null
    ? localStorage.setItem("cashLists", "[]")
    : console.log("not stored any lists yet");

  obj = new Object();
  obj["type"] = type;
  obj["txt"] = txt;
  obj["cash"] = num;
  var old_data = JSON.parse(localStorage.getItem("cashLists"));
  old_data.push(obj);
  localStorage.setItem("cashLists", JSON.stringify(old_data));
}
