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


// Fonction pour gérer les vitesses de rotation des fleurs

document.addEventListener("DOMContentLoaded", function() {
  var scroll = false;

  window.addEventListener('scroll', function() {
    scroll = true;

    // Ajuste les propriétés lors du défilement
    document.documentElement.style.setProperty('--animation-duration', '0.5s');
    document.documentElement.style.setProperty('--animation-delay', '0s');

    // Réinitialise les propriétés après un délai d'inactivité de défilement
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(function() {
      scroll = false;
      document.documentElement.style.setProperty('--animation-duration', '2s');
      document.documentElement.style.setProperty('--animation-delay', '2s');
    }, 200); 
  });
});







// Fonction pour diviser le texte des titres en mots et ajouter des spans avec la classe anim-titre + index du mot dans le titre

function separeTexteDansSpan(element) {

  const text = element.textContent; // Extrait le contenu texte de l'élément passé en argument et le stocke dans la variable text / propriété native

  element.innerHTML = ''; // Efface le contenu HTML de l'élément passé en argument. Cela prépare l'élément à être rempli de nouveau contenu / propriété native

  const words = text.split(' '); // Méthode native / Divise la chaîne de texte en un tableau de mots en utilisant l'espace comme délimiteur. Les mots sont stockés dans un tableau appelé words.

  words.forEach((word, index) => { // Méthode native / Itère sur chaque mot du tableau words. La fonction fléchée prend deux arguments, le mot actuel (word) et l'index du mot dans le tableau (index). 

    const span = document.createElement('span'); // À chaque itération, un nouvel élément <span> est créé / fonction native.

    span.textContent = word; // Le contenu texte de ce nouvel élément <span> est défini comme étant le mot actuel de l'itération.

    span.classList.add(`anim-titre-${index + 1}`); // Méthode native / Ajout de classe à l'élément <span>. La classe est créée en concaténant la chaîne "anim-titre-" avec l'index incrémenté de 1.
    element.appendChild(span); //L'élément <span> est ajouté à l'élément passé en argument.
  });
}

// Observer chaque élément individuellement
const elementsToObserve = document.querySelectorAll('.anim-titre-initial'); // Méthode native / Récupère tous les éléments du DOM qui ont la classe CSS "anim-titre-initial", les éléments seront observés pour leur visibilité.

const observer = new IntersectionObserver(entries => { // Crée un nouvel objet IntersectionObserver, qui permet de surveiller le fait qu'un élément entre ou sort de la zone d'affichage (viewport).
  entries.forEach(entry => { // Itèration sur les entrées (éléments observés) fournies par l'observateur.
    if (entry.isIntersecting) { //On vérifie si l'élément observé est en intersection avec la zone d'affichage (visible à l'écran).
    
      // Appel de la fonction splitTextIntoSpans pour diviser le texte de l'élément en mots et ajouter des éléments <span> avec la classe anim-titre-idex+1.
      separeTexteDansSpan(entry.target);

      // Arret de l'observation de l'élément après avoir ajouté les classes, car l'animation a été effectuée.
      observer.unobserve(entry.target);

      // Retire la classe initiale
      entry.target.classList.remove('anim-titre-initial');
    }
  });
}, { threshold: 0.9 }); // COnfiguration de l'observateur à 90% de l'affichage

// Itération sur tous les éléments récupérés avec querySelectorAll et observation de chaque élément individuellement.
elementsToObserve.forEach(element => {
  observer.observe(element);
});

