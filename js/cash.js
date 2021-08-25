var cashBtn = document.getElementById("cash-btn");
var homeFromCash = document.querySelector(".home-from-cash");
var cashSec = document.querySelector(".cash-section");
var cashDebtInput = document.querySelector(".cash-sec-debt-input");
var cashSecBtn = document.getElementById("cash-sec-btn");

cashBtn.addEventListener("click", () => {
  activeSection(cashSec);
});

cashSecBtn.addEventListener("click", () => {
  totalCash(cashCurrentOperandTextElement, ttlSold, ttlCash);
  cashCalculator.clear();
  cashCalculator.updateDisplay();
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

toggleInputDiv(cashDebtInput, ".cash-sec-main");

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
  cashcalculator.clear();
  cashcalculator.updateDisplay();
});

cashDeleteButton.addEventListener("click", (button) => {
  cashCalculator.delete();
  cashCalculator.updateDisplay();
});
