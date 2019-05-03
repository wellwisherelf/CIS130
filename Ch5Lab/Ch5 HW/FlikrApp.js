//CREATED BY CHRIS LINDBERG ON 5/3/19

"use strict";

var main = function() {
	

	
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&tags=kitty&format=json";
					//everything after the ? is a parameter.  this pulls tags of kitty cats formatted in json
			
	$.getJSON( url, function( flikrResponse ) {				//can take in URL or query string
				console.log(flikrResponse);	//flikr Response variable can by ANY NAME		
				
			
		

	//button 3 is our NEW SEARCH button	
		var button3 = document.createElement("button");
		button3.innerHTML = "New Search";

		//Place/append
		var body = document.getElementById("newsearchButton");
		body.appendChild(button3);
		
			
	//button 2 is our "next picture" button	
		var button2 = document.createElement("button");
		button2.innerHTML = "Next     >";
		
		//Place/append
		var body = document.getElementById("nextButton");
		body.appendChild(button2);
		
		
	//button 1 is our "previous picture" button	
		var button1 = document.createElement("button");
		button1.innerHTML = "Previous      <";

		//Place/append
		var body = document.getElementById("previousButton");
		body.appendChild(button1);


//num of items is the number of items in the json array
var numOfItems =flikrResponse.items.length;

//x is our main counting variable which goes through the json member array
var x=0;

//new response is the variable which holds the json file which the user can input.  by default, it is equal to the cat query
var newResponse=flikrResponse;	

	$(".photos").html('<img src=' + flikrResponse.items[x].media.m + ' />');


	// Next photo Event handler
	button2.addEventListener ("click", function() {
		flikrResponse=newResponse;
		console.log("clicked next button")		//logging for debug
		console.log("x is " + x);
	
		//if you have not hit the button yet, displays the first picture from the json array
			//otherwise, removes the current picture, then displays the next picture.
			//x is incremented each time, but does not exceed the number of items in the array.
			//if there are no more items left, alerts the user that they have reached the end.
		if (x==0){
			x++;
			$(".photos").html('<img src=' + flikrResponse.items[x].media.m + ' />');
			}else if (x<(numOfItems-1)){
				x++;
				$(".photos").empty();
				$(".photos").html('<img src=' + flikrResponse.items[x].media.m + ' />');
				
				}else{
					window.alert("Reached the end");
				}
	console.log("now x is " + x);			//logging for debug
	});
	
	
	
	
	// Previous photo Event handler
	button1.addEventListener ("click", function() {
		flikrResponse=newResponse;
		console.log("clicked back button")	//logging for debug
		console.log("x is " + x);
		
		//if array index is currently at the first entry (index 0), tells you you cannot go back.
			//otherwise, removes the current picture, then displays the previous picture.
			//x is decremented each time. 
		if (x==0){

			window.alert("Cannot go back");	//displays a popup saying "hello world"		//you can put a string AKA "Hello world" instead of a variable if needed
			}else if (x<=numOfItems){
				$(".photos").empty();
				x--;
				$(".photos").html('<img src=' + flikrResponse.items[x].media.m + ' />');
		}
		console.log("now x is " + x);	//logging for debug
	});
	
	
		//if you click button 3, you can enter a new search function for flikr.
		button3.addEventListener ("click", function() {	
		
			//prompts you for your search
			var answer = prompt("What would you like to search for?", "CATS");
			if (answer == null) {
				return;
				}else{
					//changing URL to our new URL with the user variable
					url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&tags=" + answer + "&format=json";
					//creates a new variable to hold the new json response from flikr
					$.getJSON( url, function( newflikrResponse ) {				
						console.log(newflikrResponse);	//debugging
						$(".photos").empty();
						x=0;
						//posts the new photo from the first array index (0) to the screen
						$(".photos").html('<img src=' + newflikrResponse.items[x].media.m + ' />');
						//assigns our new json file to a temporary variable, which our forward and back buttons always check before displaying.
						newResponse = newflikrResponse;
						console.log("x is " + x);
						$("h1").html(answer + " of FLIKR");
				
					});
			}
		});
	

			
		});
		
		
};	//end main


$( function() {

	main();
});

