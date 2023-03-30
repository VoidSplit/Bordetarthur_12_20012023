import "../StatsCard/StatsCard.css";

import caloriesIcon from '../../assets/statsCardsIcons/calorie.svg'
import proteinesIcon from '../../assets/statsCardsIcons/protein.svg'
import glucidesIcon from '../../assets/statsCardsIcons/glucide.svg'
import lipidesIcon from '../../assets/statsCardsIcons/lipide.svg'

export default function StatsCard({type, value}) {
    let cards = [
        {
            type: "calories",
            icon: caloriesIcon,
            display: "Calories",
            unit: "kCal"
        },
        {
            type: "proteines",
            icon: proteinesIcon,
            display: "Protéines",
            unit: "g"
        },
        {
            type: "glucides",
            icon: glucidesIcon,
            display: "Glucides",
            unit: "g"
        },
        {
            type: "lipides",
            icon: lipidesIcon,
            display: "Lipides",
            unit: "g"
        },
    ]

    return (
        <div className="stats-card">
            <div className="icon">
                <img src={cards.filter(c => c.type === type)[0] && cards.filter(c => c.type === type)[0].icon} alt="" />
            </div>
            <div className="display">
                <p>{value && value}{cards.filter(c => c.type === type)[0] && cards.filter(c => c.type === type)[0].unit}</p>
                <small>{cards.filter(c => c.type === type)[0] && cards.filter(c => c.type === type)[0].display}</small>
            </div>
        </div>
    );
};