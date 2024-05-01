const name = "Sajid"
const repoCount = 7
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another way to declare a string
const gameName = new String('cricket')
console.log(gameName[0]); // output: c
console.log(gameName.__proto__); // output: {}
console.log(gameName.length); // output: 7
console.log(gameName.toUpperCase()); // output: CRICKET
console.log(gameName.charAt(4)); // output: k
console.log(gameName.indexOf('k')); // output: 4

const newString = gameName.substring(0, 4)
console.log(newString); // output: cric

const anotherString = gameName.slice(-7, 3)
console.log(anotherString); // output: cri

const newString1 = "   Sajid   "
console.log(newString1); // output: ...Sajid... (dots are denoting the spaces of the both side of the string Sajid)
console.log(newString1.trim()); // output: Sajid (`trim()` removes spaces. )

const url = "https://moto.com/moto%20siri"
console.log(url.replace('%20', '-')); // output: https://moto.com/moto-siri
console.log(url.includes('siri')) // output: true

const str = new String('ok-no-problem')
console.log(str.split('-')); // output: [ 'ok', 'no', 'problem' ]