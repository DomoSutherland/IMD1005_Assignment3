/*
Request 2 - Form validation and error messages
*/
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("Name");
const email = document.getElementById("Email");
const message = document.getElementById("Msg");
const successMessage = document.getElementById("form-sent");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    let errorPresent = false;
    //Validate name
    if (nameValue === '') {
        showError(nameInput, 'Please enter your name');
        errorPresent = true;
    } else {
        clearError(nameInput);
    }

    //Validate email
    if (emailValue === '') {
        showError(email, 'Please enter your email address');
        errorPresent = true;
    } else if (!isValidEmail(emailValue)) {
        showError(email, 'Please enter a valid email');
        errorPresent = true;
    } else {
        clearError(email)
    }

    //Validate message
    if (messageValue === '') {
        showError(message, 'Please write a message.');
        errorPresent = true;
    } else if (messageValue.length < 10) {
        showError(message, 'Your message needs to be at least 10 characters.');
        errorPresent = true;
    } else {
        clearError(message);
    }

    //if there are no errors
    if (!errorPresent) {
        successMessage.classList.add('visible');
    }
});

function showError (input, message) {
    input.classList.add('error');
    const formGroup = input.parentElement;
    const error = formGroup.querySelector(".error-message");
    error.textContent = message;
}

function clearError(input) {
    input.classList.remove('error');
    const formGroup = input.parentElement;
    const error = formGroup.querySelector(".error-message");
    error.textContent = "";
}

function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}