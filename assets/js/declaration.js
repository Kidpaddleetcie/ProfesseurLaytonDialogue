/*Fonctionnement des listes */
// Chaque liste regroupe un ensemble de terme pouvant être exploiter par scène en faisant un lien avec un contenu externe!
// 
// LA LISTE perso PERMET DE:
// -Renseigner le nom du personnage,
// -Compléter le chemin d'accès au dossier du personnage.
//
// LA LISTE emotion PERMET DE:
// -Compléter le chemin d'accès à l'image du personnage.
//
// LA LISTE decor PERMET DE:
// -Compléter le chemin d'accès à l'image du décor.


/*Déclaration des listes */

// Liste des personnages
const perso = ["Personne", "Layton", "Luke", "Descole", "Pr. Luigi", "Tintin", "Glin", "Kass", "Hitler"];

// Liste des émotions
const emotion = ["Neutre", "Heureux", "Triste", "Bruh"];

// Liste des décors
const decor = ["Noir", "Chambre", "Salle", "Toilette", "Paris", "Voiture", "Bureau", "Hopital"];


/*Déclaration des zones */

//Décor
const bg = document.getElementById("background");

//Nom du personnage
const name = document.getElementById("name");

//Phrase du personnage
const tb = document.getElementById("dialogue");

//Le fond du nom du personnage ainsi que sa phrase
const t = document.getElementById("textbox");

//L'image du personnage de gauche
const p1 = document.getElementById("p1");

// L'image du personnage de droite
const p2 = document.getElementById("p2");

