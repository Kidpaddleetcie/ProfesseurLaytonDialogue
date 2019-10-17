/* Les scénarios */
//Scène 1
const s1 = [{
        s: "Bon sang, qu'est-ce qu'on peut s'ennuyer ici !",
        p: perso[2],
        e: emotion[3],
        d: decor[6],
        pos:"droite",
        a:1
    },
    {
        s: "Mon petit Luke, cette paix est ce pourquoi luttent tout les vrais gentlemans !",
        p: perso[1],
        e: emotion[1],
        d: decor[6],
        pos:"gauche",
        a:1
    },
    {
        s: "Je me demande ce que Descole est en train de faire !",
        p: perso[2],
        e: emotion[0],
        d: decor[6],
        pos:"droite",
        a:0
    },
    {
        s: "...",
        p: perso[2],
        e: emotion[0],
        d: decor[6],
        pos:"droite",
        a:0
    },
    {
        s: "...",
        p: perso[1],
        e: emotion[0],
        d: decor[6],
        pos:"gauche",
        a:0
    },
    {
        s: "Professeur Layton, Descole et Hitler se sont emparés de Paris !",
        p: perso[6],
        e: emotion[2],
        d: decor[6],
        pos:"droite",
        a:1
    },
    {
        s: "Hmmmm, que pouvouns-nous faire ?",
        p: perso[1],
        e: emotion[3],
        d: decor[6],
        pos:"gauche",
        a:0
    },
    {
        s: "Il est écrit, \"seul Kass peut vaincre Descole !\" !",
        p: perso[6],
        e: emotion[1],
        d: decor[6],
        pos:"droite",
        a:0
    },
    {
        s: "C'est génial mais qui sait ?",
        p: perso[2],
        e: emotion[3],
        d: decor[6],
        pos:"gauche",
        a:0
    },
    {
        s: "Nous n'avons pas le temps de le présenter, on va le chercher !",
        p: perso[6],
        e: emotion[1],
        d: decor[6],
        pos:"droite",
        a:0
    },
    {
        s: "Et une petite énigme pour se mettre en jambe ?",
        p: perso[1],
        e: emotion[1],
        d: decor[6],
        pos:"gauche",
        a:0
    },
    {
        s: "Vous voulez plaisanter, professeur ?!",
        p: perso[2],
        e: emotion[3],
        d: decor[6],
        pos:"gauche",
        a:0
    },
    {
        s: "Vroummmm nous sommes partis !",
        p: perso[6],
        e: emotion[1],
        d: decor[6],
        pos:"droite",
        a:0
    },
    {
        s: "Woaw, à qui appartiennent toutes ces maisons ?",
        p: perso[2],
        e: emotion[1],
        d: decor[5],
        pos:"gauche",
        a:1
        
    },
    {
        s: "Ce sont les baraquements du mal, Descole et Hitler s'y caches forcément !",
        p: perso[6],
        e: emotion[3],
        d: decor[5],
        pos:"droite",
        a:0
    },
    {
        s: "Je suppose que tu vas nous y abandonner ?",
        p: perso[1],
        e: emotion[0],
        d: decor[5],
        pos:"gauche",
        a:1
    },
    {
        s: "Bonne chance et bonne aventure !",
        p: perso[6],
        e: emotion[1],
        d: decor[5],
        pos:"droite",
        a:0
    }
];

//Scène 2
const s2 = [{
        s: "Kass, c'est vous ?",
        p: perso[1],
        e: emotion[1],
        d: decor[2],
        pos:"gauche",
        a:1
    },
    {
        s: "Oui, comment allez-vous ?",
        p: perso[7],
        e: emotion[3],
        d: decor[2],
        pos:"droite",
        a:1
    },
    {
        s: "Bien mais nous avons besoin de vous pour vaincre Descole !",
        p: perso[1],
        e: emotion[0],
        d: decor[2],
        pos:"gauche",
        a:0
    },
    {
        s: "Oh mince, je pensais qu'on en avait finit avec lui après la chute d'Hitler !",
        p: perso[7],
        e: emotion[3],
        d: decor[2],
        pos:"droite",
        a:0
    },
    {
        s: "Il a aussi ressucité Hitler !",
        p: perso[2],
        e: emotion[2],
        d: decor[2],
        pos:"gauche",
        a:1
    },
    {
        s: "D'accord... on n'est pas sortit de l'auberge !",
        p: perso[7],
        e: emotion[3],
        d: decor[2],
        pos:"droite",
        a:0
    },
    {
        s: "Vous pouvez nous aidé !",
        p: perso[2],
        e: emotion[0],
        d: decor[2],
        pos:"gauche",
        a:0
    },
    {
        s: "Contrairement à ce qu'aurait écrit Glin, je ne suis pas en mesure de vous aidé !",
        p: perso[7],
        e: emotion[0],
        d: decor[2],
        pos:"droite",
        a:0
    },
    {
        s: "QUOI ?!",
        p: perso[2],
        e: emotion[2],
        d: decor[2],
        pos:"gauche",
        a:0
    },
    {
        s: "...",
        p: perso[1],
        e: emotion[0],
        d: decor[0],
        pos:"gauche",
        a:0
    },
    {
        s: "C'est une énigme ?",
        p: perso[1],
        e: emotion[1],
        d: decor[2],
        pos:"gauche",
        a:0
    },
    {
        s: "Non !",
        p: perso[7],
        e: emotion[0],
        d: decor[2],
        pos:"droite",
        a:0
    },
    {
        s: "QUOI ?!",
        p: perso[1],
        e: emotion[2],
        d: decor[2],
        pos:"gauche",
        a:0
    },
    {
        s: "On a fait tout ça pour rien ?!",
        p: perso[2],
        e: emotion[2],
        d: decor[2],
        pos:"gauche",
        a:0
    },
    {
        s: "J'ai un truc à vous révélé !",
        p: perso[7],
        e: emotion[1],
        d: decor[2],
        pos:"droite",
        a:0
    },
    {
        s: "Vous savez où est Descole et vous avez une arme contre lui et Hitler ?!",
        p: perso[1],
        e: emotion[3],
        d: decor[2],
        pos:"gauche",
        a:0
    },
    {
        s: "C'est exactement ça ! Prenez ce lance-patate et il se trouve dans mes toilettes depuis deux jours ! ",
        p: perso[7],
        e: emotion[1],
        d: decor[2],
        pos:"droite",
        a:0
    },
    {
        s: "*Vous obtenez un lance-patate*",
        p: perso[1],
        e: emotion[1],
        d: decor[2],
        pos:"gauche",
        a:0
    },
    {
        s: "Allons-y,Luke !",
        p: perso[1],
        e: emotion[1],
        d: decor[2],
        pos:"gauche",
        a:0
    },

];

//Scène 3
const s3 = [{
        s: "Descole !",
        p: perso[1],
        e: emotion[0],
        d: decor[3],
        pos:"gauche",
        a:1
    },
    {
        s: "Oh non !",
        p: perso[3],
        e: emotion[2],
        d: decor[3],
        pos:"droite",
        a:1
    },
    {
        s: "*Pan* *Bim*",
        p: perso[0],
        e: emotion[1],
        d: decor[0],
        pos:"gauche",
        a:0
    },
    {
        s: "Ah ahh ahhhh...",
        p: perso[3],
        e: emotion[1],
        d: decor[7],
        pos:"droite",
        a:0
    },
    {
        s: "FIN",
        p: perso[0],
        e: emotion[0],
        d: decor[0],
        pos:"gauche",
        a:0
    },
];