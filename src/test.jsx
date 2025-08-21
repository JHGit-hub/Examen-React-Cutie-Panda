    // On utilise un useEffect pour executer ce code aprés le chargement du composant
    useEffect(() => {
        // Création de la constante degradation
        // On utilise un setInterval pour diminuer les statistiques toutes les 10 secondes
        const degradation = setInterval(degradeStats, 10000); // Toutes les 10 secondes

        return () => clearInterval(degradation); // On arrete le timer de la dégradation lorsque la page est fermée (au démontage)
    }, []); // Il n'y a pas de dépendances, donc cela ne s'exécute qu'au montage