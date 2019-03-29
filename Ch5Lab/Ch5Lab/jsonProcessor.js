"use strict"

		//json is a very efficient format for reading data and adding it on the fly

$( function() {
	console.log("Getting Here!");
	
	var data={		//a more complex variable
	
		"players":
		[
			{
	
				"firstName": "Ryan",		//assigns a value
				"lastName": "DesRoches",
				"age": 40,
				"dateJoined": "May 1, 2000",
				"accountHolder": true
			},
			
			{
	
				"firstName": "Kalin",		//assigns a value
				"lastName": "DesRoches",
				"age": 6,
				"dateJoined": "March 9, 2005",
				"accountHolder": false				
			},
			
			
			{
	
				"firstName": "Becky",		//assigns a value
				"lastName": "DesRoches",
				"age": 39,
				"dateJoined": "June 4, 2003",
				"accountHolder": false				
			}
		]
	};
	
	console.log( "First Name = " + data.players[1].firstName);		//players is a data object
	console.log( "Date Joined = " + data.players[1].dateJoined);
	
	data.players.forEach(function(foo){
		console.log( "First Name: " + foo.firstName + " | " + "Last Name: " + foo.lastName + " | " + "Age: " + foo.age)

	});
	
	
	
	
	
	
	for (var i=0; i< data.players.length; i++)		//uses a foor loop to iterate and prints all account holders
	{
			console.log(data.players[i]);			//marker to show current place in loop
		if (data.players[i].accountHolder)			//if account holder is true, prints firstname + "is an acct holder"
			{
				console.log(data.players[i].firstName + " is an account holder");	
			}
	}
	
	
	
});