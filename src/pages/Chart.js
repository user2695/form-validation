import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import "../Chart.scss";


function Chart() {
  
  const [data] = useState([
    Math.floor(Math.random() * 300),
    Math.floor(Math.random() * 300),
    Math.floor(Math.random() * 300),
    Math.floor(Math.random() * 300),
    Math.floor(Math.random() * 300),
    Math.floor(Math.random() * 300),
  ]);
  const svgRef = useRef();

  useEffect(() => {
    //Settting svg container

    const w = 400;
    const h = 400;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("margin-top", "75px");
    //scaling
    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, w])
      .padding(0.5);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    //setting axis

    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.append("g").call(xAxis).attr("transform", `translate(0, ${h})`);

    svg.append("g").call(yAxis);

    //svg data

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (v, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth)
      .attr("height", (val) => h - yScale(val));
  },[data]);

  return (
    <div className="Chart">
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default Chart;
