import React from "react";
import "../styles/DashboardMain.css";

export default function ActivityChart() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  // [gray, light blue, dark blue] bar heights
  const data = [
    [40, 60, 80],
    [50, 70, 60],
    [30, 65, 75],
    [20, 55, 90],
    [60, 40, 70],
    [45, 60, 50],
    [35, 75, 65],
  ];

  return (
    <div className="activity-chart">
      {data.map((heights, i) => (
        <div className="day-bars" key={i}>
          <div className="bar-group">
            {heights.map((h, j) => (
              <div
                key={j}
                className={`bar bar-${j}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <span className="day-label">{days[i]}</span>
        </div>
      ))}
    </div>
  );
}
