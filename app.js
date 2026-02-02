const form = document.querySelector('#sign-up-form');
const emailInput = document.querySelector('#email');
const helpInput = document.querySelector('#help');
const emailError = document.querySelector('#email-error');
const helpError = document.querySelector('#help-error');
const message = document.querySelector('#form-message');

if (!form || !emailInput || !message|| !helpInput || !emailError || !helpError) {
    throw new Error('Missing expected elements in the page');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const help = helpInput.value.trim();

    emailError.hidden = true;
    helpError.hidden = true;
    emailError.textContent = '';
    helpError.textContent = '';
    message.textContent = '';

    const emailLooksValid = email.includes('@') && email.includes('.');
    if (!emailLooksValid) {
       emailError.textContent = 'Please enter a valid email.';
       emailError.hidden = false;
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