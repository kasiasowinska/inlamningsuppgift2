document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('registerButton');
    const registrationMessage = document.getElementById('registrationMessage');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

if (registerButton && registrationMessage && usernameInput && passwordInput) { 
    registerButton.addEventListener('click', function() { 
        const username = usernameInput.value;
        const password = passwordInput.value;

        registrationMessage.style.display = 'block';
        });
    }

const loginButton = document.getElementById('loginButton');
const loginUsernameInput = document.getElementById('loginUsername');
const loginPasswordInput = document.getElementById('loginPassword');

if (loginButton && loginUsernameInput && loginPasswordInput) {
    loginButton.addEventListener('click', function() {
        const username = loginUsernameInput.value;
        const password = loginPasswordInput.value;

        if (username === 'kasia' && password === 'test') {
            window.location.href = 'dashboard.html';
            } else {
            alert('Felaktiga användaruppgifter');
            }
            loginUsernameInput.value = '';
            loginPasswordInput.value = '';
        });
    }

const changePasswordLink = document.getElementById('changePasswordLink');
const logoutButton = document.getElementById('logoutButton');
const changePasswordForm = document.getElementById('changePasswordForm');
const dashboard = document.getElementById('dashboard');

if (changePasswordLink && logoutButton && changePasswordForm && dashboard) {
    changePasswordLink.addEventListener('click', function() {
        dashboard.style.display = 'none';
        changePasswordForm.style.display = 'block';
    });

    const changePasswordButton = document.getElementById('changePasswordButton');
    if (changePasswordButton) {
        changePasswordButton.addEventListener('click', function() {
            window.location.href = 'dashboard.html';
        });
    }

    logoutButton.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
    }
});