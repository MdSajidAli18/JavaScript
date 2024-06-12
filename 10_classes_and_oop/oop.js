const user = {
    username: "Moto",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        console.log(this);
        console.log("/n4");
        console.log(`UseRname: ${this.username}`);
        console.log("/n5");
    }
}

console.log("/n1");
console.log(user.username);
console.log("/n2");
console.log(user.loginCount);
console.log("/n3");

console.log(user.getUserDetails());


console.log("--------------------------");


// Constructor concept. //

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Siri", 5, true)
const userTwo = new User("Willey", 4, true)
console.log(userOne);
console.log(userTwo);