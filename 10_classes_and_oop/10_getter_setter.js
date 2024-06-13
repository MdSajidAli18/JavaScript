
class User {

    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}jack`
    }

    set password(value){
        this._password = value
    }
}

const jack = new User("willjacks@.ai", "abc")
console.log(jack.email);
console.log(jack.password);
