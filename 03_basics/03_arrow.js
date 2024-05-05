const user = {
    username: "Jofra",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
console.log("\n");

user.username = "Starc"
user.welcomeMessage()

console.log("\n");

console.log(this);

console.log("\n");


//
function protein() {
    console.log(this);
}

protein()

console.log("\n");


//
function asus() {
    let username = "Max"
    console.log(this.username); // We can not do this.
}

asus()

console.log("\n");



//
// Arrow function :- () => {}

const dettol = () => {
    let username = "Bacteria"
    console.log(this);
    console.log(this.username); // we can not do this.
}


dettol()

console.log("\n");

//
const addTwo = (num1, num2) => {  // Holding the arrow function in a variable 'addTwo'
    return num1 + num2
}

console.log(addTwo(6, 3));

console.log("\n");



// Implicit return arrow function //
const addThree = (num1, num2, num3) => num1 + num2 + num3

console.log(addThree(3, 4, 5));

console.log("\n");



// another way of writing Implicit return arrow function //
const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4)

console.log(addFour(6, 9, 1, 7));

console.log("\n");