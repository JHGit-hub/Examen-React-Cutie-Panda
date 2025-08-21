// Importation des images pour le composant mood

import bambous from '../assets/images/bambous.png';
import angry from '../assets/images/angry.png';
import hungry from '../assets/images/hungry.png';
import tired from '../assets/images/tired.png';
import happy from '../assets/images/happy.png';
import neutral from '../assets/images/neutral.png';
import poor from '../assets/images/poor.png';

import { useStatistic } from '../contexts/StatisticContext';



export default function MoodState() {

    const { mood, energy, money } = useStatistic();

    let moodImage;
    let moodLabel;

    if (mood > 30 && energy > 30 && money > 30) {
        moodImage = happy;
        moodLabel = "joyeux"
    } else if (mood < 10) {
        moodImage = angry;
        moodLabel = "en colère";
    } else if (energy < 10 && money > 10 && mood > 10) {
        moodImage = tired;
        moodLabel = "fatigué";
    } else if (energy > 10 && energy < 30 && money > 10 && mood > 10) {
        moodImage = hungry;
        moodLabel = "affamé";
    } else if (money < 10 && mood > 30 && energy > 30) {
        moodImage = poor;
        moodLabel = "pauvre";
    } else {
        moodImage = neutral;
        moodLabel = "neutre";
    }

    return (
        <div className="mood-card" style={{ backgroundImage: `url(${bambous})` }}> {/* On insére le background des bambous en fond */}
            {/* l'image du panda changera selon son humeur */}
            <img src={moodImage} alt={"cutie is " + moodLabel} />
        </div>
    );
}