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
  popup.style.display = "block"; // Mostra o popup
}

// Função para fechar um popup
function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = "none"; // Esconde o popup
}

//menu hamburguer - não consta mais
//document.getElementById("menuToggle").addEventListener("click", function () {
//  const navbar = document.getElementById("navbar");
//  navbar.classList.toggle("active");
//});

//Carroussel depoimentos
let currentIndex = 0;

function moveCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const totalCards = cards.length;
  const cardWidth = cards[0].offsetWidth;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalCards - 1;
  } else if (currentIndex >= totalCards) {
    currentIndex = 0;
  }

  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Para rotação automática (opcional)
setInterval(() => moveCarousel(1), 5500);




