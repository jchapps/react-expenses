import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.amountPoints.map((amountPoint) => amountPoint.value)
  const maximum = Math.max(...dataPointValues)

  if (maximum > 0) {
    return (
    <div className="chart">
      {props.amountPoints.map((amountPoint) => (
        <ChartBar
          value={amountPoint.value}
          maxValue={maximum}
          label={amountPoint.label}
          key={amountPoint.label}
        />
      ))}
    </div>
  )};
}

export default Chart;
