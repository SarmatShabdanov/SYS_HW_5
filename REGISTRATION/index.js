function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (name === '') {
        errorMessage.textContent = 'Имя не может быть пустым.';
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        errorMessage.textContent = 'Email должен содержать символы "@" и ".".';
        return false;
    }

    if (password.length < 8) {
        errorMessage.textContent = 'Пароль должен содержать минимум 8 символов.';
        return false;
    }

    errorMessage.textContent = '';
    return true;
}
