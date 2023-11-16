import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const ThirdContainerChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const data = [40, 70, 120, 80, 90, 70];
    const labels = [
      "Older",
      "Jan 1-8",
      "Jan 9-16",
      "Jan 17-24",
      "Jan 25-31",
      "Future",
    ];
    const container = chartRef.current;

    if (!container) {
      return;
    }

    const spaceBetweenBars = 77;
    const barWidth = 18;
    const barRadius = 4;

    const chartContainer = d3.select(container);

    // Create bars
    chartContainer
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * (barWidth + spaceBetweenBars))
      .attr("y", (d) => 130 - d)
      .attr("width", barWidth)
      .attr("height", (d) => d)
      .attr("rx", barRadius)
      .attr("ry", barRadius)
      .attr("fill", "rgb(24, 180, 24)");


    chartContainer
      .selectAll("text")
      .data(labels)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * (barWidth + spaceBetweenBars) + barWidth / 2)
      .attr("y", 160)
      .attr("text-anchor", "middle")
      .attr("fill", (d) => (d === "New Sales Invoice" ? "white" : "black"))
      .attr("font-weight", (d) =>
        d === "New Sales Invoice" ? "bold" : "normal"
      )
      .attr("font-size", (d) => (d === "New Sales Invoice" ? "12px" : "10px"))
      .attr("background-color", (d) =>
        d === "New Sales Invoice" ? "white" : "none"
      );
  }, []);

  return (
    <svg ref={chartRef} width="100%" height="170">
     
    </svg>
  );
};

export default ThirdContainerChart;
