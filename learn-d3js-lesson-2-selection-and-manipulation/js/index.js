

//D3.js can be used for DOM selection and manipulation 
//we can select CSS3 selectors or name of element itself
//D3 provides the following two methods 
//methods accept CSS3  or name of DOM element as a parameter and return selection of the element  

//returns first element matching criteria
d3.select();

//returns all elements matching criteria
d3.selectAll();//returns all elements matching criteria 
//this selects first h1 tag
//we can update style or provide data to selection
d3.select('h1').style('color', 'red')
//attr() method we cam apply different attributes to or selection
//added a class named heading 
  .attr('class', 'heading')
//update the text of selected element using .text() method
.text('Updated h1 tag');//added text tp h1 tag

//apend
//select body and append paragraph tag and add text
d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');

//select all p tags change the style to color blue 
d3.selectAll('p').style('color', 'blue');