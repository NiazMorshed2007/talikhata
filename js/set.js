var businessName = document.querySelectorAll(".business-name");
var number = document.querySelectorAll(".number");
var logoTxt = document.querySelector(".logo-when-no-img");

// var

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
      h4.innerHTML = lists[x].debt + ".00";
      if (lists[x].debt === "") {
        h4.innerHTML = 0 + ".00";
      }
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
      // }
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
  var dbtForCus = localStorage.getItem("totalDebtForCustomers");
  var dbtForMe = localStorage.getItem("totalDebtForMe");

  dbtForCusBn = replaceNumbers(dbtForCus);
  dbtForMeBn = replaceNumbers(dbtForMe);

  ttlDbtMe.textContent = dbtForMeBn;
  ttlDbtCus.textContent = dbtForCusBn;
}

setTotalDebt();
