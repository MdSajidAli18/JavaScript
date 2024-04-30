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