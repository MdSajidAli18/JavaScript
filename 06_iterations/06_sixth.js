//
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNewNums = myNums.filter( (num) => num > 4)

console.log(myNewNums);


console.log("\n");



//
const yourNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const yourNewNums = yourNums.filter( (num) => {
    return num > 4
})

console.log(yourNewNums);


console.log("\n");


//
const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myNums2 = []

myNums1.forEach( (num) => {
    if(num > 4){
        myNums2.push(num)
    }
})

console.log(myNums2);

console.log("\n");



//
const books = [
    {title: 'Booke One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Booke Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Booke Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Booke Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Booke Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Booke Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Booke Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Booke Eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Booke Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}
];

let userBooks = books.filter( (boookss) => boookss.genre === 'History')
console.log(userBooks);

console.log("-----------------------");

userBooks = books.filter( (boookss) => boookss.publish >= 2000)
console.log(userBooks);

console.log("***************************");

userBooks = books.filter( (boookss) => {
    return boookss.publish >= 1995 && boookss.genre === 'History'
})
console.log(userBooks);