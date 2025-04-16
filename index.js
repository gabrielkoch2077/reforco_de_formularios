const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("surname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const genderSelect = document.querySelector("#sex");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
        alert("Nome não foi informado");
        return;
    }

    if (surnameInput.value === "") {
        alert("Sobrenome não foi informado");
        return;
    }
    
    if (!validatePassword(passwordInput.value)) {
        alert("A senha deve ter no mínimo 8 caracteres, incluindo pelo menos:\n- Uma letra maiúscula\n- Uma letra minúscula\n- Um número\n- Um caractere especial");
        return;
    }
    
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email");
        return;

    function isEmailValid(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
        
        
        if (!/[!@#$%^&*(),.?":{}|<>_-]/.test(password)) {
            return false;
        }
        
        return true;
    }

});

function validatePassword(password, minDigits) {
    if (password.lenght >= minDigits) {
        return true
    }

    return false
}

if(genderSelect.value ===""){
    alert("Por favor, selecione o seu sexo");
    return;
}

if messageTextarea.value === "" ) {
    alert("Por favor, escreva alguma mensagem na caixa de texto");
    return;
}

form.submit();