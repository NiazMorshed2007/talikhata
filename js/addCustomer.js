var addCustomerSupBtn = document.getElementById("add-customer-supplier-btn");
var addCusSupInputAll = document.querySelectorAll(
  ".add-customer-supplier-main > label > input"
);
var addCusSupNameInput = document.querySelector(".add-customer-supplier-name");
var addCusSupNumInput = document.querySelector(".add-customer-supplier-number");
var addCusSupDbtInput = document.querySelector(".add-cus-sup-debt-input");
var cusSupSpan = document.querySelector(".cus-sup-span");
var addCusSupCalWrapper = document.querySelector(
  ".add-cus-sup-calculator-wrapper"
);

var homeFromCustomerSupplierBtn = document.querySelector(
  ".home-from-customer-supplier"
);
var customerSuppBtn = document.querySelector(".home-add-customer");

var homeWhenEmpty = document.querySelector(".home-when-empty");
var homeMainExists = document.querySelector(".home-main-when-exists");
var homeLists = document.querySelectorAll(".home-list-wrapper > .list");

// var logoName = document.querySelector(".logo-name");

// inpu

// setting up calculator-----------------------------------------------------------------------

let cusSupNumberButtons = document.querySelectorAll("[cs-data-number]");
let cusSupOperationButtons = document.querySelectorAll("[cs-data-operation]");
let cusSupEqualsButton = document.querySelector("[cs-data-equals]");
let cusSupDeleteButton = document.querySelector("[cs-data-delete]");
let allClearButton = document.querySelector("[cs-data-all-clear]");
let cusSupPreviousOperandTextElement = document.querySelector(
  "[cs-data-previous-operand]"
);
let cusSupCurrentOperandTextElement = document.querySelector(
  "[cs-data-current-operand]"
);

const calculator = new Calculator(
  cusSupPreviousOperandTextElement,
  cusSupCurrentOperandTextElement
);

cusSupNumberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

cusSupOperationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

cusSupEqualsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

cusSupDeleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

function validField(span, field) {
  field.innerHTML !== ""
    ? span.classList.add("span-active")
    : span.classList.remove("span-active");
}

toggleInputDiv(addCusSupDbtInput);

customerSupplierCategories.forEach((e, i) => {
  selectCategory(e, i);
  e.addEventListener("click", () => {
    categoryText(clientCategory);
  });
});

customerSuppBtn.addEventListener("click", () => {
  activeSection(customerSupplierSec);
});
homeFromCustomerSupplierBtn.addEventListener("click", () => {
  unactiveSection(customerSupplierSec);
});
addCustomerSupBtn.addEventListener("click", createList);
addCustomerSupBtn.addEventListener("click", saveList);
addCustomerSupBtn.addEventListener("click", () => {
  totalDebt(cusSupCurrentOperandTextElement, ttlDbtCus, ttlDbtMe);
});

addCustomerSupBtn.addEventListener("click", () => {
  addCusSupNameInput.value = "";
  addCusSupNumInput.value = "";
  cusSupCurrentOperandTextElement.innerHTML = "";
  activeSection(homeMainExists);
  unactiveSection(homeWhenEmpty);
  unactiveSection(addCusSupCalWrapper);
});

function toggleInputDiv(el) {
  document
    .querySelector(".add-customer-supplier-main")
    .addEventListener("click", (e) => {
      if (e.target.classList.contains("input-type-div")) {
        el.classList.add("active");
        addCusSupCalWrapper.classList.add("active");
      } else {
        el.classList.remove("active");
        addCusSupCalWrapper.classList.remove("active");
      }
      validField(cusSupSpan, cusSupCurrentOperandTextElement);
    });
}

function singleBtn(input, btn) {
  if (input.value === "") {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

setInterval(() => {
  singleBtn(addCusSupNameInput, addCustomerSupBtn);
  btnFunc(addCustomerSupBtn);
}, 100);

ttlCusNum =
  localStorage.getItem("totalCustomers") === null
    ? 0
    : localStorage.getItem("totalCustomers");
ttlSupNum =
  localStorage.getItem("totalSuppliers") === null
    ? 0
    : localStorage.getItem("totalSuppliers");

function cusSupTotalNum() {
  customer ? ttlCusNum++ : ttlSupNum++;
  ttlSup.innerHTML = ttlSupNum;
  ttlCus.innerHTML = ttlCusNum;
  localStorage.setItem("totalCustomers", ttlCusNum);
  localStorage.setItem("totalSuppliers", ttlSupNum);
}

function createList() {
  category();
  cusSupTotalNum();

  var list = document.createElement("div");
  list.setAttribute("class", "list");

  var list1 = document.createElement("div");
  list1.setAttribute("class", "list-first");

  var listLogo = document.createElement("div");
  listLogo.setAttribute("class", "list-logo");
  logoTxtForClient(listLogo);

  list1.appendChild(listLogo);

  var list2 = document.createElement("div");
  list2.setAttribute("class", "list-second");
  var name = document.createElement("h4");
  name.setAttribute("class", "name");
  name.innerHTML = addCusSupNameInput.value;
  list2.appendChild(name);

  if (supplier) {
    var subName = document.createElement("div");
    subName.setAttribute("class", "sub-name");
    subName.innerHTML = "সাপ্লায়ার";
    list2.appendChild(subName);
  }

  var list3 = document.createElement("div");
  list3.setAttribute("class", "list-third");
  var h4 = document.createElement("h4");
  var dbt =
    cusSupCurrentOperandTextElement.innerHTML === ""
      ? 0
      : cusSupCurrentOperandTextElement.innerHTML;

  var banglaDbt = replaceNumbers(parseFloat(dbt).toFixed(2));
  h4.innerHTML = banglaDbt;
  if (cusSupCurrentOperandTextElement.innerHTML === "" || supplier) {
    h4.setAttribute("class", "black-txt");
  }
  list3.appendChild(h4);
  var i = document.createElement("i");
  i.setAttribute("class", "material-icons");
  i.innerHTML = "keyboard_arrow_right";
  list3.appendChild(i);

  list.appendChild(list1);
  list.appendChild(list2);
  list.appendChild(list3);

  homeListWrapper.insertBefore(list, homeListWrapper.firstChild);
}

function saveList() {
  category();
  var type = customer ? "customer" : "supplier";
  cusSupCurrentOperandTextElement.innerHTML === ""
    ? 0
    : cusSupCurrentOperandTextElement.innerHTML;

  customerName = addCusSupNameInput.value;
  localStorage.getItem("lists") === null
    ? localStorage.setItem("lists", "[]")
    : console.log("not stored lists yet");

  obj = new Object();
  obj["type"] = type;
  obj["name"] = addCusSupNameInput.value;
  obj["number"] = addCusSupNumInput.value;
  obj["debt"] = replaceNumbers(cusSupCurrentOperandTextElement.innerHTML);
  obj["logoTxt"] = document.querySelector(".list-logo").textContent;

  var old_data = JSON.parse(localStorage.getItem("lists"));
  old_data.push(obj);
  localStorage.setItem("lists", JSON.stringify(old_data));
}

function homeAppearDisappear() {
  if (homeLists.length === 0) {
    activeSection(homeWhenEmpty);
    unactiveSection(homeMainExists);
  } else {
    activeSection(homeMainExists);
    unactiveSection(homeWhenEmpty);
  }
}

homeAppearDisappear();

function logoTxtForClient(txt) {
  var name = addCusSupNameInput.value;
  var wordCount = name.split(" ");
  console.log(wordCount);
  if (wordCount.length < 2) {
    txt.innerHTML = wordCount[0].charAt(0) + wordCount[0].charAt(1);
  } else {
    txt.innerHTML = wordCount[0].charAt(0) + wordCount[1].charAt(0);
  }
}
