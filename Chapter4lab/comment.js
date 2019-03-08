"use strict";

$(function (){/* SHORTHAND FOR DOCUMENT READY IN JQUERY  */
	var commentInput= $(".comment-input input");		//assigns the commentInput variable with the comment input field's input
	
	
	function processCommentInput()
	{
		var $new_comment;
		
		
			if ( $(commentInput).val() !== "" )
				{
					$new_comment = $("<p>").text( $(commentInput).val() );	//assigns the new comment variable with a paragraph tag
																						
					$(".comments").append( $new_comment );		//adds new_comment to the end of the comment section
					$(commentInput).val( "" );		//sets commentInput to empty, so no accidental duplicate comments are added with extra button presses
				}
	}// end processCommentInput() function
	
	
	
	
	

	$( commentInput ).on("keypress", function(event){
		if (event.keyCode === 13)
		{
			processCommentInput();	//runs processCommentInput function
				/* console.log("This is the keycode " + event.keyCode ); ---     checker that tests to see if enter is pressed and prints to console */
		}
			
	});


	$(".comment-input button").on("click", function(event) {	/*when button of comment-input class is clicked,
																executes function with variable name event */
	/*	console.log("hello world");	*/
		processCommentInput();
				/* REMOVED
				var $new_comment = $("<p>");	//creates a new paragraph
				var comment_text = $(".comment-input input").val();		//gets the value of the comment-input class's input
				$new_comment.text( comment_text);		//assigns the variable new_comment with whatever is stored in the comment_text variable
				*/
	});
});