import FlashMessage from "./FlashMessage";


export default function FlashAlert({ message, type }) {

    return (
        <div className="flash-alert">
            {/* On affiche le message d'alerte */}
            <FlashMessage message={message} type={type} />
        </div>
    );
}
