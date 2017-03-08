var http = require('http');
var port = 9000;

var server = http.createServer(function(req, res){
	console.log('request was made: '+req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Jlab recieved your request')
});

server.listen(port, '127.0.0.1');
console.log('Sever running at localhost:'+port);