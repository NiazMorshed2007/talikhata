var welcomeBtn = document.getElementById('welcome-btn');
var welcomeInput = document.querySelectorAll('.welcome-third > label > input');

welcomeInput.forEach(e => {
    // e.setAttribute('readonly', readonly);
    setInterval(() => {
        welcomeBtnFunc(e);
        btnBack();
    }, 1000);
 });

function welcomeBtnFunc(e) {
    if(e.value === '') {
        welcomeBtn.disabled = true;
    } else {
        welcomeBtn.disabled = false;
    }
}

function btnBack() {
    welcomeBtn.disabled ? welcomeBtn.classList.add('welcome-btn-disabled') :  welcomeBtn.classList.remove('welcome-btn-disabled');
}
