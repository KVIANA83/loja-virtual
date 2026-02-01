document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmar-senha").value;

    if (!nome) {
        alert("Por favor, preencha o campo nome.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não correspondem.");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    // Aqui você pode enviar o formulário via AJAX, se necessário
    event.target.submit();
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}

// Funcionalidade do Botão adicinar ao carrinhi
document.querySelectorAll(".btn-primary").forEach(button => {
    button.addEventListener("click", function() {
        // Lógica para adicionar o item ao carrinho
        addItemToCart();

        // Exibe a mensagem de sucesso
        displaySuccessMessage("Item adicionado ao carrinho com sucesso!");
    });
});

function addItemToCart() {
    // Aqui você pode adicionar a lógica para realmente adicionar o item ao carrinho
    console.log("Item adicionado ao carrinho.");
}

function displaySuccessMessage(message) {
    let successMessage = document.createElement("div");
    successMessage.className = "alert alert-success"; // Classe de alerta do Bootstrap
    successMessage.textContent = message;

    document.body.appendChild(successMessage);

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

