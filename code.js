// Função para validar o nome
function validarNome(nome) {
    return nome.trim().length > 0;
}

// Função para validar o email
function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regexEmail.test(email);
}

// Função para validar a mensagem
function validarMensagem(mensagem) {
    return mensagem.trim().length > 10;
}

// Função para mostrar mensagens de erro
function mostrarErro(input, mensagem) {
    const campo = input.parentElement;
    const erro = campo.querySelector('.mensagem-erro');
    erro.textContent = mensagem;
    campo.classList.add('erro');
}

// Função para limpar erros
function limparErro(input) {
    const campo = input.parentElement;
    const erro = campo.querySelector('.mensagem-erro');
    erro.textContent = '';
    campo.classList.remove('erro');
}

// Função para simular o envio do formulário
function enviarFormulario(dados) {
    console.log("Formulário enviado com sucesso:", dados);
}

// Event listener para o formulário
document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    let isValid = true;

    // Validação do nome
    if (!validarNome(nome)) {
        mostrarErro(document.getElementById('nome'), 'Nome é obrigatório.');
        isValid = false;
    } else {
        limparErro(document.getElementById('nome'));
    }

    // Validação do email
    if (!validarEmail(email)) {
        mostrarErro(document.getElementById('email'), 'Email inválido.');
        isValid = false;
    } else {
        limparErro(document.getElementById('email'));
    }

    // Validação da mensagem
    if (!validarMensagem(mensagem)) {
        mostrarErro(document.getElementById('mensagem'), 'A mensagem deve ter pelo menos 10 caracteres.');
        isValid = false;
    } else {
        limparErro(document.getElementById('mensagem'));
    }

    // Se todas as validações passarem, enviar o formulário
    if (isValid) {
        enviarFormulario({ nome, email, mensagem });
    }
});
