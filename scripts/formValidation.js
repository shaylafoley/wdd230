document.addEventListener('DOMContentLoaded', function() {
    const password = document.querySelector("#password");
    const confirm = document.querySelector("#confirm");
    const feedback = document.querySelector("#feedback");

    confirm.addEventListener('focusout', function() {
        if (password.value !== confirm.value) {
            feedback.textContent = "Passwords do not match. Please try again.";
            confirm.setCustomValidity("Passwords do not match.");
        } else {
            feedback.textContent = "";
            confirm.setCustomValidity("");
        }
    });

    const form = document.querySelector('form.wf1');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#confirm');

    form.addEventListener('submit', function(event) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
        const emailValue = emailInput.value;
        const passwordsMatch = passwordInput.value === confirmPasswordInput.value;

        if (!emailPattern.test(emailValue)) {
            alert('Please enter a valid email address from byui.edu');
            emailInput.focus();
            event.preventDefault();
        } else if (!passwordsMatch) {
            alert('Passwords do not match. Please try again.');
            passwordInput.value = '';
            confirmPasswordInput.value = '';
            passwordInput.focus();
            event.preventDefault();
        }
    });
});





/*document.addEventListener('DOMContentLoaded', function() {        
    const password = document.querySelector("#password");
    const confirm = document.querySelector("#confirm");
    const feedback = document.querySelector("#feedback");

    confirm.addEventListener('focusout', function) {
        if (password.value !== confirm.value) {
            feed
            confirm.value = "";
            password.value = "";
            password.focus();
            feedback.textContent = "Values do not match. Try again.";

        } else {
            feedback.textContent = "";
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form.wf1');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#confirm');
    
    form.addEventListener('submit', function(event) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
        const emailValue = emailInput.value;
        if (!emailPattern.test(emailValue)) {
            alert('Please enter a valid email address from byui.edu');
            emailInput.focus();
            event.preventDefault();
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Passwords do not match. Please try again.');
            passwordInput.value = '';
            confirmPasswordInput.value = '';
            passwordInput.focus();
            event.preventDefault();
        }
    });
});*/