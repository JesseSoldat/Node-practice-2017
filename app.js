var express = require('express'); //returns a function
var bodyParser = require('body-parser');
var port = 3000;

var people = ['jesse','nate','marcia','mark'];

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
//body parser gives us req.body

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
//middleware
//you can match to a route. if you don't put a route it will use this on every route

app.get('/', function(req, res){
	// res.send('Jlab is running');
	var number = Math.floor((Math.random() * 5));
	//0 - 4 (4 is our unknown user)
	
	// res.sendFile(__dirname + '/index.html');
	res.render('index', {number: number});
	//do not need to set up headers Express does this for us
	//.send is an express method
});

app.get('/contact', function(req, res){
	//http://localhost:3000/contact?dept=marketing&name=jesse
	console.log(req.query); //{ dept: 'marketing', name: 'jesse' }
	// res.send('Contact');
	// res.sendFile(__dirname + '/contact.html');
	var number = Math.floor((Math.random() * 5));

	res.render('contact', {number: number, qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res) {
	console.log(req.body);

	var number = Math.floor((Math.random() * 5));

//body parser gives us req.body
//name="who" name="department" name="email" {who: 'jesse', department: 'marketing', email: 'jsoldat@hotmail.com'}
	res.render('contact-success', {number: number, data: req.body});

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
				email: 'unknown',
				hobbies: ['unknown hobbies']

			};
	
	}
	
	var number = Math.floor((Math.random() * 5));

	res.render('profile', {data: data, number: number});
	//views/template engines (render knows to look in the views folder /default behavior)
	//output data <%= %>  output javascript <% %>
});

app.listen(port);