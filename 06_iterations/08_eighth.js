//
const array1 = [1, 2, 3, 4]
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
);

console.log(sumWithInitial);
// Expected output: 10 (0 + 1 + 2 + 3 + 4)


console.log("\n");


//
const myNums = [1, 2, 3, 4]
const myTotal = myNums.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
);

console.log(sumWithInitial);
// Expected output: 10 (0 + 1 + 2 + 3 + 4)

console.log("\n");



//
const shoppingCart = [

    {
        itemName: "Shoes",
        price: 2999
    },
    {
        itemName: "Jeans",
        price: 1999
    },
    {
        itemName: "Shirt",
        price: 999
    }

]

const priceToPay = shoppingCart.reduce( (accumulator, item) => accumulator + item.price,  0)

console.log(priceToPay);










// Here we have completed the part-1 of Javascript video.