const form = document.querySelector('#sign-up-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const helpInput = document.querySelector('#help');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const helpError = document.querySelector('#help-error');
const message = document.querySelector('#form-message');

if (!form ||  !nameInput || !emailInput || !message|| !helpInput || !nameError || !emailError || !helpError || !message) {
    throw new Error('Missing expected elements in the page');
}

form.addEventListener('submit', (event) => {


    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const help = helpInput.value.trim();

    nameError.hidden = true;
    emailError.hidden = true;
    helpError.hidden = true;
    nameError.textContent = '';
    emailError.textContent = '';
    helpError.textContent = '';
    message.textContent = '';

    if (name.length === 0) {
        nameError.textContent = 'Please enter your full name.';
        nameError.hidden = false;
        nameInput.focus();
        return;
    }

    if (!emailInput.checkValidity()) {
        emailError.textContent = 'Please enter a valid email.';
        emailError.hidden = false;
        emailInput.focus();
        return;
    }

    if(help.length < 10) {
        helpError.textContent = 'Please provide more details in the help field.';
        helpError.hidden = false;
        return;
    }

    message.textContent = `Thanks! We will contact ${email} with tutoring options.`;
    form.reset();
});