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
