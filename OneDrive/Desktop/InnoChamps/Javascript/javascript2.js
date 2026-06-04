const operation = function(a,b){
    return a+b;
}
console.log(operation(5,10));
console.log(operation(20,30));
console.log("------------------");
//Arrow function

const operation1 = (a,b) => a+b;
console.log(operation1(5,10));

let nums =[1,2,3,4,5];
let squares = nums.map(n => n*n);
console.log(squares);
console.log("------------------");

//parameter and default values 

function greet1(name="Revanth"){
    console.log(name);
}
greet1("Krishna");

function order(item, quantity=1, price){
    return quantity*price;
}
console.log(order("Pizza", 2, 10));
console.log("------------------");

//rest and spread operator 
// we will use spread operator in the rest operator 
let arr = [1,2,3];
let arr1 = [...arr, 4,5];
console.log(arr1);

function sum(...nums){
    return nums.reduce((a,b) => a+b);
}
console.log(sum(1,2,3,4,5));

console.log("------------------");

// callback functions -- we will write a function and passes an argument and,
// (will pass an argument to that argument inside the function.) 
// will pass another function as an argument and will call that function inside the first function

function greet2(name, cb){
    cb(name);
}
greet2("Krishna", console.log);

console.log("------------------");

function process(data, success, failure){
    if (data) success(data)
    else failure("Error")
}
process("Data received", console.log, console.error);

console.log("------------------");

function checknum(num, oneven, onodd){
    if(num%2 === 0){
        oneven(num);
    }
    else{
        onodd(num);
    }

}

checknum(0, oneven, onodd);

function oneven(n){
    console.log(n + " is even");
}
function onodd(n){
    console.log(n + " is odd");
}

console.log("------------------");

function add(a,b){
    return a+b;
}
console.log(add(5,10));

var add = function(a,b){
    return a+b;
}
console.log(add(20,30));

var add = (a,b) =>{
    return a+b;
}
console.log(add(15,25));



