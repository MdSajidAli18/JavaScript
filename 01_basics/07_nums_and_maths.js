/* ******************* Numbers ******************* */

const score = 400
console.log(score); // output: 400

const balance = new Number(300)
console.log(balance); // output: [Number: 300]
console.log(balance.toString()); // output: 300 (Now, this is string)
console.log(balance.toString().length); // output:3
console.log(balance.toFixed(2)); // output: 300.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); // output: 23.9
const anotherNumber = 123.8966
console.log(anotherNumber.toPrecision(3)); // output: 124
console.log(anotherNumber.toPrecision(4)); // output: 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // output: 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // output: 10,00,000


/* ******************* Maths ******************* */

console.log(Math); // output: Object [Math] {}
console.log(Math.abs(-4)); // output: 4
console.log(Math.abs(4)); // output: 4
console.log(Math.round(4.3)); // output: 4
console.log(Math.round(4.6)); // output: 5
console.log(Math.ceil(4.2)); // output: 5
console.log(Math.floor(4.9)); // output: 4
console.log(Math.min(4, 3, 6, 8)); // output: 3
console.log(Math.max(4, 3, 6, 8)); // output: 8

console.log(Math.random()); // output: The value always falls within the range of 0 to 1.
console.log( (Math.random()*10) + 1) ; // output: greater than 1

const min = 10
const max = 20
console.log(Math.floor( Math.random()*(max - min + 1) ) + min);