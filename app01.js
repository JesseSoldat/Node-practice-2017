// console.log(global);
var fileName = __filename; //full path to file inclued file name
var dirName = __dirname; //full path to directory
//console.log('FILENAME: ',fileName);
//console.log('DIRNAME: ',dirName);

var time = 0;

// setTimeout(function(){
// 	console.log('3 seconds has passed');
// },3000);

var timer = setInterval(function(){
	time += 2;
	console.log(time + ' seconds has passed');

	if(time >= 10){
		clearInterval(timer);
	}
},2000);

//Passing functions
function callFunction(fun){
	fun();
}

//function expression
var sayBye = function(){
	console.log('good bye');
};

callFunction(sayBye);



