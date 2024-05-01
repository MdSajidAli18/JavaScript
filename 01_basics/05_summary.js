// Primitive data types: 
// 7 types:- String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference(Non-Primitive) data types:
// Array, Objects, Functions

// Link to study
// https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/



// Note:- 
//JavaScript is a dynamically typed language, but TypeScript is a statically typed language. Longer answer: In dynamically typed languages -
// all type checks are performed in a runtime, only when your program is executing. So this means you can just assign anything you want to the variable and it will work
//https://miro.medium.com/v2/resize:fit:640/format:webp/0*NVWU-kfUNJICyhpK.png



const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // output: false

// Array:-
const heros = ["Ironman", "Thor", "Hulk"]

// Object:-
let myObj = {
    name: "Sajid",
    age: 21,
}

// function:-
const myFunction = function(){
    console.log("Hello moto");
}

//
console.log(typeof myFunction); // output: function




/* *************************** Memory ************************** */

// 1. Stack memory:
// used in primitive data types
// Ex:-
let myName = "Sajid"
let anotherName = myName  // Passing by value
anotherName = "Saajjid"
console.log(myName); // output: Sajid
console.log(anotherName); // output: Saajjid


// 2. Heap memory:
// used in non-primitive data types
//Ex:-
let userOne = {
    email: "hello@google.com",
    upi: "hello@ybl"
}
let userTwo = userOne  // Passing by reference
userTwo.email = "hey@meta.com"
console.log(userOne.email); // output: hey@meta.com
console.log(userTwo.email); // output: hey@meta.com