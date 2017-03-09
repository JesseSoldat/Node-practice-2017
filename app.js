var express = require('express'); //returns a function
var port = 3000;

var people = ['jesse','nate','marcia','mark'];

var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){
	// res.send('Jlab is running');
	// res.sendFile(__dirname + '/index.html');
	res.render('index');
	//do not need to set up headers Express does this for us
	//.send is an express method
});

app.get('/contact', function(req, res){
	// res.send('Contact');
	// res.sendFile(__dirname + '/contact.html');
	res.render('contact');
});

app.get('/profile/:id', function(req, res){
	var id = req.params.id;
	// http://localhost:3000/profile/1
	// res.send('Profile: ' + id);
	let person = people[id]; //Nate
	let data;

	switch(person) {
		case 'jesse':
			data = {
				name: 'Jesse',
				age: 36,
				email: 'js@hotmail.com',
				hobbies: ['Japanese', 'Coding', 'Reading']
			}
			break;

		case 'nate':
			data = {
				name: 'Nate',
				age: 38,
				email: 'ns@hotmail.com',
				hobbies: ['Biking', 'Dancing', 'Socializing']

			}
			break;

		case 'mark':
			data = {
				name: 'Mark',
				age: 70,
				email: 'mark@hotmail.com',
				hobbies: ['Music', 'Movies', 'Reading']

			}
			break;

		case 'marcia':
			data = {
				name: 'Marcia',
				age: 73,
				email: 'marcia@hotmail.com',
				hobbies: ['Pets', 'Cooking', 'Reading']

			}
			break;

		default:
			data = {
				name: 'Unknown User',
				age: '?',
				email: 'unknown'
			};
	
	}
	number = Math.floor((Math.random() * 3));
	console.log(number);

	res.render('profile', {data: data, number: number});
	//views/template engines (render knows to look in the views folder /default behavior)
	//output data <%= %>  output javascript <% %>
});

app.listen(port);