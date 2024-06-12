function SetUsername(username){
    // complex DB calls
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const siri = new createUser("Siri1", "siri@example.com", "siri@345")
console.log(siri); 