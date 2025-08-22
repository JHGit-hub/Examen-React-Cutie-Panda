import { useStatistic } from "../contexts/StatisticContext"
import moodSVG from "../assets/icons/mood.svg";
import energySVG from "../assets/icons/energy.svg";
import moneySVG from "../assets/icons/money.svg";
import { motion } from "framer-motion"

export default function StatsBar() {

    const { energy, mood, money } = useStatistic();

    let transition;

    if (mood < 10 || energy < 10) {
        transition = {
            duration: 0.8,
            ease: "easeInOut", // durée et type de transition
            backgroundColor: {
                repeat: Infinity, // répéte en boucle
                repeatType: "reverse", // passe d'une couleur à l'autre
                duration: 0.2 // durée de la transition
            }
        };
    } else {
        transition = {
            duration: 0.8,
            ease: "easeInOut"
        }
    }

    return (
        <div className="stat-container">
            <div className="stat-row">
                <img src={moodSVG} alt="humeur de Cutie" />
                <div className="stat-bar">
                    <motion.div className="stat-level"
                        initial={false} // pas d'animation au départ
                        animate={{
                            width: `${mood}%`, // animation de la largeur
                            backgroundColor: mood < 10
                                ? ['var(--danger-color)', '#fdd4d4ff']
                                : mood > 10 && mood < 30
                                    ? 'var(--warning-color)'
                                    : 'var(--primary-color)'
                        }} // animation de la largeur
                        transition={transition}
                        style={{ width: `${mood}%` }}>
                    </motion.div>
                </div>
            </div>
            <div className="stat-row">
                <img src={energySVG} alt="énergie de Cutie" />
                <div className="stat-bar">
                    <motion.div className="stat-level"
                        initial={false} // pas d'animation au départ
                        animate={{
                            width: `${energy}%`, // animation de la largeur
                            backgroundColor: energy < 10
                                ? ['var(--danger-color)', '#fdd4d4ff']
                                : energy > 10 && energy < 30
                                    ? 'var(--warning-color)'
                                    : 'var(--primary-color)'
                        }} // animation de la largeur
                        transition={transition}
                        style={{ width: `${energy}%` }}>
                    </motion.div>
                </div>
            </div>
            <div className="stat-row">
                <img src={moneySVG} alt="argent de Cutie" />
                <div className="stat-bar">
                    <motion.div className="stat-level"
                        initial={false} // pas d'animation au départ
                        animate={{ width: `${money}%` }} // animation de la largeur
                        transition={{ duration: 0.8, ease: "easeInOut" }} // durée et type de transition
                        style={{
                            width: `${money}%`,
                            backgroundColor: money < 10 ? 'var(--danger-color)' :
                                'var(--primary-color)'
                        }}></motion.div>
                </div>
            </div>
        </div>
    )

}