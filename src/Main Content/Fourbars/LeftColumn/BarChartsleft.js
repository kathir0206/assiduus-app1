import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const SingleLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    
    const containerWidth = 500; 
    const containerHeight = 90;

    const numPoints = 180; 
    const frequency = 0.1; 

    const data = Array.from({ length: numPoints }, (_, i) => ({
      x: (i / (numPoints - 1)) * containerWidth,
      y: Math.sin(frequency * i) * (containerHeight / 4) + containerHeight / 2,
    }));

    const margin = { top: 20, right: 30, bottom: 30, left: 0 }; 
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;

    const line = d3
      .line()
      .x((d) => d.x + margin.left)
      .y((d) => d.y + margin.top)
      .curve(d3.curveBasis); 

    const chart = d3.select(chartRef.current);

    // Append wave line
    chart
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line)
      .attr("stroke", "rgb(24, 180, 24)") 
      .attr("stroke-width", 3) 
      .attr("fill", "none");

    
    const labelValues = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const labelOffset = 20;
    const fontSize = 12;
    const spaceBetweenLabels = 20; 

    labelValues.forEach((value, index) => {
      chart
        .append("text")
        .attr("x", (index / (labelValues.length - 1)) * containerWidth + margin.left)
        .attr("y", containerHeight + margin.top + labelOffset)
        .attr("text-anchor", "middle")
        .attr("font-size", fontSize) 
        .text(value);

     
      chart
        .append("text")
        .attr("x", (index / (labelValues.length - 1)) * containerWidth + margin.left + spaceBetweenLabels)
        .attr("y", containerHeight + margin.top + labelOffset)
        .attr("text-anchor", "middle")
        .attr("font-size", fontSize) 
        .text(""); 
    });

    
    chart.select(".axis--x").remove();
    chart.select(".axis--y").remove();

    
    return () => {
      chart.selectAll("*").remove();
    };
  }, []);

  return <svg ref={chartRef} width={500} height={150}></svg>;
};

export default SingleLineChart;
