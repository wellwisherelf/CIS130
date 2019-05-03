var ntwitter = require("ntwitter"),
	credentials = require("./credentials.json"),
	redis = require("redis"),
	redisClient,
	twitter,
	counts={};
	
	counts.awesome =  0;
	
	
	//sets up our twitter object
		twitter = ntwitter(credentials);
	
		redisClient = redis.createClient();
		
		
// Get the current "awesome" entry value in our database.
redisClient.get( "awesome", function( err, awesomeCount ) {
    // stuff can fail - check for errors
    if ( err != null )
    {
        console.warn("Error: " + err );
        return;
    }

    // Everything in a Redis DB is stored as a string - we want an int - so 
    // we need to convert it	
counts.awesome = parseInt(awesomeCount, 10) || 0;

	twitter.stream(
		//the first parameter is a string
		"statuses/filter",
		//second param is an object containing an array
		{"track": ["awesome", "cool", "rad", "gnarly", "groovy"] },
		
		//third parameter is our callback for when the stream is created
		
		function(stream) {
			stream.on("data", function(tweet) {
				if (tweet.text.indexOf("awesome") > -1) {
					// Increment the count in the database
					redisClient.incr("awesome");
					//increment the awesome counter
					counts.awesome = counts.awesome + 1;
				}
				
					// console.log(tweet.text);   ---> IF YOU WANT TO DISPLAY ALL TWEETS
			});
		});
});
		setInterval( function() 
			{ 	console.log( "awesome = " + counts.awesome ); }, 3000);
			
		
		module.exports = counts;