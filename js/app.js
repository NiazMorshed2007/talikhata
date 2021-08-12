var welcomeBtn = document.getElementById("welcome-btn");
var setCodeBtn = document.getElementById("set-code-btn");
var welcomeInput = document.querySelectorAll(".welcome-third > label > input");
var setCodeInput = document.querySelectorAll(".set-code-third > label > input");

// setCodeInput.forEach((e, setCodeBtn) => {
//   setInterval(() => {
//     welcomeBtnFunc(e, setCodeBtn);
//     btnBack();
//   }, 1000);
// });

welcomeInput.forEach((e, welcomeBtn) => {
  setInterval(() => {
    welcomeBtnFunc(e);
    btnBack();
  }, 1000);
});

function welcomeBtnFunc(e) {
  if (e.value === "") {
    welcomeBtn.disabled = true;
  } else {
    welcomeBtn.disabled = false;
  }
}

function btnBack() {
  welcomeBtn.disabled
    ? welcomeBtn.classList.add("welcome-btn-disabled")
    : welcomeBtn.classList.remove("welcome-btn-disabled");
}
