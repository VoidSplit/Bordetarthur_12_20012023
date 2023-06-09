import "../Score/Score.css";
import {
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
    ResponsiveContainer,
  } from "recharts";
  
import PropTypes from 'prop-types'

  /**
   * Create a React Element with a RadialBarChart 
   * @param {*} param0 data fetched from another function
   * @returns React Element
   */
export default function Score({data}) {
    return (
        <div className="responsive-wrapper-parent">
            <p className="label">Score</p>
            <h1 className="percentage">
                {data[0].todayScore * 100}% <span>de votre objectif</span>
            </h1>
            <div className="responsive-wrapper-children">
                <ResponsiveContainer width="100%" height="100%" data={data && data}>
                    <RadialBarChart 
                        startAngle={90}
                        endAngle={500}
                        cx='50%'
                        cy='50%'
                        innerRadius={70}
                        barSize={10}
                        outerRadius={120}
                        data={data && data}
                    >
                        <PolarAngleAxis
                          type="number"
                          domain={[0, 1]}
                          angleAxisId={0}
                          tick={false}
                        />
                        <RadialBar
                          minAngle={15}
                          background
                          clockWise
                          dataKey="todayScore"
                          cornerRadius={30 / 2}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};


Score.propTypes = {
    data: PropTypes.array.isRequired,
}