import "../AverageSession/AverageSession.css";
import {
    LineChart,
    Line,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
  } from "recharts";

const CustomTooltip = (props) => {
  let active = props.active
  let payload = props.payload
    if (active && payload) {
      return (
        <div className="custom-tooltip_goals" style={{left: props.coordinate.x}}>
          <p style={{top: props.coordinate.y}}> {`${payload[0].value} `}min</p>
        </div>
      );
    }

    return null;
  };

export default function AverageSession({data}) {
  return (
    <div className="responsive-wrapper-parent average-sessions-graph">
      <div className="title-label">
        Durée moyenne des sessions
      </div>
      <div className="days-anchors">
        {data.map((e, index) => <span key={index}>{e.day}</span>)}
      </div>
    <div className="responsive-wrapper-children">
        <ResponsiveContainer width="100%" height="115%" padding={0}>
          <LineChart
          data={data && data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          cx="50%" 
          cy="50%" 
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            padding={{ left: 0, right: 0 }}
            tick={false}
          />
          <YAxis
            hide={true}
            domain={["dataMin-50", "dataMax+50"]}
            padding={{ top: 10, bottom: -20 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "none" }}
            position={{ x: 0, y: 0 }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            dot={false}
            activeDot={{
              stroke: "white",
              strokeOpacity: 0.2,
              fill: "white",
              strokeWidth: 15,
              r: 5,
            }}
            strokeWidth={2}
          />
          </LineChart>
        </ResponsiveContainer>
      </div>
      </div>
  );
};