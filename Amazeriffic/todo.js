"use strict";

var months = ["jan", "feb", "march", "april", "..."];	//array demo


$(function (){
	
	var toDos = [		/* an array of strings */
						" Get Groceries ",
						" Make up some new ToDos",
						" Prep for Monday's class",
						" Answer recruiter emails on LinkedIn",
						" Take Gracie to the park",
						" Finish writing book"
	
	];
	
	//Find all the tab spans, and loop through each one.
	$(".tabs span").toArray().forEach( function(element) {	//looking for all spans in any class of tabs
	
		//when one is clicked, clear the content section
		$(element).on("click", function() {
			var $element= $(element),	//creates a local copy of variable element
				$content;	//using a comma separator to create 2 variables (shorthand) 
				
			
			
			
			$(".tabs span").removeClass("active");
			$(element).addClass("active");
			$("main .content").empty();
			
			
			if( $(element).parent().is(":nth-child(1)") ) {		//checks which tabs are clicked.  child of 
				$content = $("<ul>");
				
				for (var i = toDos.length - 1; i>=0; i--){
					$content.append( $("<li>").text( toDos[i]));
				}	//end for toDos.
				
				$("main .content").append($content);
			}
			
			else if( $(element).parent().is(":nth-child(2)") ) {
				$content = $("<ul>");
				toDos.forEach( function (todo ) {
					$content.append( $("<li>").text( todo));
				})	//end for toDos.
				
				$("main .content").append($content);
			}
			
				
			
			
			else if( $(element).parent().is(":nth-child(3)") ) {
				console.log("third tab clcked");
			}
			
			else{
				console.warn("Something bad happened");
			}
			
			return false;
		})	//end on element click
	
	
	});	// end tabs span
	
	
});	//end doc ready