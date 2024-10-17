// Obter o botão
var scrollToTopBtn = document.getElementById("scrollToTop");

// Mostrar o botão quando o usuário rolar 100px da parte superior da página
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Quando o botão é clicado, rola para o topo da página
scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Efeito suave
  });
};

// Função para abrir um popup
function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'block'; // Mostra o popup
}

// Função para fechar um popup
function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'none'; // Esconde o popup
}

document.getElementById("menuToggle").addEventListener("click", function() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
});



/* Configurando Formulário */

document.addEventListener('DOMContentLoaded', function() {
  // Adicionando o evento ao botão
  var submitButton = document.getElementById('submit-btn');
  submitButton.addEventListener('click', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault(); // Evitar recarregamento da página

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var assunto = document.getElementById("assunto").value || "Sem assunto";
    var mensagem = document.getElementById("mensagem").value;

    // Limpar mensagens de erro
    clearErrors();

    // Validação dos campos
    var hasError = false;

    if (!nome) {
      document.getElementById("nome-error").innerText = "Por favor, preencha seu nome.";
      hasError = true;
    }

    if (!email || !validateEmail(email)) {
      document.getElementById("email-error").innerText = "Por favor, insira um e-mail válido.";
      hasError = true;
    }

    if (!telefone) {
      document.getElementById("telefone-error").innerText = "Por favor, preencha seu telefone.";
      hasError = true;
    }

    if (!mensagem) {
      document.getElementById("mensagem-error").innerText = "Por favor, escreva sua mensagem.";
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // Envio para o WhatsApp
    var whatsappMessage = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}`;
    var whatsappUrl = `https://wa.me/5532998671907?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  
    // Envio do e-mail
    sendEmail(nome, email, telefone, assunto, mensagem);
}

function clearErrors() {
  document.getElementById("nome-error").innerText = "";
  document.getElementById("email-error").innerText = "";
  document.getElementById("telefone-error").innerText = "";
  document.getElementById("mensagem-error").innerText = "";
}

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function sendEmail(nome, email, telefone, assunto, mensagem) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "sendEmail.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              console.log("E-mail enviado com sucesso:", xhr.responseText);
          } else {
              console.error("Erro ao enviar o e-mail:", xhr.statusText);
          }
      }
  };

  xhr.send(`nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&telefone=${encodeURIComponent(telefone)}&assunto=${encodeURIComponent(assunto)}&mensagem=${encodeURIComponent(mensagem)}`);
}
});