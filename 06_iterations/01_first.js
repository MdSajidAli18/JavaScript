// Loops are also called iterations.



/*A basic structure of for loop:

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

*/



//
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    
}
//console.log(element); // We can not access the 'element' outside the scope of 'for loop'.

console.log("\n");


//
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
    
}

console.log("\n");

//
for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 5; j++) {
        console.log(`Inner loop value ${j} and outer loop value ${i}`);
        
    }
    
}

console.log("\n");


//
let myArray = ["flasf", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

console.log("\n");


// break and continue

for (let index = 1; index <= 10; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of index is ${index}`);
    
}

console.log("\n");

for (let index = 1; index <= 10; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of index is ${index}`);
    
}



