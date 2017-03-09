var http = require('http');
var fs = require('fs');
var data = require('./starwars.json');
var port = 3000;
var host = '127.0.0.1';

// console.log(data);

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'Application/json'});
	var myResponse = JSON.stringify(data);
	res.end(myResponse);
});

server.listen(port, host, function(){
	console.log('Server running at '+host+':'+port);
});