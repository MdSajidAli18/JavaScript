
//
const userEmail = "siri@google.com"
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

console.log("\n");


//
const userEmail1 = ""
if(userEmail1){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

console.log("\n");


//
const userEmail2 = " "
if(userEmail2){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

console.log("\n");


//
const userEmail3 = []
if(userEmail3){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

console.log("\n");


//
const username = []
if(username.length === 0){
    console.log("Array is empty");
}

console.log("\n");


//
const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is empty");
}

console.log("\n");




/*Important:-

falsy values:-
false, 0, -0, BigInt 0n, "", null, undefined, NaN


truthy values
true, 'false', "0", " ", [], {}, function(){}

*/


/*Note:-

false === 0 ---> true
false == '' ---> true
0 == '' ---> true

*/



//
// Nullish Coalescing Oprator (??) : null, undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

let val2;
val2 = null ?? 10
console.log(val2);

let val3;
val3 = undefined ?? 10
console.log(val3);

let val4;
val4 = null ?? 10 ?? 20
console.log(val4);

console.log("\n");



// Terniary operator --> ?
const value = 100
value >= 80 ? console.log("Siri") : console.log("moto")
value < 80 ? console.log("Max") : console.log("Jack")