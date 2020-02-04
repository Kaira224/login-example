var email = document.forms['forms']['email'];
var password = document.forms['forms']['password'];

var email_err = document.getElementById('email_err');
var password_err = document.getElementById('password_err');

email.addEventListener('textInput', emailVerify);
password.addEventListener('textInput', passwordVerify);

function validated() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        password.focus();
        return false;
    }
}

function passwordVerify() {
    if (password.value.length >= 6) {
        password.style.border = "1px solid #2980b9";
        password.focus();
        return false;
    }
}

function emailVerify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid #2980b9";
        return true;
    }
}