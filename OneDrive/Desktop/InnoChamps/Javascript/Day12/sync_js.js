//Synchronous -- one after another, in order, blocking      

console.log("A");
console.log("B");
console.log("C");

//Asynchronous -- not in order, non-blocking
// multiple things working at the same time, but not in the order 

console.log("Start");

setTimeout(() => {
    console.log("Delayed");
}, 1000);

console.log("End");

setTimeout(() => console.log("Hello after 2s"),2000);

function orderfood(){
    console.log("Order Placed");
    setTimeout(() =>{
        console.log("Food Prepared");
    },3000)
}
orderfood();
