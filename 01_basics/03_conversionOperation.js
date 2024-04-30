/* ******************** Coversions ******************* */ 

let score = 33
console.log(typeof score); // output: number
console.log(typeof (score)); // output: number


let runs = "33"
console.log(typeof runs); // output: string
let runsInNumber = Number(runs)
console.log(typeof runsInNumber); // output: number
console.log(runsInNumber); // output: 33


let points = "33abc"
console.log(typeof points); // output: string
let pointsInNumber = Number(points)
console.log(typeof pointsInNumber); // output: number
console.log(pointsInNumber); // output: NaN (Not a Number)



let answer = true
console.log(typeof answer); // output: boolean
let answerInNumber = Number(answer)
console.log(typeof answerInNumber); // output: number
console.log(answerInNumber); // output: 1



let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // output: true

// let isLoggedIn = 0
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // output: false

// let isLoggedIn = "Sajid"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // output: true

// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // output: false



let num = 44
let numInString = String(num)
console.log(typeof numInString); // output: string
console.log(numInString); // output: 44



 /* ********************* Operations ******************** */

 let value = 3
 let negValue = -value
 console.log(negValue); // output: -3


 console.log(2+2); // output: 4
 console.log(2-2); // output: 0
 console.log(2*2); // output: 4
 console.log(2**3); // output: 8
 console.log(2/3); // output: 0.666666666666
 console.log(2%3); // output: 2


 let str1 = "Hello"
 let str2 = " Sajid"
 let str3 = str1 + str2
 console.log(str3); // output: Hello Sajid


 console.log("1" + 2); // output: 12
 console.log(1 + "2"); // output: 12
 console.log("1" + 2 + 2); // output: 122
 console.log(1 + 2 + "2"); // output: 32

 console.log(true); // output: true
 console.log(+true); // output: 1
 console.log(+""); // output: 0


 let gameCounter1 = 100
 gameCounter1++;
 console.log(gameCounter1); // output: 101

 let gameCounter2 = 100
 ++gameCounter2;
 console.log(gameCounter2); // output: 101

 let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`); // Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);// Expected output: "a:4, b:4"


// Link to study:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

