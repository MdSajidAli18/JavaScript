//
function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("J");
    console.log("I");
    console.log("D");
}

sayMyName()

console.log("\n");


//
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers(6, 3)
addTwoNumbers(6, "3")
addTwoNumbers(6, null)

const result = addTwoNumbers(6, 3)
console.log("Result: ", result);

console.log("\n");


//
function addTwoNums(number1, number2) {
    let result = number1 + number2
    return result
}

const resultt = addTwoNums(6, 3)
console.log("Result: ", resultt);

console.log("\n");


//
function multiplyTwoNumbers(num1, num2) {
    return num1*num2
}

const ans = multiplyTwoNumbers(7, 6)
console.log("Answer: ", ans);

console.log("\n");


//
function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("Sajid"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());

console.log("\n");


//
function registerUserMessage(username) {
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just registered`
}

console.log(registerUserMessage());
console.log(registerUserMessage("Moto"));

console.log("\n");


//
function signUpUserMessage(username = "Siri") {
    if(!username){
        console.log("Please enter a username ");
        return
    }
    return `${username} just signed up`
}

console.log(signUpUserMessage());
console.log(signUpUserMessage("Sam"));