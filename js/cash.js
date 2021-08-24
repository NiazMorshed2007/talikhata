var cashBtn = document.getElementById("cash-btn");
var homeFromCash = document.querySelector(".home-from-cash");
var cashSec = document.querySelector(".cash-section");
var cashDebtInput = document.querySelector(".cash-sec-debt-input");
var cashSecCategoryWrapper = document.querySelectorAll(
  ".cash-sec-inner-main1 > div"
);

console.log(cashSecCategoryWrapper);

cashBtn.addEventListener("click", () => {
  activeSection(cashSec);
});

homeFromCash.addEventListener("click", () => {
  unactiveSection(cashSec);
});

toggleBetweenSec(homeFromCash, 0, homeFooter);
cashSecCategoryWrapper.forEach((e, i) => {
  toggleBetweenSec(e, i, cashSecCategoryWrapper);
});

toggleInputDiv(cashDebtInput, ".cash-sec-main");

// set calc
let cashNumberButtons = document.querySelectorAll("[c-data-number]");
let cashOperationButtons = document.querySelectorAll("[c-data-operation]");
let cashEqualsButton = document.querySelector("[c-data-equals]");
let cashDeleteButton = document.querySelector("[c-data-delete]");
let cashAllClearButton = document.querySelector("[c-data-all-clear]");
let cashPreviousOperandTextElement = document.querySelector(
  "[c-data-previous-operand]"
);
let cashCurrentOperandTextElement = document.querySelector(
  "[c-data-current-operand]"
);

const cashCalculator = new Calculator(
  cashPreviousOperandTextElement,
  cashCurrentOperandTextElement
);

cashNumberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cashalculator.appendNumber(button.innerText);
    cashalculator.updateDisplay();
  });
});

cashOperationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cashalculator.chooseOperation(button.innerText);
    cashalculator.updateDisplay();
  });
});

cashEqualsButton.addEventListener("click", (button) => {
  cashalculator.compute();
  cashalculator.updateDisplay();
});

cashAllClearButton.addEventListener("click", (button) => {
  cashalculator.clear();
  cashalculator.updateDisplay();
});

cashDeleteButton.addEventListener("click", (button) => {
  cashalculator.delete();
  cashalculator.updateDisplay();
});
