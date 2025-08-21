import { useEffect, useState, createContext, useContext } from "react";

// On créé le contexte
const StatisticContext = createContext();

// On créé un provider
export function StatisticProvider({ children }) {

    // On créé un état pour chaque statistique, avec une valeur par defaut
    const [energy, setEnergy] = useState(100);
    const [mood, setMood] = useState(100);
    const [money, setMoney] = useState(50);

    // Création de la function reset
    function resetStats(){
        setEnergy(100);
        setMood(100);
        setMoney(50);
    }

    return (
        <StatisticContext.Provider value={{ energy, setEnergy, mood, setMood, money, setMoney, resetStats }}>
            {children}
        </StatisticContext.Provider>
    );
}

// On créé un hook pour utiliser le contexte
export function useStatistic() {
    return useContext(StatisticContext);
}