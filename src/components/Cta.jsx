import { useStatistic } from "../contexts/StatisticContext"

export default function Cta() {
    
    const { Eat, Sleep, Work, Play } = useStatistic();

    return (
        <div className="cta-grid">
            <div className="cta" onClick={() => Eat()}>
                <h2>Manger</h2>
            </div>
            <div className="cta" onClick={() => Sleep()}>
                <h2>Dormir</h2>
            </div>
            <div className="cta" onClick={() => Work()}>
                <h2>Travailler</h2>
            </div>
            <div className="cta" onClick={() => Play()}>
                <h2>Jouer</h2>
            </div>
        </div>

    )
}
