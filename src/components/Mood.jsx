// Importation des images pour le composant mood

import bambous from '../assets/images/bambous.png';
import angry from '../assets/icons'
import hungy from '../assets/images/hungy.png';
import asleep from '../assets/images/asleep.png';
import happy from '../assets/images/happy.png';
import neutral from '../assets/images/neutral/png';
import poor from '../assets/images/poor.png';



export default function Mood({ mood }) {


    return (
        <div className={"mood"} style={{ backgroundImage: `url(${bambous})` }}> {/* On insére le background des bambous en fond */}
            {/* l'image du panda changera selon son humeur */}
            {mood === "happy" && <img src={happy} alt="cutie is happy" />}
            {mood === "angry" && <img src={angry} alt="cutie is angry" />}
            {mood === "asleep" && <img src={asleep} alt="cutie is asleep" />}
            {mood === "neutral" && <img src={neutral} alt="cutie is neutral" />}
            {mood === "hungry" && <img src={hungy} alt="cutie is hungry" />}
            {mood === "poor" && <img src={poor} alt="cutie is poor" />}
        </div>
    );
}