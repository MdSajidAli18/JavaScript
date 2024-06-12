let myName = "Sajid"
let yourName = "Binod   "

console.log(myName.length);
console.log(yourName.length);


console.log("-----------------------");

let myHeros = ["Thor", "Spiderman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.Sajid = function(){
    console.log(`Sajid is present in all objects.`);
}

Array.prototype.Moto = function(){
    console.log(`Moto says hello.`);
}

myHeros.Sajid()
heroPower.Sajid()
myHeros.Moto()
// heroPower.Moto() // Can't do this coz 'heroPower' is a object and 'Moto' is defined as 'Array'.

console.log("______________________________");


//   inheritance //

const User = {
    username: "Siri",
    email: "siri@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax. //
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "Johnson   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"Sajid".trueLength()
"Binod".trueLength()