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

const form = document.querySelector('form');
const nomeInput = document.querySelector('[name="nome"]');
const emailInput = document.querySelector('[name="email"]');
const telefoneInput = document.querySelector('[name="telefone"]');
const mensagemInput = document.querySelector('[name="mensagem"]');
const sucessoMensagem = document.querySelector('#success-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  if (nomeInput.value === '') {
    nomeInput.classList.add('error');
    document.getElementById('nome-error').textContent = 'Por favor, insira seu nome.';
    isValid = false;
  } else {
    nomeInput.classList.remove('error');
    document.getElementById('nome-error').textContent = '';
  }

  if (!isEmailValid(emailInput.value)) {
    emailInput.classList.add('error');
    document.getElementById('email-error').textContent = 'Por favor, insira um endereço de e-mail válido.';
    isValid = false;
  } else {
    emailInput.classList.remove('error');
    document.getElementById('email-error').textContent = '';
  }

  if (telefoneInput.value === '') {
    telefoneInput.classList.add('error');
    document.getElementById('telefone-error').textContent = 'Por favor, insira seu telefone.';
    isValid = false;
  } else {
    telefoneInput.classList.remove('error');
    document.getElementById('telefone-error').textContent = '';
  }

  if (mensagemInput.value === '') {
    mensagemInput.classList.add('error');
    document.getElementById('mensagem-error').textContent = 'Por favor, insira sua mensagem.';
    isValid = false;
  } else {
    mensagemInput.classList.remove('error');
    document.getElementById('mensagem-error').textContent = '';
  }

  if (isValid) {
    // Envie o formulário aqui
    sucessoMensagem.textContent = 'Mensagem enviada com sucesso!';
  }
});

function isEmailValid(email) {
  // Adicione aqui sua lógica de validação de e-mail
  return true;
}