
//Declare variables to hold values for buttonDiv property values
var divHeight = 0
var divWidth = 0
var divColor = 0

//create functions to pull data from input fields
var getHeight = function()	{
	return ($('input[name = "blockHeight"]').val());
	};

var getWidth = function()	{
	return ($('input[name = "blockWidth"]').val());
	};

function createTheButton() {

	// Do something!!!
	//alert("Hi there");

	//Set values of variables using functions above
	divHeight = getHeight()+'px';
	divWidth = getWidth()+'px';
	
	//Test that functions worked
	alert(divHeight);
	alert(divWidth);

	// This should 'append' buttonDiv as the end, as the last child of the body.
	$("body").append('<div id = "buttonDiv"></div>');	  
	$("body").append('<br />');	
	
    //Assign buttonDiv the value of the variables
	$('#buttonDiv').css('height',divHeight);
	$('#buttonDiv').css('width',divWidth);
}