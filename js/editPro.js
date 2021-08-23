var goEditSec = document.querySelector("#edit-profile");
var leaveEditSec = document.querySelector(".leave-edit-sec");
var editSec = document.querySelector(".edit-section");

var editSecBtn = document.getElementById("edit-section-btn");

console.log(editAllInput);

goEditSec.addEventListener("click", () => {
  activeSection(editSec);
});

leaveEditSec.addEventListener("click", () => {
  unactiveSection(editSec);
});

editSecBtn.addEventListener("click", () => {
  editProfile();
  updateEdited();
  logoTxtFunc();
  unactiveSection(editSec);
  getValues(editAllInput);
});

function editProfile() {
  let yourName = editAllInput[0];
  let businessName = editAllInput[1];
  let licenseNum = editAllInput[3];
  let nidNum = editAllInput[4];
  let experience = editAllInput[5];
  let address = editAllInput[6];

  yourName.value !== ""
    ? localStorage.setItem("yourName", yourName.value)
    : console.log("your name is not stored");

  businessName.value !== ""
    ? localStorage.setItem("name", businessName.value)
    : localStorage.getItem("name");

  licenseNum.value !== ""
    ? localStorage.setItem("licenseNum", licenseNum.value)
    : console.log("no license");

  nidNum.value !== ""
    ? localStorage.setItem("NID", nidNum.value)
    : console.log("no nid num stored");

  experience.value !== ""
    ? localStorage.setItem("experience", experience.value)
    : 0;

  address.value !== ""
    ? localStorage.setItem("address", address.value)
    : console.log("no address stored");
}

function updateEdited() {
  businessName.forEach((e) => {
    e.innerHTML = localStorage.getItem("name");
  });
}

getValues(editAllInput);
