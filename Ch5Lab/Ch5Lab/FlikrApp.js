"use strict";

var main = function() {
	
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&tags=dogs&format=json";
					//everything after the ? is a parameter.  this pulls tags of dogs formatted in json
			
		$.getJSON( url, function( flikrResponse ) {				//can take in URL or query string
				console.log(flikrResponse);	//flikr Response variable can by ANY NAME
			
			flikrResponse.items.forEach( function(photo) {
				console.log(photo.media.m);
				var $img = $("<img>");
				var $desc = $("<p>");		//adds a paragraph tag called description
				
				$img.attr( "src", photo.media.m);			//photo.media.m is the URL to our photo, displays them
				$img.attr( "alt", photo.title);				//gives us the alt atribute on our photos
				
				
				$desc.html( photo.description);
				
				$(".photos").append($img, $desc);
				
			});
		});
		
		
};	//end main


$( function() {

	main();
});

