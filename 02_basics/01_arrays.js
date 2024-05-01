const myArr = [2, 4, 5, 7, 8, 9] // Array declaration

const myHeros = ["Thor", "Batman", "Hulk"] // Array declaration

const myArr2= new Array(1, 2, 3, 4, 5) // Array declaration
console.log(myArr2[0]); // output: 1

console.log('**********');

// Array methods:

myArr.push(11) // Push element at last index
console.log(myArr); // output: [2, 4,  5, 7, 8, 9, 11]

myArr.pop() // Pop elment from last index
console.log(myArr); // output: [2, 4,  5, 7, 8, 9]

console.log('**********');

myArr.unshift(63) // Push element at first/starting index. (But this is not a good way coz we have to shift all the elements of the array and then we can push at first index. So it will be very bad in case of too many elements)
console.log(myArr); // output: [63, 2, 4,  5, 7, 8, 9]

myArr.shift() // Remove element from first/starting index
console.log(myArr); // output: [ 2, 4, 5, 7, 8, 9 ]

console.log('**********');

console.log(myArr.includes(8)); // output: true (Yes, 9 is present in the array)
console.log(myArr.includes(13)); // output: false

console.log(myArr.indexOf(7)); // output: 3

console.log('***********');

const newArr = myArr.join()
console.log(myArr); // output: [ 2, 4, 5, 7, 8, 9 ]
console.log(newArr); // output: 2,4,5,7,8,9
console.log(typeof myArr); // output: object
console.log(typeof newArr); // output: string

console.log('***********');

const yourArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(yourArr.slice(0, 6));
console.log(yourArr.splice(0, 6));