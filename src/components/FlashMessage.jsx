export default function FlashMessage({ message, type }) {

    return (
        // création du composant FlashMessage qui affichera un message d'alerte avec un style différent selon son type
        <div className={"flash-message " + type}>
            {message}
        </div>
    );
}