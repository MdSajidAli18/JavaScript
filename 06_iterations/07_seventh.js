//
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNewNumbers = myNumbers.map( (num) => num + 10)
console.log(myNewNumbers);

console.log("\n");


//
const yourNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const yourNewNumbers = yourNumbers
.map( (num) => num * 10)
.map( (num) => num + 2)

console.log(yourNewNumbers);

console.log("\n");


//
const yourNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const yourNewNums = yourNums
.map( (num) => num * 10)
.map( (num) => num + 2)
.filter( (num) => num >= 40)

console.log(yourNewNums);