  // Animation du logo

document.addEventListener("DOMContentLoaded", function () {

  var banner = document.querySelector(".banner");
  var logo = document.querySelector(".banner img");

  var bannerHeight = banner.offsetHeight;
  var logoHeight = logo.offsetHeight * 1.1;

  var hasChanged = false;

  window.addEventListener("scroll", function () {

    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if ((scrollTop > 0) && (scrollTop < bannerHeight - logoHeight)) {
      
      if (!hasChanged) {
        logo.classList.add("fixed");
        hasChanged = true;
      }

    } else if (scrollTop >= bannerHeight - logoHeight) {

      logo.classList.remove("fixed");
      logo.classList.add("absolute");
      hasChanged = true;
    } 
    
  });
});


// Fonction pour diviser le texte en mots et ajouter des spans avec la classe anim-titre + index du mot dans le titre
function splitTextIntoSpans(element) {
  const text = element.textContent;
  element.innerHTML = ''; // Effacer le texte d'origine
  const words = text.split(' ');
  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word;
    if (index < words.length - 1) {
      span.innerHTML += ' '; // Ajouter un espace entre les mots
    }
    span.classList.add(`anim-titre-${index + 1}`);
    element.appendChild(span);
  });
}

// Observer chaque élément individuellement
const elementsToObserve = document.querySelectorAll('.anim-titre-initial');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Ajout classe d'animation lorsque l'élément devient visible
   

      // Divisez le texte en mots et ajoutez des spans avec la classe anim-titre
      splitTextIntoSpans(entry.target);

      // Arrêtez d'observer l'élément après ajout de la classe
      observer.unobserve(entry.target);

      entry.target.classList.remove('anim-titre-initial');
    }
  });
}, { threshold: 1 }); // Se déclenche lorsque 50% de l'élément est visible

// Observer chaque élément individuellement
elementsToObserve.forEach(element => {
  observer.observe(element);
});

