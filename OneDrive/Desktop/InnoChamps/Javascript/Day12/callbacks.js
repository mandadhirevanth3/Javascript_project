function greet(name,cb){
    cb(name);
}
greet("Krishna", n => console.log("Hello " +n));

function fetchData(cb){
    setTimeout(() =>{
        cb("data recieved")
    }, 1000)
}
fetchData( (data) => console.log(data) );

//(data) => console.log(data) is equal to 
// function(data){
// console.log(data);
//}

//callback hell  -- setTimeout functions inside the other setTimeout functions, it is called callback hell, 
// it is difficult to read and maintain the code. like nested setTimeout functions.
// NOte: in nested setTimeout function, 
// the inner setTimeout function will execute after the outer setTimeout function has completed its execution.

setTimeout(() => {
    console.log("step 1");
    setTimeout(() => {
        console.log("step 2")
    }, 1000 )
}, 2000)


//

setTimeout(() => {
    console.log("Login");
    setTimeout(() => {
        console.log("Fetch user data");
        setTimeout(() => {
            console.log("Display data");
        }, 1000);
    },1000);

}, 1000);

