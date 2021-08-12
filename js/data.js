//set local storage
function nameAndNumber() {
  var companyName = nameInput.value;
  var mobileNumber = numberInput.value;

  localStorage.setItem("name", companyName);
  localStorage.setItem("number", mobileNumber);
  headerName.innerHTML = localStorage.getItem("name");
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
  // logged();
  // console.log(localStorage.getItem("logged"));
}
//
