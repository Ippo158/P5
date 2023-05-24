const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments des flèches
const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');

// Ajout des écouteurs d'événements sur les flèches
arrowLeft.addEventListener('click', () => {
  console.log('Clic sur la flèche gauche');
});

arrowRight.addEventListener('click', () => {
  console.log('Clic sur la flèche droite');
});
