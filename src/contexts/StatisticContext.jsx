import { useEffect, useState, createContext, useContext } from "react";

// On créé le contexte
const StatisticContext = createContext();

// On créé un provider
export function StatisticProvider({ children }) {

    // On créé un état pour chaque statistique, avec une valeur par defaut
    const [energy, setEnergy] = useState(100);
    const [mood, setMood] = useState(100);
    const [money, setMoney] = useState(50);


    // Création des différentes fonctions du jeu
    function Eat() {
        // On change la valeur de l'energie en partant de sa valeur actuelle à laquelle on ajoute 20
        // Avec Math.min, on le fais selectionner la valeur la plus petite entre 100 (valeur max)
        // et la nouvelle valeur calculée
        setEnergy(actualValue => Math.min(actualValue + 20, 100)); // Augmente l'énergie de 20, max 100
        setMood (actualValue => Math.max(actualValue -5, 0)); // Diminue l'humeur de 5, min 0
        setMoney (actualValue => Math.max(actualValue -10, 0)); // Diminue l'argent de 10, min 0
    }

    function Work(){
        setEnergy(actualValue => Math.max(actualValue - 30, 0)); // Diminue l'énergie de 30, min 0
        setMood (actualValue => Math.max(actualValue - 10, 0)); // Diminue l'humeur de 10, min 0
        setMoney (actualValue => actualValue + 40); // Augmente l'argent de 40, pas de plafond
    }

    function Sleep(){
        setEnergy(actualValue => Math.min(actualValue + 50, 100)); // Augmente l'énergie de 50, max 100
        setMood (actualValue => Math.max(actualValue - 5, 0)); // Diminue l'humeur de 5, min 0
        // Ne change pas la valeur de l'argent
    }

    function Play(){
        setEnergy(actualValue => Math.max(actualValue - 10, 0)); // Diminue l'énergie de 10, min 0
        setMood (actualValue => Math.min(actualValue + 30, 100)); // Augmente l'humeur de 30, max 100
        setMoney (actualValue => Math.max(actualValue -20, 0)); // Diminue l'argent de 20, min 0
    }

    // Création de la dégradadtion automatique des statistiques
    function degradeStats(){
        setEnergy(actualValue => Math.max(actualValue - 5, 0)); // Diminue l'énergie de 5, min 0
        setMood(actualValue => Math.max(actualValue - 5, 0)); // Diminue l'humeur de 5, min 0
        // argent ne change pas
    }

    // On utilise un useEffect pour executer ce code aprés le chargement du composant
    useEffect(() => {
        // Création de la constante degradation
        // On utilise un setInterval pour diminuer les statistiques toutes les 10 secondes
        const degradation = setInterval(degradeStats, 10000); // Toutes les 10 secondes

        return () => clearInterval(degradation); // On arrete le timer de la dégradation lorsque la page est fermée (au démontage)
    }, []); // Il n'y a pas de dépendances, donc cela ne s'exécute qu'au montage

    // Création de la function reset
    function resetStats(){
        setEnergy(100);
        setMood(100);
        setMoney(50);
    }

    return (
        <StatisticContext.Provider value={{ energy, setEnergy, mood, setMood, money, setMoney, resetStats, Eat, Work, Sleep, Play }}>
            {children}
        </StatisticContext.Provider>
    );
}

// On créé un hook pour utiliser le contexte
export function useStatistic() {
    return useContext(StatisticContext);
}