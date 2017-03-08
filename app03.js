var events = require('events');
var util = require('util');
//-------------------------------------------------------
// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg, num1, num2){
// 	console.log(msg);
// 	console.log(num1 + num2);
// });
//name of emitter and parameters 
// myEmitter.emit('someEvent', 'Hello from my Emitter!', 3, 5);
//-------------------------------------------------------
var Person = function(name){
	this.name = name;
};
//any person created by using the Person construtor will inherit the EVENT EMITTTER using UTIL
util.inherits(Person, events.EventEmitter);

var jesse = new Person('Jesse');
var nate = new Person('Nate');
var mark = new Person('Mark');
var marcia = new Person('Marica');

var people = [jesse, nate, mark, marcia];
//can use events for each person since we inherited the EVENTEMITTER
people.forEach(function(person){
	person.on('speak', function(msg){
		console.log(person.name + ' said: ' +msg);
	});
});

jesse.emit('speak', 'I am loving this Node stuff!');
nate.emit('speak', 'I prefer urban development!');
mark.emit('speak', 'I am more about the law!');
marcia.emit('speak', 'I am into women\'s rights!');
