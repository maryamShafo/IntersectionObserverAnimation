// Sélectionner toutes les sections sur la page
let sections = document.querySelectorAll('section');
// Options pour l'observateur IntersectionObserver
let observerOptions = {
    //Le threshold est une valeur entre 0 et 1 qui indique la proportion de l'élément cible visible dans le viewport avant que le callback de l'observateur soit déclenché.
    // Déclencher lorsque 10% de l'élément est visible dans le viewport
    threshold: 0.1
};
// Fonction de callback pour l'IntersectionObserver
let observerCallback = (entries) => {
    // Boucler sur chaque entrée d'intersection
    entries.forEach(entry => {
        // Vérifie si l'élément est actuellement dans le viewport
        if (entry.isIntersecting) {
            // Ajoute la classe 'visible' pour déclencher l'animation
            entry.target.classList.add('visible');
            // Supprime la classe 'hidden' pour rendre l'élément visible
            entry.target.classList.remove('hidden');
        }
    });
};
//IntersectionObserver ---> qui permet de détecter lorsqu'un élément entre ou sort de la vue (viewport).
//Crée une nouvelle instance de IntersectionObserver.
// Créer un nouvel observateur IntersectionObserver 
// Crée une instance de IntersectionObserver avec le callback et les options
//observerCallback : La fonction de callback à exécuter lorsqu'un élément observé entre ou sort du viewport. Cette fonction est définie précédemment comme :
let observer = new IntersectionObserver(observerCallback, observerOptions);

// Ajoute une classe spécifique à chaque section et les observe
sections.forEach((section, index) => {
    // Ajoute une classe basée sur l'index de la section (section-1, section-2, etc.)
    //section-${index + 1} --> Crée une chaîne de caractères en utilisant l'index actuel, additionné de 1.Par exemple, si index est 0, section-${index + 1} devient section-1.
    //Si index est 1, section-${index + 1} devient section-2, et ainsi de suite.
    //Le + 1 est utilisé pour que la numérotation commence à 1 au lieu de 0.
    section.classList.add(`section-${index + 1}`);
    // Commence à observer la section
    observer.observe(section);
});