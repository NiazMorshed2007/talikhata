//set local storage
function nameAndNumber() {
  var companyName = nameInput.value;
  var mobileNumber = numberInput.value;

  localStorage.setItem("name", companyName);
  localStorage.setItem("number", mobileNumber);
  console.log(localStorage);
}
