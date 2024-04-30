console.log(2 > 1); // output: true
console.log(2 >= 1); // output: true
console.log(2 < 1); // output: false
console.log(2 <= 1); // output: false
console.log(2 == 1); // output: false
console.log(2 != 1); // output: true

console.log("2" > 1); // output: true
console.log("02" > 1); // output: true

console.log(null > 0); // output: false
console.log(null == 0); // output: false
console.log(null >= 0); // output: true
// The reason is that an equality check == and comarisions > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false.
c

// The main difference between the == and === operator in javascript is that the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands. Use `===` for strict equality checks.
let string = "10"; 
let number = 10;  
console.log(string == number); // output: true
console.log(string === number); // output: false

let word1 = "apple" 
let word2 = "AppLe"
console.log(word1 == word2); // output: false
console.log(word1 === word2); // output: false
