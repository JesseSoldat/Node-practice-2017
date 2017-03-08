let stuff = require('./stuff');


var items = stuff.counter([1,2,3,4,5,6,7,8,9,10]);

console.log(items);
console.log(stuff.adder(5,9));
console.log(stuff.adder(stuff.pi, 5));
