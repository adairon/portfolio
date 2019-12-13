// CONSTANTES : 
// pour gestion du comportement du menu (ouverture, fermetrue, défilement)
const bouton = document.querySelector('.nav_button');
const menu = document.querySelector('#menu');
const icone = document.querySelector('#icon');
const menuLinks = document.querySelectorAll('.navbar_links a');
const logo = document.querySelector('.logo');
const nav = document.querySelector('.navigation');
const body = document.querySelector('body');

/*
Menu chaché par défaut.
Au clic :
- si menu caché, alors devient visible et le menu burger devient une croix
- sinon si menu visible alors devient caché et la croix devient menu burger

==> méthode avec la classe hidden plus simple car permet d'afficher le menu en desktop
en modifiant la classe dans les media query CSS
*/



//fermer le menu au clic sur une ancre :
// boucle pour rendre cliquable tous les liens du menu :
for (let mL of menuLinks) {
    mL.addEventListener('click', clicMenu);
};
// fonction pour fermer le menu au clic sur un lien et remplacer la croix par le menu burger :
function clicMenu() {
    if (menu.className == 'visible') {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
        icone.classList.remove('fa-times');
        icone.classList.add('fa-bars');
    }
};

bouton.addEventListener('click',auClic);
function auClic(){
    if (menu.className=='hidden')
    {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
        icone.classList.remove('fa-bars');
        icone.classList.add('fa-times');
    } 
    else if (menu.className=='visible')
    {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
        icone.classList.remove('fa-times');
        icone.classList.add('fa-bars');
    }
};
// fermer le menu au clic sur le logo :
logo.addEventListener('click', clicLogo);
function clicLogo(){
    if(menu.className=='visible')
    {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
        icone.classList.remove('fa-times');
        icone.classList.add('fa-bars');
    }
}



/* methode avec style en ligne display none ou block :
// en mode desktop : menu visible Sinon : menu caché
// on ajoute un écouteur d'évènement lié à la taille de la fenêtre
// probleme, le menu disparait au clic sur une ancre et ne ré-apparait qu'en redimensionnant la fenêtre
window.addEventListener('resize', menuVisible);

function menuVisible() {
    // si la fenêtre est d'une largeur min de 992px, alors le menu est visible
    if (window.matchMedia("(min-width: 992px)").matches) {
        menu.style.display = 'block';
    } else {
        // sinon, il est invisible
        menu.style.display = 'none';
    }
}
bouton.addEventListener('click', auClic);

function auClic() {
    
    if (menu.style.display == 'none') {
        menu.style.display = 'block';
        icone.classList.remove('fa-bars');
        icone.classList.add('fa-times');
    } else if (menu.style.display == 'block') {
        menu.style.display = 'none';
        icone.classList.remove('fa-times');
        icone.classList.add('fa-bars');
    }
};
*/

/* 
UNIQUEMENT En mode Desktop : réduire la barre de navigation et lui ajouter un fond au scroll (de 80px par ex)
Au retour en haut de la page, lui enlever ces attributs
=> on ajoute la classe nav-scroll qui réduit la barre de nav*/
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.add('nav-scroll')
    } else {
        nav.classList.remove('nav-scroll');
    }
}



/*
pour afficher les détails des réalisations : 
    au clic sur le "+", un encart s'affiche et l'arrière plan devient flou et tous les autres encarts se ferment
    au clic sur "fermer", l'encart disparait et l'arrière pla redevient net

    tous les passer en display none : au clic, on passe en display block
*/

// tous les elts sont placés dans un tableau :
const btnPlus = document.querySelectorAll('.vignette');
const btnFermer = document.querySelectorAll('.btnFermer');
const detail = document.querySelectorAll('.vignette_detail');
// constante vignettes pour le flou :
const vignettes = document.querySelector('.vignettes');


// boucle sur les détails pour les rendre invisibla e(par ajout d'une classe gérée en CSS)
for (d of detail) {d.classList.add('invisible')};

// ajout d'un écouteur d'évènement sur les boutons + 
for (bP of btnPlus){
    bP.addEventListener('click',surClic);
}
/* fonction au clic sur la vignette : 
    - fermer les autres fenetres
    - ouvrir la fenêtre correspondante à la vignette cliquée
    - ajouter un flou sur l'arrière plan (limité à la section)
*/
function surClic(){
    for (d of detail) {d.classList.add('invisible')};
    let iPlus = this.dataset.index;
    detail[iPlus].classList.remove('invisible');
    vignettes.classList.add('flou');
};


// ajout d'un écouteur d'évènement sur les boutons "fermer" 
for (bF of btnFermer){
    bF.addEventListener('click',clicFermer);
}
// fonction pour fermer le détail au clic sur "fermer" (et enlever le flou):
function clicFermer(){
    let iFerm = this.dataset.index;
    detail[iFerm].classList.add('invisible')
    vignettes.classList.remove('flou');
};



/*================================== [ ANCIENNE VERSION ] ============================================
======================================================================================================


//pour ouverture des réalisations :
const vignettes = document.querySelector('.vignettes');
// Réalisation 1 : 
const btnPlus1 = document.querySelector('.vignette1');
const btnFermer1 = document.querySelector('.btnFermer1');
const detail1 = document.querySelector('.detail1');
// Réalisation 2 : 
const btnPlus2 = document.querySelector('.vignette2');
const btnFermer2 = document.querySelector('.btnFermer2');
const detail2 = document.querySelector('.detail2');
// Réalisation 3 : 
const btnPlus3 = document.querySelector('.vignette3');
const btnFermer3 = document.querySelector('.btnFermer3');
const detail3 = document.querySelector('.detail3');
// Réalisation 1 : 

btnPlus1.addEventListener('click', surClic1);

function surClic1() {
    detail1.classList.remove('invisible');
    detail2.classList.add('invisible');
    detail3.classList.add('invisible');
    detail1.classList.add('visible');
    vignettes.classList.add('flou');
}

btnFermer1.addEventListener('click', fermer1);

function fermer1() {
    detail1.classList.add('invisible');
    detail1.classList.remove('visible');
    vignettes.classList.remove('flou');
}

// Réalisation 2 : 

btnPlus2.addEventListener('click', surClic2);

function surClic2() {
    detail2.classList.remove('invisible');
    detail1.classList.add('invisible');
    detail3.classList.add('invisible');
    detail2.classList.add('visible');
    vignettes.classList.add('flou');
}

btnFermer2.addEventListener('click', fermer2);

function fermer2() {
    detail2.classList.add('invisible');
    detail2.classList.remove('visible');
    vignettes.classList.remove('flou');
}

// Réalisation 3 : 

btnPlus3.addEventListener('click', surClic3);

function surClic3() {
    detail3.classList.remove('invisible');
    detail1.classList.add('invisible');
    detail2.classList.add('invisible');
    detail3.classList.add('visible');
    vignettes.classList.add('flou');
}

btnFermer3.addEventListener('click', fermer3);

function fermer3() {
    detail3.classList.add('invisible');
    detail3.classList.remove('visible');
    vignettes.classList.remove('flou');
}


*/