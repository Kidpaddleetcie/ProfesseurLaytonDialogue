/* La construction des scènes */



/* Les scénarios */
//Scène 1
const s1 = [{
        s: "Bon sang, qu'est-ce qu'on peut s'ennuyer ici !",
        p: perso[2],
        e: emotion[3],
        d: decor[6],
        pos:"droite"
    },
    {
        s: "Mon petit Luke, cette paix est ce pourquoi luttent tout les vrais gentlemans !",
        p: perso[1],
        e: emotion[1],
        d: decor[6],
        pos:"gauche"
    },
    {
        s: "Je me demande ce que Descole est en train de faire !",
        p: perso[2],
        e: emotion[0],
        d: decor[6],
        pos:"droite"
    },
    {
        s: "...",
        p: perso[2],
        e: emotion[0],
        d: decor[6],
        pos:"droite"
    },
    {
        s: "...",
        p: perso[1],
        e: emotion[0],
        d: decor[6],
        pos:"gauche"
    },
    {
        s: "Professeur Layton, Descole et Hitler se sont emparés de Paris !",
        p: perso[6],
        e: emotion[2],
        d: decor[6],
        pos:"droite"
    },
    {
        s: "Hmmmm, que pouvouns-nous faire ?",
        p: perso[1],
        e: emotion[3],
        d: decor[6],
        pos:"gauche"
    },
    {
        s: "Il est écrit, \"seul Kass peut vaincre Descole !\" !",
        p: perso[6],
        e: emotion[1],
        d: decor[6],
        pos:"droite"
    },
    {
        s: "C'est génial mais qui sait ?",
        p: perso[2],
        e: emotion[3],
        d: decor[6],
        pos:"gauche"
    },
    {
        s: "Nous n'avons pas le temps de le présenter, on va le chercher !",
        p: perso[6],
        e: emotion[1],
        d: decor[6],
        pos:"droite"
    },
    {
        s: "Et une petite énigme pour se mettre en jambe ?",
        p: perso[1],
        e: emotion[1],
        d: decor[6],
        pos:"gauche"
    },
    {
        s: "Vous voulez plaisanter, professeur ?!",
        p: perso[2],
        e: emotion[3],
        d: decor[6],
        pos:"gauche"
    },
    {
        s: "Vroummmm nous sommes partis !",
        p: perso[6],
        e: emotion[1],
        d: decor[6],
        pos:"droite"
    },
    {
        s: "Woaw, à qui appartiennent toutes ces maisons ?",
        p: perso[2],
        e: emotion[1],
        d: decor[5],
        pos:"gauche"
        
    },
    {
        s: "Ce sont les baraquements du mal, Descole et Hitler s'y caches forcément !",
        p: perso[6],
        e: emotion[3],
        d: decor[5],
        pos:"droite"
    },
    {
        s: "Je suppose que tu vas nous y abandonner ?",
        p: perso[1],
        e: emotion[0],
        d: decor[5],
        pos:"gauche"
    },
    {
        s: "Bonne chance et bonne aventure !",
        p: perso[6],
        e: emotion[1],
        d: decor[5],
        pos:"droite"
    }
];

//Scène 2
const s2 = [{
        s: "Kass, c'est vous ?",
        p: perso[1],
        e: emotion[1],
        d: decor[2],
        pos:"gauche"
    },
    {
        s: "Oui, comment allez-vous ?",
        p: perso[7],
        e: emotion[3],
        d: decor[2],
        pos:"droite"
    },
    {
        s: "Bien mais nous avons besoin de vous pour vaincre Descole !",
        p: perso[1],
        e: emotion[0],
        d: decor[2],
        pos:"gauche"
    },
    {
        s: "Oh mince, je pensais qu'on en avait finit avec lui après la chute d'Hitler !",
        p: perso[7],
        e: emotion[3],
        d: decor[2],
        pos:"droite"
    },
    {
        s: "Il a aussi ressucité Hitler !",
        p: perso[2],
        e: emotion[2],
        d: decor[2],
        pos:"gauche"
    },
    {
        s: "D'accord... on n'est pas sortit de l'auberge !",
        p: perso[7],
        e: emotion[3],
        d: decor[2],
        pos:"droite"
    },
    {
        s: "Vous pouvez nous aidé !",
        p: perso[2],
        e: emotion[0],
        d: decor[2],
        pos:"gauche"
    },
    {
        s: "Contrairement à ce qu'aurait écrit Glin, je ne suis pas en mesure de vous aidé !",
        p: perso[7],
        e: emotion[0],
        d: decor[2],
        pos:"droite"
    },
    {
        s: "QUOI ?!",
        p: perso[2],
        e: emotion[2],
        d: decor[2],
        pos:"gauche"
    },
    {
        s: "...",
        p: perso[1],
        e: emotion[0],
        d: decor[0],
        pos:"gauche"
    },
    {
        s: "C'est une énigme ?",
        p: perso[1],
        e: emotion[1],
        d: decor[2],
        pos:"gauche"
    },
    {
        s: "Non !",
        p: perso[7],
        e: emotion[0],
        d: decor[2],
        pos:"droite"
    },
    {
        s: "QUOI ?!",
        p: perso[1],
        e: emotion[2],
        d: decor[2],
        pos:"gauche"
    },
    {
        s: "On a fait tout ça pour rien ?!",
        p: perso[2],
        e: emotion[2],
        d: decor[2],
        pos:"gauche"
    },
    {
        s: "J'ai un truc à vous révélé !",
        p: perso[7],
        e: emotion[1],
        d: decor[2],
        pos:"droite"
    },
    {
        s: "Vous savez où est Descole et vous avez une arme contre lui et Hitler ?!",
        p: perso[1],
        e: emotion[3],
        d: decor[2],
        pos:"gauche"
    },
    {
        s: "C'est exactement ça ! Prenez ce lance-patate et il se trouve dans mes toilettes depuis deux jours ! ",
        p: perso[7],
        e: emotion[1],
        d: decor[2],
        pos:"droite"
    },
    {
        s: "*Vous obtenez un lance-patate*",
        p: perso[1],
        e: emotion[1],
        d: decor[2],
        pos:"gauche"
    },
    {
        s: "Allons-y,Luke !",
        p: perso[1],
        e: emotion[1],
        d: decor[2],
        pos:"gauche"
    },

];

//Scène 3
const s3 = [{
        s: "Descole !",
        p: perso[1],
        e: emotion[0],
        d: decor[3],
        pos:"gauche"
    },
    {
        s: "Oh non !",
        p: perso[3],
        e: emotion[2],
        d: decor[3],
        pos:"droite"
    },
    {
        s: "*Pan* *Bim*",
        p: perso[0],
        e: emotion[1],
        d: decor[0],
        pos:"gauche"
    },
    {
        s: "Ah ahh ahhhh...",
        p: perso[3],
        e: emotion[1],
        d: decor[7],
        pos:"droite"
    },
    {
        s: "FIN",
        p: perso[0],
        e: emotion[0],
        d: decor[0],
        pos:"gauche"
    },
];