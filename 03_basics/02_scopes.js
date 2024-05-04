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

console.log("\n");



// Multiple scope //

function one() {
    const username = "Sajid"

    function two() {
        const website = "Youtube"
        console.log(username); // We can access the 'username' because two() function is inside the one() function.
        console.log(website);
    }
    //console.log(website); // We can not access the 'website' because the scope of 'website' is limited only within the two() function.

    two()
}

one()

console.log("\n");


//
if(true) {
    const username = "MAxwell"
    if(username === "MAxwell") {
        const website = "Google"
        console.log(username + website);
        console.log(website);
    }
    //console.log(website); // We can not access the 'website' because the scope of 'website' is limited only within the two() function.
    console.log(username);
}

//console.log(username); // We can not access the 'username' because the scope of 'username' is limited only within the if(){}.

console.log("\n");


// *************************** Interesting ********************** //

//
console.log("Hey", addOne(5));

function addOne(num) {
    return num + 1
}

console.log("Hello", addOne(7));

console.log("\n");


//
//console.log("Hi", addTwo(5)); // We can not do this in this case.

const addTwo = function(num) {
    return num + 2
}

console.log("Ok", addTwo(9));
