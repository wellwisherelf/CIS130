//CAL
var express = require("express"),
    http = require("http"),
	mongoose = require( "mongoose"),
    app = express();

app.use(express.static(__dirname + "/client"));		
	//parse incoming json
app.use( express.urlencoded() );
	//connect to the amazeriffic data store in mongodb.  if its not there, it will create it
mongoose.connect('mongodb://localhost/amazeriffic');

	//this is our mongoose model for toDos
var ToDoSchema = mongoose.Schema({
	description: String,
	tags: [ String ]
});

var ToDo = mongoose.model("ToDo", ToDoSchema);

//now we listen for requests
http.createServer(app).listen(3000);



app.get("/todos.json", function (req, res) {		

			ToDo.find({},function(err,ToDos){
				//don't forget to check for errors!
			res.json(toDos);	//returns all todos as a big object
			});
});

app.post("/todos", function (req, res) {
	console.log(req.body);
	var newToDo=new ToDo({"description":req.body.description,
		"tags":req.body.tags});
	newToDo.save(function (err,result) {	//saves todo object into our database
		if (err !== null) {
				console.log(err);
				res.send("ERROR");
		} else {
			//our client expects 'all' of the todo items to be returned,
			//so we do an additional request to maintain compatibility
			
			ToDo.find({}, function (err,result) {
				if (err !== null) {
					//the element did not get saved!
					res.send("ERROR");
				}
				res.json(result);
			});
		}
	});
});
	
	
	//var newTask = req.body;		//request body is the body of $.post in the js file




console.log("Magic happens on port 3000");