import { useStatistic } from "../contexts/StatisticContext"
import moodSVG from "../assets/icons/mood.svg";
import energySVG from "../assets/icons/energy.svg";
import moneySVG from "../assets/icons/money.svg";

export default function StatsBar() {

    const { energy, mood, money } = useStatistic();

    return (
        <div className="stat-container">
            <div className="stat-row">
                <img src={moodSVG} alt="humeur de Cutie" />
                <div className="stat-bar">
                    <div className="stat-level" style={{
                        width: `${mood}%`,
                        backgroundColor: mood < 10 ? 'var(--danger-color)' :
                                        mood > 10 && mood < 30 ? 'var(--warning-color)' :
                                        'var(--primary-color)'
                    }}></div>
                </div>
            </div>
            <div className="stat-row">
                <img src={energySVG} alt="énergie de Cutie" />
                <div className="stat-bar">
                    <div className="stat-level" style={{
                        width: `${energy}%`,
                        backgroundColor: energy < 10 ? 'var(--danger-color)' :
                                        energy > 10 && energy < 30 ? 'var(--warning-color)' :
                                        'var(--primary-color)'
                    }}></div>
                </div>
            </div>
            <div className="stat-row">
                <img src={moneySVG} alt="argent de Cutie" />
                <div className="stat-bar">
                    <div className="stat-level" style={{
                        width: `${money}%`,
                        backgroundColor: money < 10 ? 'var(--danger-color)' :
                                        'var(--primary-color)'
                    }}></div>
                </div>
            </div>
        </div>
    )

}