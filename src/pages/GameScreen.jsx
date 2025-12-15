import CTAButton from "../components/CTA.jsx"
import FlashAlert from "../components/FlashAlert"
import HeaderBar from "../components/headerBar"
import MoodState from "../components/MoodState"
import StatsBar from "../components/StatsBar"
import { useStatistic } from "../contexts/StatisticContext"
import { useNavigate } from "react-router"
import { useEffect } from "react" 

export default function Game() {

    const { alertMessage, alertType, gameOver} = useStatistic();
    const navigate = useNavigate();

    // Si GameOver existe, alors on renvoi vers la page GameOver
    useEffect(() => {
        if (gameOver) {
            navigate("/gameOver");
        }
    }, [gameOver]);

    return (
        // Page de jeu
        <div className="page">
            <HeaderBar />
            <MoodState />
            <StatsBar />
            <CTAButton />
            <div>
                {/* s'il existe un message d'alerte, on l'affiche */}
                {alertMessage && <FlashAlert message={alertMessage} type={alertType} />}
            </div>

        </div>
    )
}
