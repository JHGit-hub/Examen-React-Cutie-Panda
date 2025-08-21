import FlashMessage from "./FlashMessage";
import { useStatistic } from "../contexts/StatisticContext";


export default function FlashAlert({ message, type }) {

    const { alertVisible } = useStatistic();

    return (
        // Si alertVisible est true, on ajoute la classe visible à l'alerte
        <div className={`flash-alert ${alertVisible ? "visible" : ""}`}>
            {/* On affiche le message d'alerte */}
            <FlashMessage message={message} type={type} />
        </div>
    );
}
