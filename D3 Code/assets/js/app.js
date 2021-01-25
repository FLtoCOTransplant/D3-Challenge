// Set the size
var svgWidth = 960;
var svgHeight = 500;

// Set margins in svg
var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
  };

// create variables for width and hight using equations
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper and append a SVG group to hold the chart,
var svg = d3
  .select("#scatter")
  .append("svg")
  // shift using the variables of width and height created above
  .attr("width", svgWidth)
  .attr("height", svgHeight + 50);

// Append a SVG
var chartGroup = svg.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);