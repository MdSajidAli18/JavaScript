// Immediately Invoked Function Expressions (IIFE)

// named iife
( function jeans(){
    console.log(`DB CONNECTED`);
} )(); // semicolon is important.


// unnamed iife
( () => {
    console.log(`Database Connected`);
} )();


// unnamed iife with parameter
( (name) => {
    console.log(`${name}, your database is connected`);
} )('Jack');


