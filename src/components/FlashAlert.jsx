import FlashMessage from "./FlashMessage";

// création de la constante alertMessage avec id, type et message
const alertMessage = [
    {
        id:1,
        type: "bonus",
        message: "Vous trouvez un billet de 20€ par terre !"
    },
    {
        id:2,
        type: "malus",
        message: "Vous avez oublié de payer votre loyer…"
    },
    {
        id:3,
        type: "bonus",
        message: "Un ami vous invite au cinéma gratuitement !"
    },
    {
        id:4,
        type: "malus",
        message:"Vous tombez malade…"
    }
]

export default function FlashAlert({ message, type }) {

    return (
        <div className="flash-alert">
            {/* On affiche le message d'alerte */}
            <FlashMessage message={message} type={type}>{message}</FlashMessage>
        </div>
    );
}
