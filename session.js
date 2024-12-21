document.addEventListener('DOMContentLoaded', function () {
    // Check if the username/email is stored in localStorage (for "Remember Me")
    const savedUsernameEmail = localStorage.getItem('rememberedUsernameEmail');
    if (savedUsernameEmail) {
        document.getElementById('usernameEmail').value = savedUsernameEmail;
        document.getElementById('rememberMe').checked = true;
    }

    // Handle the login form submission
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const usernameEmail = document.getElementById('usernameEmail').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        const errorMessage = document.getElementById('error-message');

        // Basic client-side validation
        if (!usernameEmail || !password) {
            errorMessage.innerText = 'Please fill out both fields.';
            return;
        }

        // Retrieve the stored password from localStorage using username or email
        const storedPassword = localStorage.getItem(usernameEmail);

        if (storedPassword && storedPassword === password) {
            // Save the username/email in localStorage if "Remember Me" is checked
            if (rememberMe) {
                localStorage.setItem('rememberedUsernameEmail', usernameEmail);
            } else {
                localStorage.removeItem('rememberedUsernameEmail');
            }

            // Simulate a successful login by redirecting to the "dashboard" page
            window.location.href = 'resume.html'; // Redirect to the dashboard (you can replace this with any page)
        } else {
            errorMessage.innerText = 'Invalid username or email, or password. Please try again.';
        }
    });
});
