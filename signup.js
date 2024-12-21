document.addEventListener('DOMContentLoaded', function () {
    // Handle the signup form submission
    document.getElementById('signupForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const usernameEmail = document.getElementById('newUsernameEmail').value;
        const password = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorMessage = document.getElementById('error-message');

        // Basic client-side validation
        if (!usernameEmail || !password || !confirmPassword) {
            errorMessage.innerText = 'Please fill out all fields.';
            return;
        }

        // Check if the passwords match
        if (password !== confirmPassword) {
            errorMessage.innerText = 'Passwords do not match. Please try again.';
            return;
        }

        // Check if the username or email already exists (check in localStorage)
        const existingUser = localStorage.getItem(usernameEmail);
        if (existingUser) {
            errorMessage.innerText = 'Username or email already exists. Please choose a different one.';
            return;
        }

        // Save the new user credentials in localStorage (using the username or email as the key)
        localStorage.setItem(usernameEmail, password);

        // After successful sign-up, redirect to the login page
        alert('Sign up successful! You can now log in.');
        window.location.href = 'login.html'; // Redirect to the login page (you can change this URL)
    });
});
