var express = require("express"),
    http = require("http"),
    app = express(),
	toDos=	[


		{ 
			"description" : "Get groceries",
			"tags"  : [ "shopping", "chores" ]
		},
		{ 
			"description" : "Make up some new ToDos",
			"tags"  : [ "writing", "work" ]
		},
		{
			"description" : "Prep for Monday's class",
			"tags"  : [ "work", "teaching" ]
		},
		{ 
			"description" : "Answer emails",
			"tags"  : [ "work" ]
		},
		{ 
			"description" : "Take Gracie to the park",
			"tags"  : [ "chores", "pets" ]
		},
		{ 
			"description" : "Finish writing this book",
			"tags"  : [ "writing", "work" ]
		}


];

app.use(express.static(__dirname + "/client"));		

app.use( express.urlencoded() );

http.createServer(app).listen(3000);


app.get("todos.json", function (req, res) {		

			console.log("ToDo's Length GET = " + toDos.length );
			res.json(toDos);
	
		
});

app.post("/todos", function (req, res) {
	var newTask = req.body;		//request body is the body of $.post in the js file
	console.log("Data has been posted " + newToDo );
	
	toDos.push( newTask );
	
	console.log("ToDo's Length = " + toDos.length );
	
	res.json({"message":"You posted to the server!"});
});

console.log("Magic happens on port 3000");