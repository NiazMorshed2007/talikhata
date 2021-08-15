var businessName = document.querySelectorAll(".business-name");
var number = document.querySelectorAll(".number");
// var

businessName.forEach((e) => {
  e.innerHTML = localStorage.getItem("name");
});

number.forEach((e) => {
  e.innerHTML = localStorage.getItem("number");
});
