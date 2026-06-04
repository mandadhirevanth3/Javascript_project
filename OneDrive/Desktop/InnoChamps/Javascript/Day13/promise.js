// request comes and initially it will be in pending state 
// javascript tells that u be in the pending state, and when the request is successfull, 
    // then u will be in the resolved state, and if the request is failed, then u will be in the rejected state

// promise is a class in javascript, and it has two parameters, resolve and reject
// resolve is a function that is called when the request is successful, 
// and reject is a function that is called when the request is failed

// javascript is asynchronus, that multiple requests can be made at the same time, but not in a order.

let p = new Promise((resolve) => {
    resolve("done");
})
p.then(console.log) 

//p.then((result) => {

    // printing the result
    //console.log(result);

// });

function getData(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve("data recieved from server");
        }, 1000)
    })
}
getData().then(data => {
    console.log(data);
})

// getData().then(data => console.log(data)) 

// Promise Chaining -- writing multiple .then() 's at a time .

Promise.resolve(2)
.then(n => n*2)
.then(console.log);  // .then(console.log(n))  //  .then(n => console.log(n))

// a = new Promise((resolve) =>{
//     resolve(5);
// })
// a.then( n => {
//     return n*2;
// })
// .then( data => {
//     console.log(data);
// })

function step1(){
    return Promise.resolve("Revanth");
}
function step2(){
    return Promise.resolve("Krishna");
}
// writing step2 within step1 
step1() .then( result => {
    console.log(result);
    return step2();
})
.then(res => {           // .then(res => { 
    console.log(res);    // console.log(res);
})                       // })

// Note: if anything(javascript) is asynchronous, waiting is mandatory.  
// aysnc.js and await.js are used to handle the asynchronous code in a more elegant way. 




