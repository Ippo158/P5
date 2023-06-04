const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats en boutique et en ligne",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format pour vos bureaux et events",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs de CMJN aux pantones",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants avec découpe laser sur mesure",
  },
];

// Index de la diapositive actuelle
let currentIndex = 0;

// Sélection des éléments du DOM
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");
const bulletPoints = document.getElementById("bullet-points");

// Vérification du bon fonctionnement des flèches
arrowLeft.addEventListener("click", () => {
  console.log("Clic sur la flèche gauche");
});

arrowRight.addEventListener("click", () => {
  console.log("Clic sur la flèche droite");
});

// Affichage de la diapositive à l'index donné
function displaySlide(index) {
  const slide = slides[index];
  bannerImg.src = `./assets/images/slideshow/${slide.image}`;
  bannerText.innerHTML = slide.tagLine;
}

// Création des bullets points
function createBulletPoints() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === currentIndex) {
      dot.classList.add("dot_selected");
    }
    bulletPoints.appendChild(dot);
  }
}

createBulletPoints();

// Mise à jour des bullets points
function updateBulletPoints() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentIndex);
  });
}

// Gestionnaire d'événement pour les flèches
arrowLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  displaySlide(currentIndex);
  updateBulletPoints();
});

arrowRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  displaySlide(currentIndex);
  updateBulletPoints();
});
