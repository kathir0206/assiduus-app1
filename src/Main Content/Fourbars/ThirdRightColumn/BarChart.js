import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const ThirdContainerChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const labels = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];
    const container = chartRef.current;

    if (!container) {
      return;
    }

    const spaceBetweenBars = 78;
    const barWidth = 17;
    const barHeight = 157;
    const barRadius = 4;

    const data = generateData(barHeight); 

    const chartContainer = d3.select(container);

  
    chartContainer
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * (barWidth + spaceBetweenBars))
      .attr("y", (d) => barHeight - d.bottom) 
      .attr("width", barWidth)
      .attr("height", (d) => d.bottom)
      .attr("rx", barRadius)
      .attr("ry", barRadius)
      .attr("fill", (d, i) => {
        const gradient = chartContainer.append("defs")
          .append("linearGradient")
          .attr("id", `gradient-${i}`)
          .attr("x1", "0%")
          .attr("y1", "100%")
          .attr("x2", "0%")
          .attr("y2", "0%");
        gradient.append("stop")
          .attr("offset", "0%")
          .style("stop-color", "rgb(24, 180, 24"); 

        gradient.append("stop")
          .attr("offset", "100%")
          .style("stop-color", " #3CB371"); 

        return `url(#gradient-${i})`;
      });

    chartContainer
      .selectAll("text")
      .data(labels)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * (barWidth + spaceBetweenBars) + barWidth / 2)
      .attr("y", barHeight + 20)
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .attr("font-size", "12px");
  }, []);

  const generateData = (barHeight) => {
  
    const data = [
      { top: 25, bottom: 15 },
      { top: 15, bottom: 30 },
      { top: 25, bottom: 40 },
      { top: 10, bottom: 30 },
      { top: 20, bottom: 30 },
      { top: 20, bottom: 38 },
    ];

    return data.map(({ top, bottom }) => {
      const topHeight = (barHeight * top) / 50;
      const bottomHeight = (barHeight * bottom) / 45;
      return { top: topHeight, bottom: bottomHeight };
    });
  };

  return (
    <svg ref={chartRef} width="100%" height="179px">
     
    </svg>
  );
};

export default ThirdContainerChart;
