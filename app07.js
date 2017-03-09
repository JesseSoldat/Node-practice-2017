var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readNews.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeNews.txt', 'utf8');

myReadStream.on('data', function(chunk){
	myWriteStream.write(chunk);
});