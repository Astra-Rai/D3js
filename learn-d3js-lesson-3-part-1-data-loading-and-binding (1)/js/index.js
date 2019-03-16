//D3.js can be used for DOM selection and manipulation 
//we can map data into DOM elements
//we can append,update, or display DOM elements using  our dataset

//Appending data to a dataset

//We have an array of numbers
//goal is to append a paragraph tag to each element in array

var dataset = [1,2,3,4,5];

//select body element using select() method
d3.select('body')

  //select all paragraph elements
  //since we do not have all paragraph tags yet, it will return an empty selection
  .selectAll('p')

  //call data method and pass in our dataset

  .data(dataset)

  //.enter(), will take data item one by one and perform an action on them

  .enter()
  
  //for each data item we are appending a paragraph tag and binding 

  .append('p')

   //add text below to paragraph tags
  .text('D3 is awesome!!');