// Basic syntex of switch:-

/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/


//
const month = 3  // key-->month,  value-->3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case");
        break;
}

console.log("\n");



//
const day = "Wed"  // key-->day,  value-->Wed
switch (day) {
    case "Mon":
        console.log("Monday");
        break;
    case "Tue":
        console.log("Tuesday");
        break;
    case "Wed":
        console.log("Wednesday");
        break;
    case "Thur":
        console.log("Thursday");
        break;

    default:
        console.log("default case");
        break;
}

console.log("\n");