
// Class Constructor //

class User {
    
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const Siri = new User("siri01", "siri@example.com", "siri#5643");

console.log(Siri.encryptPassword());