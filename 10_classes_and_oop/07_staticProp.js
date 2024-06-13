
class User {

    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Sajid = new User("Sajid")
// console.log(Sajid.createId())

class Teacher extends User {

    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId()); // We can't do this coz of 'static' creatId().
