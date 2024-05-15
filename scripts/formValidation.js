let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm");
const feedback = document.querySelector("#feedback");

if (password !== confirm) {
    displaymsg.textcontent = "Password does not match."
    confirm.value = ""
    password.value = ""
    password.focus();
else {

    }
}