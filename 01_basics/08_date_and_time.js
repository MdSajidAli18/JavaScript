
let myDate = new Date()
console.log(myDate.toString()); // output: Wed May 01 2024 23:38:02 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // output: Wed May 01 2024
console.log(myDate.toISOString()); // output: 2024-05-01T18:08:02.806Z
console.log(myDate.toLocaleDateString()); // output: 5/1/2024
console.log(myDate.toLocaleString()); // output: 5/1/2024, 11:38:02 PM
console.log(typeof myDate); // output: object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); // output: Mon Jan 23 2023

let yourCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(yourCreatedDate.toLocaleString()); // output: 1/23/2023, 5:03:00 AM

let createdDate = new Date("2023-01-14")
console.log(createdDate.toLocaleString()); // output: 1/14/2023, 5:30:00 AM

let createdDateByMe = new Date("01-14-2023")
console.log(createdDateByMe.toLocaleString()); // output: 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); // output: 1714588634696 (in millisecs)
console.log(Math.floor(Date.now()/1000)); // ouput: 1714588634 (in millisecs)

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})