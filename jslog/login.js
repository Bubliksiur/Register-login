const registerPanel = document.getElementById('registerPanel');
const registerUsername = document.getElementById('username');
const registerPassword = document.getElementById('password');
const registerButton = document.getElementById('registerButton');
const goToLogin = document.getElementById('goToLogin');

const loginPanel = document.getElementById('loginPanel');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const loginButton = document.getElementById('loginButton');
const goToRegister = document.getElementById('goToRegister');

const warning = document.getElementById('warning');

const users = {};

function register() {
    let username = registerUsername.value.trim();
    let password = registerPassword.value.trim();

    if (username === '' || password === '') {
        showWarning('Do not leave blank fields');
        return;
    }
    if (username.length < 3) {
        showWarning('Too short a name! It should be at least 3 characters long');
        return;
    }
    if (password.length < 5) {
        showWarning('Password too short! It should be at least 5 characters long');
        return;
    }

    if (users[username]) {
        showWarning('Such a user already exists!');
        registerUsername.value = '';
        registerPassword.value = '';
        return;
    }

    users[username] = password;
    hideWarning();
    warning.textContent = 'Registration successful!';
    registerPanel.style.display = 'none';
    loginPanel.style.display = 'flex';
    loginUsername.value = '';
    loginPassword.value = '';
}

registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    register();
});

function login() {
    let username = loginUsername.value.trim();
    let password = loginPassword.value.trim();

    if (username === '' || password === '') {
        showWarning('Do not leave blank fields');
        return;
    }

    if (users[username] && users[username] === password) {
        hideWarning();
        showWarning('Login successful!');
        warning.style.background = '#d8f8d7';
        warning.style.color = '#1c721c';
        warning.style.border = '#c6f5c8';
        loginUsername.value = '';
        loginPassword.value = '';
        return;
    }
    showWarning('Incorrect name or password!');
}

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    login();
});

// log/reg buttons!

goToLogin.addEventListener('click', (e) => {
    loginPanel.style.display = 'flex';
    registerPanel.style.display = 'none';
    hideWarning();
});

goToRegister.addEventListener('click', (e) => {
    registerPanel.style.display = 'flex';
    loginPanel.style.display = 'none';
    hideWarning();
});

// warning functions!

function showWarning(message) {
    warning.textContent = message;
    warning.classList.remove('hidden');
}

function hideWarning() {
    warning.classList.add('hidden');
}   