// /*
//
// My Custom JS
// ============
//
// Author:  Brad Hussey
// Updated: August 2013
// Notes:	 Hand coded for Udemy.com
//
// */
//
// $(function() {
//   $('#alertMe').click(fuction(e) {
//     e.preventDefault();
// $('#successAlert').slideDown();
//   });
//  });
// var margin={top:20,right :10, bottom: 100, left:40},
// 			width = 700 - margin.right - margin.left,
// 			height =500 -margin.top - margin.bottom;

			// var margin={top:20,right: 18,bottom:183,left: 40},
   //          width=700 -margin.right - margin.left,
   //          height=500 -margin.top - margin.bottom;

// var height = 500,
//     width = 1000,
//      barWidth = 400,
//     barOffset = 20;

// var svg=d3.select('body')
// 			.append('svg')
// 			.attr({
// 				"width": width + margin.right +margin.left,
// 				"height" : height +margin.top + margin. bottom
// 			})
// 			.append('g')
// 			.attr("transfom","translate(" + margin.left+',' + margin.right + ')');


// //  the data that powers the bar chart, a simple array of numeric values
// 	var dataset=[];
// d3.json("agewisevslitterate.json",function(error,data){
// 	if(error) console.log("Error: data not loaded");
//   console.log(data[0]);
// data.forEach(function(dataset){
	

// });
// });


  var dataset = [40, 60, 80, 100, 70, 120, 100, 60, 70, 150, 120, 140];
  the size of the overall svg element
var h = 400,
    w = 720,
    barpadding=5
 
//  the width of each bar and the offset between each bar
    barWidth = 40,
    barOffset = 20;
 
 var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

    svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d,i){
   	           return i*(w/dataset.length);
   })
   // .attr("y",100)
   .attr("y",function(d){
   	return h-d*2;
   })
   .attr("width", w/dataset.length-barpadding)
   .attr("height", function(d){
   	return d*2;
   })
   .attr("fill","blue");


   svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
    .text(function(d) {
        return d;
   })
     .attr("x", function(d, i) {
        return i * (w / dataset.length);
   })
   .attr("y", function(d) {
        return h - (d * 2);
   });
 
// d3.select('#bar-chart').append('svg')
//   .attr('width', width)
//   .attr('height', height)
//   .style('background', '#dff0d8')
//   .selectAll('rect').data(chartdata);
//   .enter().append('rect')
//     .style({'fill': '#3c763d', 'stroke': '#d6e9c6', 'stroke-width': '5'})
//     .attr('width', barWidth)
//     .attr('height', function (data) {
//         return data;
//     })
//     .attr('x', function (data, i) {
//         return i * (barWidth + barOffset);
//     })
//     .attr('y', function (data) {
//         return height - data;
//     });
  