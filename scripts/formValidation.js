const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const feedback = document.querySelector("#feedback");

confirm.addEventListener('focusout', controlar)

function controlar() {
    if (password !== confirm) {
        confirm.value = ""
        password.value = ""
        password.focus()
        feedback.textContent = "Values do not match. Try again."

    } else {
        feedback.textContent=""
    }
}
