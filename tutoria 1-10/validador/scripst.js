function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");

    if (name === "" || email === "" || password === "") {
        error.innerHTML = "Por favor, complete todos los campos.";
    } else if (!isValidEmail(email)) {
        error.innerHTML = "Por favor, ingrese un correo electrónico válido.";
    } else if (password.length < 8) {
        error.innerHTML = "La contraseña debe tener al menos 8 caracteres.";
    } else {
        error.innerHTML = "Registro exitoso.";
        // Aquí puedes enviar los datos del formulario a un servidor si es necesario.
    }
}

function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
