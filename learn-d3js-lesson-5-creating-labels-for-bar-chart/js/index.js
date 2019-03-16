//The HTML <svg> element is a container for SVG graphics.
//SVG has several methods for drawing paths, boxes, circles, text, and graphic images.

//dataset used to create bar chart
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];


//variables to define the width and height of svg container and padding between bars
var svgWidth = 500, svgHeight = 300, barPadding = 5;
//calculate the width of each bar
//bar width = svgWidth/ total number of elements in dataset[]
var barWidth = (svgWidth / dataset.length);


//select svg container
var svg = d3.select('svg')
     //give svg container the attributes of width and height
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//create bar chart
//bars are rectangle
//secter all method to select rectangles    
var barChart = svg.selectAll("rect")
    //call data method and provide it a dataset, 
    .data(dataset)
    //call enter method
    .enter()//will take dataset from reading state to perform other operations on each data methods
    //for each item in array, we are appending a rectangle in the svg container
    .append("rect")
    //attributes y, height and width, transform applied to each rectangle
    //to get the y attribute, we call the y attribute methods, this takes a function that gets the      data and its parameter
    //calculate the y atrribute by subtracting the data item from the svg height
    //create y attribute by subtraction the with the 
    .attr("y", function(d) {
         return svgHeight - d 
    })
    //set height attribute
    .attr("height", function(d) { 
        return d; //return data value to callback function
    })
  //attribute width calculate
    .attr("width", barWidth - barPadding)
  
    //trans explained:https://www.tutorialspoint.com/d3js/d3js_svg_transformation.htm
    //calculate value of translation of each bar

    .attr("transform", function (d, i) {
      
    //calculate vaule of translation, x axis and y axis 
    //multiply the indext with the bar width
    var translate = [barWidth * i, 0];
  
     //apply the transformation of translate to bar chart
        return "translate("+ translate +")";
    });

//select all text elements inside our svg 
var text = svg.selectAll("text")//do not put simicolon here
    .data(dataset)//introduce dataset using data method
    .enter()//get in enter mode using enter method will bring in data items one by one for further processing 
    .append("text")//append text to each data item and keep the number at the value itself
    .text(function(d) {//using text method we can get value of our data itemtakes a string or function as a parameter
        return d;
})
//we want text to be slightly above bar,subract 2 more pixles 
.attr("y", function(d, i) {
  return svgHeight - d - 2;
  
})  
// give the x attribute to be starting point of each rectangle
//we get this by using the values of barWidth and the index, i of the data element
.attr("x", function(d, i) {
    return barWidth * i;
  
})

//give text element color by using the fill attribute
.attr("fill", "#A64C38");