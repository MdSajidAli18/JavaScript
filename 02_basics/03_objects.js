// singleton (We will learn this later)
// Object.create



 
// object literals

// #1
const JavaScriptUser = {
    name: "Sajid",
    age: 21,
    location: "Tezpur",
    email: "Sajid@moto.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "full name": "Md Sajid Ali"
}
console.log(JavaScriptUser); //{ name: 'Sajid', age: 21, location: 'Tezpur', email: 'Sajid@moto.com', isLoggedIn: false, lastLoginDays: [ 'Monday', 'Saturday' ], 'full name': 'Md Sajid Ali' }
console.log(JavaScriptUser.email); // output: Sajid@moto.com
console.log(JavaScriptUser["email"]); // output: Sajid@moto.com
// console.log(JavaScriptUser.full name); // can't access by this method
console.log(JavaScriptUser["full name"]); // output: Md Sajid Ali



// #2
const mySymbol  = Symbol("key1")
const JsUser = {
    name: "Siri",
    age: 20,
    [mySymbol]: "key1",
    location: "google",
    email: "siri@google.com"
}
console.log(JsUser); // output: { name: 'Siri', age: 20, location: 'google', email: 'siri@google.com', [Symbol(key1)]: 'key1' }
console.log(JsUser[mySymbol]); // output: key1

JsUser.email = "siri@meta.com"
console.log(JsUser); // output: { name: 'Siri', age: 20, location: 'google', email: 'siri@meta.com', [Symbol(key1)]: 'key1' }

Object.freeze(JsUser)

JsUser.email = "siri@microsoft.com"
console.log(JsUser); // output: { name: 'Siri', age: 20, location: 'google', email: 'siri@meta.com', [Symbol(key1)]: 'key1' }



// #3
newJsUser = {
    name: "Moto",
    age: 21,
    email: "moto@m.com"
}

newJsUser.greeting = function(){
    console.log("Hello new JS user");
}
console.log(newJsUser.greeting); // output: [Function (anonymous)]
console.log(newJsUser.greeting()); // output: Hello new JS user

newJsUser.greeting2 = function(){
    console.log(`Hello new JS user, ${this.name}`);
}
console.log(newJsUser.greeting2()); // output: Hello new JS user, Moto
