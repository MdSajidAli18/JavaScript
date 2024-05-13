// for-of loop //

/*
Basic format of for-of loop:-

for (const iterator of object) {
    
}

*/



//
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

console.log("\n");

//
const greetings = "Hello moto"
for (const greet of greetings) {
    console.log(`Char is ${greet}`);
}

console.log("\n");



// Maps //
// The Map object holds key-value pairs and remembers the original order of the keys. Any value(both objects and primitive values) may be used as either a key or a value.

const map = new Map()
map.set('IND', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IND', "India")

console.log(map);

console.log("\n");

for (const [key, value] of map) {
    console.log(key,'-->',value);
}