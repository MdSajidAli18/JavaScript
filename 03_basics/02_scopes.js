let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

console.log("\n");


// {} ---> scope

let x = 123
const y = 456
var z = 789

if(true) {
    let x = 321
    const y = 654
    var z = 987
    console.log("Inner: ", x);
    console.log("Inner: ", y);
    console.log("Inner: ", z);
}

console.log(x);
console.log(y);
console.log(z);