
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    console.log(`Username: ${username}, Password: ${password}`);
    
    // Here you can add logic to handle the login, e.g., send data to a server
});
