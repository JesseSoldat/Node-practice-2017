var express = require('express'); //returns a function
var port = 3000;

var app = express();

app.get('/', function(req, res){
	// res.send('Jlab is running');
	res.sendFile(__dirname + '/index.html');
	//do not need to set up headers Express does this for us
	//.send is an express method
});

app.get('/contact', function(req, res){
	// res.send('Contact');
	res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:id', function(req, res){
	var id = req.params.id;
	res.send('Profile: ' + id);
});

app.listen(port);