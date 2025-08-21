import { useEffect, useState, createContext, useContext } from "react";

// création de la constante alertMessages avec id, type et message
const alertMessages = [
    {
        id: 1,
        type: "bonus",
        message: "Vous trouvez un billet de 20€ par terre !"
    },
    {
        id: 2,
        type: "malus",
        message: "Vous avez oublié de payer votre loyer…"
    },
    {
        id: 3,
        type: "bonus",
        message: "Un ami vous invite au cinéma gratuitement !"
    },
    {
        id: 4,
        type: "malus",
        message: "Vous tombez malade…"
    }
];

// On créé le contexte
const StatisticContext = createContext();

// On créé un provider
export function StatisticProvider({ children }) {

    // États des statistiques, avec une valeur de débnut de partie
    const [energy, setEnergy] = useState(100);
    const [mood, setMood] = useState(100);
    const [money, setMoney] = useState(50);

    // État du GameOver et message de fin de partie
    const [gameOver, setGameOver] = useState(false);
    const [gameOverMessage, setGameOverMessage] = useState("");

    // États d'alerte
    const [alertMessage, setAlertMessage] = useState(null); // message d'alerte à afficher
    const [alertType, setAlertType] = useState(null);   // type d'alerte

    ////// Création des différentes fonctions du jeu
    function Eat() {
        // On change la valeur de l'energie en partant de sa valeur actuelle à laquelle on ajoute 20
        // Avec Math.min, on le fais selectionner la valeur la plus petite entre 100 (valeur max)
        // et la nouvelle valeur calculée
        setEnergy(actualValue => Math.min(actualValue + 20, 100)); // Augmente l'énergie de 20, max 100
        setMood(actualValue => Math.max(actualValue - 5, 0)); // Diminue l'humeur de 5, min 0
        setMoney(actualValue => Math.max(actualValue - 10, 0)); // Diminue l'argent de 10, min 0
    }

    function Work() {
        setEnergy(actualValue => Math.max(actualValue - 30, 0)); // Diminue l'énergie de 30, min 0
        setMood(actualValue => Math.max(actualValue - 10, 0)); // Diminue l'humeur de 10, min 0
        setMoney(actualValue => Math.min(actualValue + 40, 100)); // Augmente l'argent de 40, max 100 (choisi pour faciliter l'affichage des barres de niveau)
    }

    function Sleep() {
        setEnergy(actualValue => Math.min(actualValue + 50, 100)); // Augmente l'énergie de 50, max 100
        setMood(actualValue => Math.max(actualValue - 5, 0)); // Diminue l'humeur de 5, min 0
        // Ne change pas la valeur de l'argent
    }

    function Play() {
        setEnergy(actualValue => Math.max(actualValue - 10, 0)); // Diminue l'énergie de 10, min 0
        setMood(actualValue => Math.min(actualValue + 30, 100)); // Augmente l'humeur de 30, max 100
        setMoney(actualValue => Math.max(actualValue - 20, 0)); // Diminue l'argent de 20, min 0
    }


    ////// Création de la dégradation automatique des statistiques
    function degradeStats() {
        setEnergy(actualValue => Math.max(actualValue - 5, 0)); // Diminue l'énergie de 5, min 0
        setMood(actualValue => Math.max(actualValue - 5, 0)); // Diminue l'humeur de 5, min 0
        // argent ne change pas
    }

// mettre ici le code de test.jsx


    ////// Création de la function reset
    function resetStats() {
        setEnergy(100);
        setMood(100);
        setMoney(50);
        setGameOver(false);
        setGameOverMessage("");
        setAlertMessage(null);
        setAlertType(null);
    }

    ////// Création des evenements aléatoires
    // On utilise un useEffect pour executer ce code au chargement du composant
    useEffect(() => {
        // On créé la variable timeoutId pour arreter le timer lors du démontage
        let timeoutId;

        function getRandomEvent() {

            // On choisi un événement au hasard
            const randomEvent = alertMessages[Math.floor(Math.random() * alertMessages.length)];
            // On obtient un id au hasard en multipliant
            // la longueur du tableau par un nombre au hasard entre 0 et 1 (exclus)
            // et on arrondi a l'entier inferieur

            // On enregistre le message d'alerte et son type
            setAlertMessage(randomEvent.message);
            setAlertType(randomEvent.type);

            // On applique l'effet selon l'evenement
            if (randomEvent.id === 1) {
                setMoney(moneyValue => Math.min(moneyValue + 20, 100)); // bonus: billet de 20€
            } else if (randomEvent.id === 2) {
                setMoney(moneyValue => Math.max(moneyValue - 30, 0)); // malus: loyer -30€
            } else if (randomEvent.id === 3) {
                setMood(moodValue => Math.min(moodValue + 10, 100)); // bonus: sortie ciné +10
            } else if (randomEvent.id === 4) {
                setEnergy(energyValue => Math.max(energyValue - 15, 0)); // malus: maladie -15
            }


            // On relance le cycle avec un nouveau délai

            const newRandomDelay = Math.floor(Math.random() * 30000) + 30000;
            //  Math.random() génère un nombre aléatoire entre 0 et 1 que l'ont mulitpli par le délai minimun (30 secondes)
            //  Math.random() * 30000) va donner un nombre compris entre 0 et 30000 (exclus)
            //  On ajoute 30000 pour avoir le délai max 60 secondes
            //  Math.floor arrondit à l'entier inférieur

            timeoutId = setTimeout(getRandomEvent, newRandomDelay);

        }

        // Démarrage du cycle des évenements au montage du composant
        const FirstRandomDelay = Math.floor(Math.random() * 30000) + 30000;
        timeoutId = setTimeout(getRandomEvent, FirstRandomDelay);

        return () => clearTimeout(timeoutId); // pour arreter le timer au demontage du composant (sinon tourne en boucle)

    }, []) // dépendance vide car on veut que cela s'exécute qu'une seule fois au chargement


    ////// Gestion du Gameover
    useEffect(() => {
        if (energy === 0) {
            setGameOver(true); // On attribue "true" a Gameover qui servira de condition de fin de partie 
            setGameOverMessage("Votre personnage s'est évanoui d’épuisement…");
        } else if (mood === 0) {
            setGameOver(true);
            setGameOverMessage("Votre personnage est trop triste pour continuer…");
        } else if (money === 0) {
            setGameOver(true);
            setGameOverMessage("Votre personnage fait faillite…");
        }
    }, [energy, mood, money]); // On surveille les changements des statistiques (dépendance) pour déclencher le GameOver

    return (
        <StatisticContext.Provider value={{ energy, setEnergy, mood, setMood, money, setMoney, resetStats, Eat, Work, Sleep, Play, alertMessage, alertType, gameOver,gameOverMessage }}>
            {children}
        </StatisticContext.Provider>
    );
}

// On créé un hook pour utiliser le contexte
export function useStatistic() {
    return useContext(StatisticContext);
}