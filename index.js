document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("#form");
    const nameInput = document.querySelector("#name");
    const surnameInput = document.querySelector("#surname");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const genderSelect = document.querySelector("#gender");
    const messageTextarea = document.querySelector("#message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        clearErrors();

        let isValid = true;

        if (nameInput.value === "") {
            showError(nameInput, "Nome não foi informado");
            isValid = false;
        }

        if (surnameInput.value === "") {
            showError(surnameInput, "Sobrenome não foi informado");
            isValid = false;
        }

        if (genderSelect.value === "") {
            showError(genderSelect, "Por favor, selecione o seu sexo");
            isValid = false;
        }

        if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
            showError(emailInput, "Por favor, preencha com um email válido");
            isValid = false;
        }

        if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, "A senha deve ter no mínimo 8 caracteres, incluindo pelo menos:<br>- Uma letra maiúscula<br>- Uma letra minúscula<br>- Um número<br>- Um caractere especial");
            isValid = false;
        }

        if (messageTextarea.value === "") {
            showError(messageTextarea, "Por favor, escreva uma mensagem");
            isValid = false;
        }

        if (isValid) {
            form.submit();
        }
    });

    function showError(input, message) {
        input.classList.add("error");
        const errorDiv = document.createElement("div");
        errorDiv.classList.add("error-message");
        errorDiv.innerHTML = message;
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(msg => msg.remove());
        
        const errorInputs = document.querySelectorAll(".error");
        errorInputs.forEach(input => input.classList.remove("error"));
    }

    function isEmailValid(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        if (password.length < 8) {
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            return false;
        }
        if (!/[a-z]/.test(password)) {
            return false;
        }
        if (!/[0-9]/.test(password)) {
            return false;
        }
        if (!/[!@#$%^&*(),.?":{}|<>_]/.test(password)) {
            return false;
        }
        return true;
    }
});