var addCustomerSupBtn = document.getElementById("add-customer-supplier-btn");
var addCusSupInputAll = document.querySelectorAll(
  ".add-customer-supplier-main > label > input"
);
var addCusSupNameInput = document.querySelector(".add-customer-supplier-name");
var addCusSupNumInput = document.querySelector(".add-customer-supplier-number");

var homeWhenEmpty = document.querySelector(".home-when-empty");
var homeMainExists = document.querySelector(".home-main-when-exists");
var homeListWrapper = document.querySelector(".home-list-wrapper");
var homeLists = document.querySelectorAll(".home-list-wrapper > .list");

// console.log(homeLists.length);
addCustomerSupBtn.addEventListener("click", createList);
addCustomerSupBtn.addEventListener("click", saveList);

addCustomerSupBtn.addEventListener("click", () => {
  emptyInput(addCusSupInputAll);
  activeSection(homeMainExists);
  unactiveSection(homeWhenEmpty);
});
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
  var list = document.createElement("div");
  list.setAttribute("class", "list");

  var list1 = document.createElement("div");
  list1.setAttribute("class", "list-first");

  var listLogo = document.createElement("div");
  listLogo.setAttribute("class", "list-logo");
  listLogo.innerHTML = "NI";

  list1.appendChild(listLogo);

  var list2 = document.createElement("div");
  list2.setAttribute("class", "list-second");
  var name = document.createElement("h4");
  name.setAttribute("class", "name");
  name.innerHTML = addCusSupNameInput.value;
  list2.appendChild(name);

  var list3 = document.createElement("div");
  list3.setAttribute("class", "list-third");
  var p = document.createElement("p");
  p.innerHTML = "192.00";
  list3.appendChild(p);
  var i = document.createElement("i");
  i.setAttribute("class", "material-icons");
  i.innerHTML = "keyboard_arrow_right";
  list3.appendChild(i);

  list.appendChild(list1);
  list.appendChild(list2);
  list.appendChild(list3);

  homeListWrapper.insertBefore(list, homeListWrapper.firstChild);
}

let c = 0;

function saveList() {
  c++;
  var customerName;
  var supplierName;

  arr = new Array();

  customerName = addCusSupNameInput.value;
  arr.push(customerName);
  console.log(customerName);
  console.log(arr);
  localStorage.setItem(`customer${c}`, JSON.stringify(arr));
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

// setInterval(() => {
homeAppearDisappear();
// }, 1000);
