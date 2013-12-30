
//Declare variables to hold values for buttonDiv property values
var divHeight = 0;
var divWidth = 0;
var divColor = 0;
var idCounter = 0;

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

	//alert(divHeight);
	//alert(divWidth);

	var blockId = "buttonDiv" + String(idCounter);
	var block = "<div id = \"" + blockId + "\"></div>";
	idCounter = idCounter + 1;
	
	// This should 'append' buttonDiv as the end, as the last child of the body.
	$("body").append(block);
	$("body").append('<br />');	
	
    //Assign buttonDiv the value of the variables
	$('#'+blockId).css('height',divHeight);
	$('#'+blockId).css('width',divWidth);
	$('#'+blockId).css('background-color','red');

}