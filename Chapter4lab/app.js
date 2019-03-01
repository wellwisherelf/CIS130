var main = function(){		//annonymous AKA unnamed function
	"use strict";	//gives you more errors than if you did not have it.
					//in this case, errors are a good thing, to let you know whats wrong
					//does not ignore ANY errors

	window.alert("hello world");
	
};

$(document).ready( main );	//jquery equivalent of document.ready or window.load
							//When the page loads, 'do something'.  in this case, calls the main function