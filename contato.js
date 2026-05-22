// ===============================
// SELETORES
// ===============================

const formulario = document.querySelector("#form-contato");

const nome = document.querySelector("#nome");

const email = document.querySelector("#email");

const mensagem = document.querySelector("#mensagem");

// ERROS

const erroNome = document.querySelector("#erro-nome");

const erroEmail = document.querySelector("#erro-email");

const erroMensagem = document.querySelector("#erro-mensagem");

// ===============================
// VALIDAR EMAIL
// ===============================

function emailValido(emailTexto) {

    // Regex simples de e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(emailTexto);

}

// ===============================
// SUBMIT
// ===============================

formulario.addEventListener("submit", (evento) => {

    // Impede envio padrão
    evento.preventDefault();

    // Limpa erros anteriores
    erroNome.textContent = "";

    erroEmail.textContent = "";

    erroMensagem.textContent = "";

    // Controle de validação
    let formularioValido = true;

    // VALIDAR NOME

    if (nome.value.trim() === "") {

        erroNome.textContent =
            "Por favor, preencha seu nome.";

        formularioValido = false;
    }

    // VALIDAR EMAIL

    if (email.value.trim() === "") {

        erroEmail.textContent =
            "Por favor, preencha seu e-mail.";

        formularioValido = false;

    } else if (!emailValido(email.value)) {

        erroEmail.textContent =
            "Digite um e-mail válido.";

        formularioValido = false;
    }

    // VALIDAR MENSAGEM

    if (mensagem.value.trim() === "") {

        erroMensagem.textContent =
            "Digite sua mensagem.";

        formularioValido = false;

    } else if (mensagem.value.trim().length < 10) {

        erroMensagem.textContent =
            "A mensagem deve ter pelo menos 10 caracteres.";

        formularioValido = false;
    }

    // FORMULÁRIO VÁLIDO

    if (formularioValido) {

        alert("Mensagem enviada com sucesso!");

        // Limpa formulário
        formulario.reset();

    }

});