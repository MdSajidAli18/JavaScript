//
const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}

//console.log(`User power: ${power}`); // We can not do this because this is outside of "if" scope

console.log("\n");


//
const balance = 1000
if(balance > 500) console.log("test");

console.log("\n");


//
const marks = 1000
if(marks < 500){
    console.log("less than 500");
}
else if(marks < 800){
    console.log("less than 800");
}
else if(marks < 900){
    console.log("less than 900");
}
else{
    console.log("equal to 1000");
}

console.log("\n");


//
const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

console.log("\n");


//
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}

console.log("\n");



