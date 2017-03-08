let http = require('http');
let fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/news.txt');
var myReadStreamUtf8 = fs.createReadStream(__dirname + '/news.txt', 'utf8');


let chunks = 0;

myReadStream.on('data', function(chunk){
	chunks += 1; 
	console.log('--------------'+chunks+' New Chunks Of Data------------------');
	console.log(chunk);
	console.log('------------------------------------------------------------');
});
//as each chunk is recieved we can pass it on instead of waiting for all of it to be read