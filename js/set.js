var businessName = document.querySelectorAll(".business-name");
var number = document.querySelectorAll(".number");
var logoTxt = document.querySelector(".logo-when-no-img");

businessName.forEach((e) => {
  e.innerHTML = localStorage.getItem("name");
});

function lgF() {
  var exist = localStorage.getItem("name")
    ? logoTxtFunc()
    : console.log("not-stored");
}

lgF();

number.forEach((e) => {
  e.innerHTML = localStorage.getItem("number");
});

function setList() {
  var lists = JSON.parse(localStorage.getItem("lists"))
    ? JSON.parse(localStorage.getItem("lists"))
    : console.log("not-stored-any-lists");

  if (lists !== undefined) {
    for (let x = 0; x < lists.length; x++) {
      console.log(lists[x]);
      var list = document.createElement("div");
      list.setAttribute("class", "list");

      var list1 = document.createElement("div");
      list1.setAttribute("class", "list-first");

      var listLogo = document.createElement("div");
      listLogo.setAttribute("class", "list-logo");
      listLogo.innerHTML = lists[x].logoTxt;

      list1.appendChild(listLogo);

      var list2 = document.createElement("div");
      list2.setAttribute("class", "list-second");
      var name = document.createElement("h4");
      name.setAttribute("class", "name");
      name.innerHTML = lists[x].name;
      list2.appendChild(name);

      if (lists[x].type === "supplier") {
        var subName = document.createElement("div");
        subName.setAttribute("class", "sub-name");
        subName.innerHTML = "সাপ্লায়ার";
        list2.appendChild(subName);
      }

      var list3 = document.createElement("div");
      list3.setAttribute("class", "list-third");
      var h4 = document.createElement("h4");
      let debt;
      debt = lists[x].debt === "" ? 0 : lists[x].debt;
      h4.innerHTML = replaceNumbers(parseFloat(debt).toFixed(2));
      if (lists[x].debt === "" || lists[x].type === "supplier") {
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
  } else {
    console.log("store something");
  }
}

setList();

function setTtlCusSup() {
  var cus = localStorage.getItem("totalCustomers")
    ? localStorage.getItem("totalCustomers")
    : 0;
  var sup = localStorage.getItem("totalSuppliers")
    ? localStorage.getItem("totalSuppliers")
    : 0;
  ttlCus.innerHTML = cus;
  ttlSup.innerHTML = sup;
}
setTtlCusSup();

function setTotalDebt() {
  var dbtForCus;
  var dbtForMe;

  dbtForCus =
    localStorage.getItem("totalDebtForCustomers") !== null
      ? localStorage.getItem("totalDebtForCustomers")
      : 0;
  dbtForMe =
    localStorage.getItem("totalDebtForMe") !== null
      ? localStorage.getItem("totalDebtForMe")
      : 0;

  dbtForCusBn = replaceNumbers(dbtForCus);
  dbtForMeBn = replaceNumbers(dbtForMe);

  ttlDbtMe.textContent = dbtForMeBn;
  ttlDbtCus.textContent = dbtForCusBn;
}

setTotalDebt();

function setTotalCash() {
  var totalSold;
  var totalCash;

  totalCash =
    localStorage.getItem("totalCash") !== null
      ? localStorage.getItem("totalCash")
      : 0;
  totalSold =
    localStorage.getItem("totalSold") !== null
      ? localStorage.getItem("totalSold")
      : 0;

  ttlSold.textContent = replaceNumbers(totalSold);
  ttlCash.textContent = replaceNumbers(totalCash);
}

setTotalCash();

function setCashList() {
  var cashLists = JSON.parse(localStorage.getItem("cashLists"))
    ? JSON.parse(localStorage.getItem("cashLists"))
    : console.log("not stored any cash list");

  if (cashLists !== undefined) {
    for (let z = 0; z < cashLists.length; z++) {
      console.log(cashLists[z]);

      let type = cashLists[z].type;
      let value = cashLists[z].cash;
      let bnValue = replaceNumbers(parseFloat(value).toFixed(2));
      //

      var list = document.createElement("div");
      list.setAttribute("class", "cash-list");
      var list1 = document.createElement("div");
      list1.setAttribute("class", "cash-list1");
      var logo = document.createElement("div");
      logo.setAttribute("class", "logo");
      type === "sold"
        ? logo.classList.add("sold-logo")
        : console.log("not sold logo");
      type === "buy"
        ? logo.classList.add("buy-logo")
        : console.log("not buy logo");
      type === "expense"
        ? logo.classList.add("expense-logo")
        : console.log("not expense logo");
      var icon = document.createElement("i");
      icon.setAttribute("class", "material-icons");
      icon.textContent = "attach_money";
      var txt = document.createElement("div");
      txt.setAttribute("class", "cash-list-txt");
      var txtP1 = document.createElement("p");
      if (type === "sold") {
        txtP1.textContent = "ক্যাশ বেচা";
      } else if (type === "buy") {
        txtP1.textContent = "ক্যাশ কেনা";
      } else if (type === "expense") {
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
      type !== "sold" ? (list2P.textContent = bnValue) : "";
      list2.appendChild(list2P);

      var list3 = document.createElement("div");
      list3.setAttribute("class", "cash-list3");
      var list3P = document.createElement("p");
      type === "sold" ? (list3P.textContent = bnValue) : "";
      list3.appendChild(list3P);

      list.appendChild(list1);
      list.appendChild(list2);
      list.appendChild(list3);

      cashExploreInnerMain.insertBefore(list, cashExploreInnerMain.firstChild);
      //
    }
  }
}

setCashList();
