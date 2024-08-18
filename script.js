
const form = document.getElementById('myForm');
form.addEventListener('submit', validateForm);

// Validate the form
function validateForm(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate full name
    if (fullName.length < 5) {
        document.getElementById('fullNameError').innerHTML = 'Enter a valid full name';
        return false;
    }

    // Validate email
    if (!email.includes('@')) {
        document.getElementById('emailError').innerHTML = 'Enter a valid email ID';
        return false;
    }

    // Validate phone number
    if (phoneNumber === '123456789' || phoneNumber.length !== 10)