var businessName = document.querySelectorAll(".business-name");
var number = document.querySelectorAll(".number");
var logoTxt = document.querySelector(".logo-when-no-img");

// var

businessName.forEach((e) => {
  e.innerHTML = localStorage.getItem("name");
});

logoTxtFunc();

number.forEach((e) => {
  e.innerHTML = localStorage.getItem("number");
});
