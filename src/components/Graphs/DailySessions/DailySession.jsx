import "../DailySessions/DailySession.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";

export default function DailySession({data}) {
  return (
  <>
    <div className="responsive-wrapper-parent daily-graph">
        <p>Activité quotidienne</p>
        <div className="responsive-wrapper-children">
            <ResponsiveContainer width="99%" height="100%">
                <BarChart data={data.length > 0 && data} barGap={5} barCategoryGap={25} strokeDasharray="1 4">
                    <CartesianGrid vertical={false} />
                    <YAxis type="number" tickCount={3} tickLine={false} dataKey="calories" axisLine={false} orientation="right" tick={{fontSize: 12}} stroke="#74798C" />
                    <XAxis tickLine={false} axisLine={false} tick={{fontSize: 12}} stroke="#74798C" />
                    <Tooltip wrapperStyle={{ top: -50, left: 10 }} content={<CustomTooltip />} />
                    <Legend wrapperStyle={{paddingTop: "15px"}} formatter={CustomLegendText} height={50} iconSize={8} iconType="circle" align="right" verticalAlign="top" />
                    <Bar name="Poids (kg)" radius={[10, 10, 0, 0]} stroke-linejoin={10} barSize={10} dataKey="kilogram" fill="#282D30" />
                    <Bar name="Calories brûlées (kCal)" radius={[10, 10, 0, 0]} barSize={10} dataKey="calories" fill="#E60000" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  </>
  )
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="daily-tooltip">
            <div className="kg">{payload[0].value}kg</div>
            <div className="cal">{payload[1].value}Kcal</div>
        </div>
      );
    }
  
    return null;
  };

  const CustomLegendText = (value) => {
    return (
      <>
        <span style={{ color: "#74798C" }}>{value}</span>
      </>
    )
}