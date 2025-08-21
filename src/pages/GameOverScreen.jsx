import HeaderBar from "../components/headerBar";
import GameOverIllustration from "../assets/images/gameover.png";
import { useNavigate } from "react-router"
import { useStatistic } from "../contexts/StatisticContext";

export default function GameOver() {

    const { gameOverMessage, resetStats } = useStatistic();
    const navigate = useNavigate();

    // Création d'une function pour redémarrer le jeu
    function GameRestart() {
        resetStats();
        navigate("/game");
    }

    return (
        // Page de GameOver
        <div className="page">
            <div className="header">
                <HeaderBar />
            </div>
            <div className="home">
                <img src={GameOverIllustration} alt="Game Over" />
                <p>{gameOverMessage}</p>
                <button className="restart-btn" onClick={GameRestart}>Rejouer</button>
            </div>
        </div>
    );
}