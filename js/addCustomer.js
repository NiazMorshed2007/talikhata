var addCustomerSupBtn = document.getElementById("add-customer-supplier-btn");
var addCusSupInputAll = document.querySelectorAll(
  ".add-customer-supplier-main > label > input"
);
var addCusSupNameInput = document.querySelector(".add-customer-supplier-name");
var addCusSupNumInput = document.querySelector(".add-customer-supplier-number");
var addCusSupDbtInput = document.querySelector(".add-cus-sup-debt-input");

var homeFromCustomerSupplierBtn = document.querySelector(
  ".home-from-customer-supplier"
);
var customerSuppBtn = document.querySelector(".home-add-customer");

var homeWhenEmpty = document.querySelector(".home-when-empty");
var homeMainExists = document.querySelector(".home-main-when-exists");
var homeLists = document.querySelectorAll(".home-list-wrapper > .list");

// var logoName = document.querySelector(".logo-name");

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
// console.log(homeLists.length);
addCustomerSupBtn.addEventListener("click", createList);
addCustomerSupBtn.addEventListener("click", saveList);

addCustomerSupBtn.addEventListener("click", () => {
  emptyInput(addCusSupInputAll);
  activeSection(homeMainExists);
  unactiveSection(homeWhenEmpty);
});
// addCustomerSupBtn.addEventListener("click", () => {
// });
// addCustomerSupBtn.addEventListener("click", );
// addCustomerSupBtn.addEventListener("click", homeAppearDisappear);

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
}, 1000);

function createList() {
  category();

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
  var dbt = addCusSupDbtInput.value === "" ? 0 : addCusSupDbtInput.value;
  // var decimalDbt = dbt.toFixed(2);
  h4.innerHTML = dbt + ".00";
  if (addCusSupDbtInput.value === "" || supplier) {
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

  customerName = addCusSupNameInput.value;
  localStorage.getItem("lists") === null
    ? localStorage.setItem("lists", "[]")
    : console.log("not stored lists yet");

  obj = new Object();
  obj["type"] = type;
  obj["name"] = addCusSupNameInput.value;
  obj["number"] = addCusSupNumInput.value;
  obj["debt"] = addCusSupDbtInput.value;

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
  var wordCount = name.match(/(\w+)/g).length;

  if (wordCount < 2) {
    txt.innerHTML = name.charAt(0) + name.charAt(1);
  } else {
    var matches = name.match(/\b(\w)/g);
    var acronym = matches.join("");
    txt.innerHTML = acronym;
  }
}
