import CTAButton from "../components/cta";
import HeaderBar from "../components/headerBar";
import Happy from "../assets/images/happy.png";

export default function Start() {

    return (
        // Page d'accueil du jeu
        <div className="page">
            <div className="header">
                <HeaderBar />
            </div>
            <div className="home">
                <img src={Happy} alt="Happy Cutie" />
                <p>Aide <span>Cutie Panda</span> à s’épanouir dans la vie, nourris le, fais le travailler, dormir et jouer, en évitant les embûches, <span>prêt ?</span></p>
                <CTAButton label="Jouer" to="/game" />
            </div>
        </div>
    );
}