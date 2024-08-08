function formatText(command) {
    document.execCommand(command, false, null);
}

function changeColor(command, color) {
    document.execCommand(command, false, color);
}

function changeFont(font) {
    document.execCommand('fontName', false, font);
}

function changeFontSize(size) {
    document.execCommand('fontSize', false, size);
}

function insertImage(input) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '100%';
        img.style.display = 'block';
        img.style.marginTop = '10px';
        document.getElementById('editor').appendChild(img);
    };
    reader.readAsDataURL(file);
}

function showSignupForm() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function signup() {
    // Placeholder for actual sign up logic
    alert('Sign up successful');
    showEditor();
}

function login() {
    // Placeholder for actual login logic
    alert('Login successful');
    showEditor();
}

function showEditor() {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('editorContainer').style.display = 'block';
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    document.getElementById('authContainer').classList.toggle('dark');
    document.getElementById('editorContainer').classList.toggle('dark');
    document.querySelectorAll('.toolbar button').forEach(button => button.classList.toggle('dark'));
    document.querySelectorAll('.toolbar select').forEach(select => select.classList.toggle('dark'));
    document.querySelectorAll('.toolbar input').forEach(input => input.classList.toggle('dark'));
    document.querySelectorAll('.signup-login-container input').forEach(input => input.classList.toggle('dark'));
    document.querySelectorAll('.signup-login-container button').forEach(button => button.classList.toggle('dark'));
    document.querySelectorAll('.signup-login-container span').forEach(span => span.classList.toggle('dark'));
    document.querySelectorAll('footer p').forEach(p => p.classList.toggle('dark'));
}
