
// singleton object
const whatsappUser = new Object()
console.log(whatsappUser); // output: {}

// non-singleton object
const threadsUser = {}
console.log(threadsUser); // output: {}

//
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Moto"
tinderUser.isLoggedIn = false

console.log(tinderUser); // output: { id: '123abc', name: 'Moto', isLoggedIn: false }


//
const regularUser = {
    email: "siri@google.com",
    fullname: {
        userfullname: {
            firstname: "siri",
            lastname: "google"
        }
    }
}

console.log(regularUser.fullname); // output: { userfullname: { firstname: 'siri', lastname: 'google' } }
console.log(regularUser.fullname.userfullname); // output: { firstname: 'siri', lastname: 'google' }
console.log(regularUser.fullname.userfullname.firstname); // output: siri
console.log(regularUser.fullname.userfullname.lastname); // output: google


//
const object1 = {1: "a", 2: "b"}
const object2 = {3: "c", 4: "d"}

const object3 = Object.assign({}, object1, object2)
console.log(object3); // output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const object4 = {...object1, ...object2}
console.log(object4); // output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



//
const InstaUser = {}

InstaUser.id = "345xyz"
InstaUser.name = "Siri"
InstaUser.isLoggedIn = true

console.log(InstaUser); // output: { id: '345xyz', name: 'Siri', isLoggedIn: true }
console.log(Object.keys(InstaUser)); // output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(InstaUser)); // output: [ '345xyz', 'Siri', true ]
console.log(Object.entries(InstaUser)); // output: [ [ 'id', '345xyz' ], [ 'name', 'Siri' ], [ 'isLoggedIn', true ] ]


console.log(InstaUser.hasOwnProperty('name')); // output: true
console.log(InstaUser.hasOwnProperty('password')); // output: false




// Objects destructuring //

const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor} = course  // destructuring the object(course)
console.log(courseInstructor); // output: Hitesh

const {courseInstructor: Instructor} = course  // destructuring the object(course)
console.log(Instructor); // output: Hitesh

const {courseInstructor: Instrctr} = course  // destructuring the object(course)
console.log(Instrctr); // output: Hitesh




// JSON API//
/*
{
    "name": "Hitesh",
    "coursename": "Advanced JavaScript",
    "price": "1999"
}
*/

[
    {},
    {},
    {}
]



