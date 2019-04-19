var ntwitter = require("ntwitter"),
	credentials = require("./credentials.json"),
	twitter,
	counts={};
	
	counts.awesome=0;
	
	
	//sets up our twitter object
		twitter = ntwitter(credentials);
		
	//set up our twitter stream with 3 parameters, separated by commas
	
	twitter.stream(
		//the first parameter is a string
		"statuses/filter",
		//second param is an object containing an array
		{"track": ["awesome", "cool", "rad", "gnarly", "groovy"] },
		
		//third parameter is our callback for when the stream is created
		
		function(stream) {
			stream.on("data", function(tweet) {
				if (tweet.text.indexOf("awesome") > -1) {
					//increment the awesome counter
					counts.awesome = counts.awesome + 1;
				}
				
														// console.log(tweet.text);   ---> IF YOU WANT TO DISPLAY ALL TWEETS
			});
		});
		
		setInterval( function() 
			{ 	console.log( "awesome = " + counts.awesome ); }, 3000);
			
		
		module.exports = counts;