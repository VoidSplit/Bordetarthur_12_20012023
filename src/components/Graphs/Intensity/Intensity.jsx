import "../Intensity/Intensity.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


export default function Intensity({data}) {
    return (
        <div className="responsive-wrapper-parent intensity-graph">
            <div className="responsive-wrapper-children">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" stroke="#fff" outerRadius="60%" data={data}>
                    <PolarGrid gridType="polygon" radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: "#fff", fontSize: 13 }} dy={4} tickLine={false} />
                    <PolarRadiusAxis tick={false} fill="lime" tickCount={6} axisLine={false} />
                    <Radar stroke="transparent" dot={false} name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                  </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};