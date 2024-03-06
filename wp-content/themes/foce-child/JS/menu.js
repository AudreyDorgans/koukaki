// Récupérez l'élément avec l'id "nav-icon4"
var navIcon = document.getElementById("nav-icon4");

// Ajoutez un écouteur d'événements de clic à l'élément
navIcon.addEventListener("click", function() {
    // Vérifiez si l'élément a déjà la classe "open"
    var isOpen = navIcon.classList.contains("open");

    // Si l'élément a la classe "open", retirez-la; sinon, ajoutez-la
    if (isOpen) {
        navIcon.classList.remove("open");
    } else {
        navIcon.classList.add("open");
    }
});
