
//
const Heros = ["Batman", "Flash", "Ironman", "Spiderman"]

Heros.forEach( function (item) {  // Inside the forEach, it takes a 'callback function' which has no name.
    console.log(item);
})


console.log("\n");


//
const Clothes = ["Shirt", "Jeans", "Jacket", "T-shirt"]

Clothes.forEach( (item) => {
    console.log(item);
})

console.log("\n");


//
function printClothes(item){
    console.log(item);
}

Clothes.forEach(printClothes)


console.log("\n");


//
Heros.forEach( (item, index, arr) => {
    console.log(item, '->', index, '->', arr);
})

console.log("\n");


//
const myCoding = [

    {
        programmingName: 'Javascript',
        programmingFileName: 'js'
    },
    {
        programmingName: 'Python',
        programmingFileName: 'py'
    },
    {
        programmingName: 'Java',
        programmingFileName: 'java'
    }

]

myCoding.forEach( (item) => {
    console.log(item.programmingName);
})