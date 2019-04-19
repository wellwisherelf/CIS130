var express = require("express"),
    http = require("http"),
    tweetCounts = require("./TweetCounter.js"),
    app = express();

app.use(express.static(__dirname + "/client"));

http.createServer(app).listen(3000);

app.get("/counts.json", function (req, res) {		//if user goes to localhost:3000/counts.json, displays tweetCounts

    // res.json returns the entire object as a JSON file
    res.json(tweetCounts);
	
		//function runs, (tweet counter), instead of a web page.  could be a file
});

console.log("Server running on port 3000");