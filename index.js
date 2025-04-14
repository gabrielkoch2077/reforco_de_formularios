const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email");
        return;
    }

    if (!validatePassword(password.value)) {
        alert("A senha precisa ser no mínimo 8 dígitos.");
        return;
    }

    form.submit();
});

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if (emailRegex.text(email)) {
        return true;
    }
    return false;
}

function validatePassword(password, minDigits) {
    if (password.lenght >= minDigits) {
        return true
    }

    return false
}