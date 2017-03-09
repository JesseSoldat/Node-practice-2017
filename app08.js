var http = require('http');
var fs = require('fs');
var port = 3000;
var host = '127.0.0.1';

//local to the files
var myReadStream = fs.createReadStream(__dirname + '/readNews.txt', 'utf8');

var myWriteStream = fs.createWriteStream(__dirname + '/writeNews.txt', 'utf8');
//myWriteStream is only needed to write to the file system

// myReadStream.pipe(myWriteStream);
//write to a file on the computer

var server = http.createServer(function(req, res){
	//res object is a writable stream
	console.log('request was made to: ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	

	myReadStream.pipe(res);
	//write to the browser
	// res.end('Jlab');
});

server.listen(port, host);
console.log('Jlab is running at '+host+':'+port);