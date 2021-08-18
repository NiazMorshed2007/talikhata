var homeListWrapper = document.querySelector(".home-list-wrapper");

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
  var wordCount = name.split(" ");

  if (wordCount.length < 2) {
    logoTxt.innerHTML = wordCount[0].charAt(0) + wordCount[0].charAt(1);
  } else {
    logoTxt.innerHTML = wordCount[0].charAt(0) + wordCount[1].charAt(0);
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
