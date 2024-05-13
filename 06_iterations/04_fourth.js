// for-in loop //

/*
Basic structure of forin loop
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/



const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(key);
    console.log("\n");

    console.log(myObject[key]);
    console.log("\n");

    console.log(`${key} shortcut is for ${myObject[key]}`);
    console.log("\n");

    console.log(myObject);
    console.log("\n");
}


// Note: Use forin loop for object