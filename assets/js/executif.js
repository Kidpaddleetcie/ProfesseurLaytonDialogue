/* Fonctionnement de l'executif*/
// Précédemment, nous avons déclarés les différentes zones pouvant changer selon l'avancement du scénario !
// Nous avons aussi établis les scenes au niveau du déroulement donc il ne reste plus qu'à assembler le tout !
//
// COMPOSITION D'UNE FONCTION sceneNBR (partie 1)
// --Tout commence par une condition qui vérifie si on n'est pas en-dehors de la limite de la séquence--
// Dans cette condition, on lance le traitement de la fonction sceneNBRm.
// 
// COMPOSITION D'UNE FONCTION sceneNBRm
// On déclare, pour abréger le code, que x*NBR est le contenu de la scène (sNBR) à un index donné (i*NBR).
// On change le nom du personnage par celui qui parle.
// On change la phrase du personnage par celui qui parle.
// On change change le décor.
//
// --On commence à traiter la partie de droite de l'interface--
// On change la direction de la bulle à droite.
// On change l'image du personnage.
// On change le alt de l'image du personnage.
// On assombrit l'image de gauche.
// On met l'image de droite sans modification de luminosité.
//
// -- -- On prend en considération la présence d'animation -- --
// On ajoute la classe qui anime une entrée pour l'image.
// -- -- FIN -- --
//
// -- -- On prend en considération la non-présence d'animation -- --
// On retire la classe qui anime une entrée pour l'image.
// -- -- FIN -- --
//
// --FIN--
//
// -- On continue en traitant la partie de gauche de l'interface --
//
// On change la direction de la bulle à gauche.
// On change l'image du personnage.
// On change le alt de l'image du personnage.
// On assombrit l'image de droite.
// On met l'image de gauche sans modification de luminosité.
//
// -- -- On prend en considération la présence d'animation -- --
// On ajoute la classe qui anime une entrée pour l'image.
// -- -- FIN -- --
//
// -- -- On prend en considération la non-présence d'animation -- --
// On retire la classe qui anime une entrée pour l'image.
//-- -- FIN -- --
//
// -- FIN --
//
// COMPOSITION D'UNE FONCTION sceneNBR (partie 2)
// On incrémente de 1 l'accumulateur qui sert à gérer l'index du tableau sNBR !
// On change le contenu du bouton bNBR.
// On fait disparaître les autres boutons.
//
// -- -- On conditionne à la phrase de la scène  -- --
// On change le contenu du bouton bNBR.
// -- -- FIN -- --
//--FIN--
//
//--On termine les conditions avec la prise en compte de l'accumulateur (i*NBR) qui est supérieur nombre de phases du scénario (sNBR)--
// On refais apparaître les boutons précédemment enlevés.
// On enlève le bouton de la scène actuelle ( bNBR).
// On recharge la page par flemme de remettre tout à zéro !
// --FIN--




/*Préparation */

// Boutons 3 scènes (bNBR)
document.getElementById("b1").addEventListener("click", scene1);
document.getElementById("b2").addEventListener("click", scene2);
document.getElementById("b3").addEventListener("click", scene3);
// // Texte initial dans les boutons
function scene_name() {
    document.getElementById("b1").innerText = "Scène 1";
    document.getElementById("b2").innerText = "Scène 2";
    document.getElementById("b3").innerText = "Scène 3";
}
const type_sound = new Audio("assets/js/type.wav");


// Les accumulateurs (i*NBR)
let i = 0;
let ii = 0;
let iii = 0;

/*Les fonctions des scènes*/

// Scène 1
function scene1() {
    if (i < s1.length) {
        scene1m();
        i++;
        document.getElementById("b1").innerText = i + "/" + (s1.length) + "  >>";
        document.getElementById("b2").style.display = "none";
        document.getElementById("b3").style.display = "none";
        if (i === s1.length) {
            document.getElementById("b1").innerText = i + "/" + (s1.length) + "  >|";
        }
    } else {
        scene_name();
        document.getElementById("b2").style.display = "inline-block";
        document.getElementById("b3").style.display = "inline-block";
        document.getElementById("b1").style.display = "none";
        window.location.reload()
    }
    function scene1m() {
        let x = s1[i]
        nom.innerText = x.p;
        const typewriter = new Typewriter(tb, {
            delay: 50,
            loop: false,
        });
        typewriter.typeString(x.s)
            .callFunction((state) => {
                state.elements.cursor.style.display = 'none';
            })
            .start();
        bg.style.backgroundImage = 'url(' + 'assets/img/decors/' + x.d + '.png)';
        if (x.pos === "droite") {
            t.style.backgroundImage = 'url(assets/img/TextBox-droite.png)';
            p2.src = "assets/img/personnages/" + x.p + "/" + x.e + ".png";
            p2.alt = x.p;
            p1.style.filter="brightness(50%)";
            p2.style.filter="brightness(100%)";
            if(x.a===1){
                p2.classList.add("entrep2");
            }else{
                p2.classList.remove("entrep2");
            }
        } else {
            t.style.backgroundImage = 'url(assets/img/TextBox-gauche.png)';
            p1.src = "assets/img/personnages/" + x.p + "/" + x.e + ".png";
            p1.alt = x.p;
            p2.style.filter="brightness(50%)";
            p1.style.filter="brightness(100%)";
            if(x.a===1){
                p1.classList.add("entrep1");
            }else{
                p1.classList.remove("entrep1");
            }
        }
    }
}

// Scène 2
function scene2() {
    if (ii < s2.length) {
        scene2m();
        ii++;
        document.getElementById("b1").style.display = "none";
        document.getElementById("b2").innerText = ii + "/" + (s2.length) + "  >>";
        document.getElementById("b3").style.display = "none";
        if (ii === s2.length) {
            document.getElementById("b2").innerText = ii + "/" + (s2.length) + "  >|";
        }
    } else {
        scene_name();
        document.getElementById("b1").style.display = "inline-block";
        document.getElementById("b3").style.display = "inline-block";
        document.getElementById("b2").style.display = "none";
        window.location.reload()
    }
       function scene2m() {
        let xx = s2[ii]
        nom.innerText = xx.p;
        const typewriter = new Typewriter(tb, {
            delay: 50,
            loop: false
        });
        typewriter.typeString(xx.s)
            .callFunction((state) => {
                state.elements.cursor.style.display = 'none';
            })
            .start();
        bg.style.backgroundImage = 'url(' + 'assets/img/decors/' + xx.d + '.png)';
        if (xx.pos === "droite") {
            t.style.backgroundImage = 'url(assets/img/TextBox-droite.png)';
            p2.src = "assets/img/personnages/" + xx.p + "/" + xx.e + ".png";
            p2.alt = xx.p;
            p1.style.filter="brightness(50%)";
            p2.style.filter="brightness(100%)";           
            if(xx.a===1){
                p2.classList.add("entrep2");
            }else{
                p2.classList.remove("entrep2");
            }
        } else {
            t.style.backgroundImage = 'url(assets/img/TextBox-gauche.png)';
            p1.src = "assets/img/personnages/" + xx.p + "/" + xx.e + ".png";
            p1.alt = xx.p;
            p2.style.filter="brightness(50%)";
            p1.style.filter="brightness(100%)";
            if(xx.a===1){
                p1.classList.add("entrep1");
            }else{
                p1.classList.remove("entrep1");
            }
        }
    }
}

// Scène 3
function scene3() {
    if (iii < s3.length) {
        scene3m();
        document.getElementById("b1").style.display = "none";
        document.getElementById("b2").style.display = "none";
        document.getElementById("b3").innerText = iii + "/" + (s3.length) + "  >>";
        iii++;
        if (iii === s3.length) {
            document.getElementById("b3").innerText = iii + "/" + (s3.length) + "  >|";
        }
    } else {
        scene_name();
        document.getElementById("b1").style.display = "inline-block";
        document.getElementById("b2").style.display = "inline-block";
        document.getElementById("b3").style.display = "none";
        window.location.reload()
    }
    function scene3m() {
        let xxx = s3[iii]
        nom.innerText = xxx.p;
        const typewriter = new Typewriter(tb, {
            delay: 50,
            loop: false
        });
        typewriter.typeString(xxx.s)
            .callFunction((state) => {
                state.elements.cursor.style.display = 'none';
            })
            .start();
        bg.style.backgroundImage = 'url(' + 'assets/img/decors/' + xxx.d + '.png)';
        if (xxx.pos === "droite") {
            t.style.backgroundImage = 'url(assets/img/TextBox-droite.png)';
            p2.src = "assets/img/personnages/" + xxx.p + "/" + xxx.e + ".png";
            p1.style.filter="brightness(50%)";
            p2.style.filter="brightness(100%)";
            p2.alt = xxx.p;
            if(xxx.a===1){
                p2.classList.add("entrep2");
            }else{
                p2.classList.remove("entrep2");
            }
        } else {
            t.style.backgroundImage = 'url(assets/img/TextBox-gauche.png)';
            p1.src = "assets/img/personnages/" + xxx.p + "/" + xxx.e + ".png";
            p1.alt = xxx.p;
            p2.style.filter="brightness(50%)";
            p1.style.filter="brightness(100%)";
            if(xxx.a===1){
                p2.classList.add("entrep1");
            }else{
                p2.classList.remove("entrep1");
            }
        }
    }
}
