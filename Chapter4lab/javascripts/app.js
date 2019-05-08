var main = function(){		//annonymous AKA unnamed function
	"use strict";	//gives you more errors than if you did not have it.
					//in this case, errors are a good thing, to let you know whats wrong
					//does not ignore ANY errors
	
	var hello = "hello world"
	window.alert(hello);	//displays a popup saying "hello world"		//you can put a string AKA "Hello world" instead of a variable if needed
	
};

$(document).ready( main );	//jquery equivalent of document.ready or window.load
							//When the page finishes loading, 'do something'.  in this case, calls the main function
							
							