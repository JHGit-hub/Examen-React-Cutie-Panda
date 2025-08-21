import HeaderBar from "../components/headerBar";
import GameOver from "../assets/images/gameover.png";
import PrimaryBtn from "../components/PrimaryBtn";
import { useNavigate } from "react-router"

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
                <img src={GameOver} alt="Game Over" />
                <p>{gameOverMessage}</p>
                <button className="restart-btn" onClick={GameRestart}>Rejouer</button>
            </div>
        </div>
    );
}