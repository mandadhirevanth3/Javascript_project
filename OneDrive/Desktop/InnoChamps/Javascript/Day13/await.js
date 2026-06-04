async function test() {
    return "Hello";
}
test().then(console.log);


// fakestoreapi/products

async function getData(){
    let res = await fetch("https://fakestoreapi.com/users");
    let data = await res.json();
    console.log(data);
}
getData();

// async makes a function asynchronous.

// This function can wait for things that take time.

// Example:

// API calls
// Database calls
// File loading
// Why do we use async?

// Because API requests take time.

// JavaScript should wait until data comes.

// fetch() sends a request to a URL/API.
// "Go to this website and get user data."

//await pauses the function until the Promise finishes.

// "Wait until the API sends a response."
// Flow of Execution
// Step 1

// Function is called:

// getData();
// Step 2

// fetch() sends request to API.

// Step 3

// await waits for response.

// Step 4

// Response comes and stores in res.

// Step 5

// res.json() converts JSON data.

// Step 6

// Converted data stores in data.

// Step 7

// console.log(data) prints data.

// try {
//     console.log("success");
// }
// catch(e){
//     console.log("error:", e.message);
// }

async function load(){
    try{
        
        let res1 = await fetch("https://fakestorepi.com/users");
        let data1 = await res1.json();
        console.log(data1);
    }
    catch (err){
        console.log("Error:", err)
    }
}
load();