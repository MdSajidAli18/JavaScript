/*  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise  */


//1.
const promiseOne = new Promise(function(resolve, reject){
    // Do async task:
    // DB calls, Cryprography, network.

    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    }, 1000)
});

promiseOne.then(function(){
    console.log("Promise consumed");
    console.log("/n1");
});



//2.
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
    console.log("/n2");
});



//3.
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Moto", email: "moto@example..com"});
    }, 1000)
});

promiseThree.then(function(MOTO){
    console.log(MOTO);
    console.log("/n3");
});



//4.
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({usernameee: "Siri", password: "siri246"});
        }else{
            reject('ERROR: Something went wrong');
        }
    }, 1000)
});

promiseFour
.then((SIRI) => {
    console.log(SIRI);
    console.log("/n4");
    return SIRI.usernameee
})
.then((usernameee) => {
    console.log(usernameee);
    console.log("/n5");
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"));



//5.
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({useRname: "Poco", paSsword: "poco321"});
        }else{
            reject('ERROR: Poco went wrong');
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const reSponce = await promiseFive;
        console.log(reSponce);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


//6.
fetch('https://api.github.com/users/MdSajidAli18')
.then((rEsponse) => {
    return rEsponse.json();
})
.then((daTa) => {
    console.log(daTa);
});