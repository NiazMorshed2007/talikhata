//set local storage
function nameAndNumber() {
  var companyName = nameInput.value;
  var mobileNumber = numberInput.value;

  localStorage.setItem("name", companyName);
  localStorage.setItem("number", mobileNumber);
  // .innerHTML = localStorage.getItem("name");
  businessName.forEach((e) => {
    e.innerHTML = localStorage.getItem("name");
  });

  number.forEach((e) => {
    e.innerHTML = localStorage.getItem("number");
  });

  console.log(localStorage);
}

function logoTxtFunc() {
  var name = localStorage.getItem("name")
    ? localStorage.getItem("name")
    : nameInput.value;
  var wordCount = name.match(/(\w+)/g).length;

  if (wordCount < 2) {
    logoTxt.innerHTML = name.charAt(0) + name.charAt(1);
  } else {
    var matches = name.match(/\b(\w)/g); // ['J','S','O','N']
    var acronym = matches.join("");
    logoTxt.innerHTML = acronym;
  }
}

function savePin() {
  var pin = pinInput.value;

  localStorage.setItem("pin", pin);
  console.log(localStorage);
}

function logged() {
  // let logged = false;
  loggedIn = true;
  localStorage.setItem("logged", loggedIn);
  console.log(localStorage);
}

function goHomeDirect() {
  if (localStorage.getItem("logged")) {
    activeSection(homeSection);
  } else {
    console.log("not-logged");
  }
}
