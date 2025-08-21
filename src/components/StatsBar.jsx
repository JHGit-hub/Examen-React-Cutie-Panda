import { useStatistic } from "../contexts/StatisticContext"
import moodSVG from "../assets/icons/mood.png";
import energySVG from "../assets/icons/energy.png";
import moneySVG from "../assets/icons/money.png";

export default function StatsBar() {

    const { energy, mood, money } = useStatistic();

    return (
        <div className="stat-container">
            <div className="stat-row">
                <img src={moodSVG} alt="humeur de Cutie" />
                <div className="stat-bar">
                    <div className="stat-level" style={{ width: `${mood}%` }}></div>
                </div>
            </div>
            <div className="stat-row">
                <img src={energySVG} alt="énergie de Cutie" />
                <div className="stat-bar">
                    <div className="stat-level" style={{ width: `${energy}%` }}></div>
                </div>
            </div>
            <div className="stat-row">
                <img src={moneySVG} alt="argent de Cutie" />
                <div className="stat-bar">
                    <div className="stat-level" style={{ width: `${money}%` }}></div>
                </div>
            </div>
        </div>
    )

}