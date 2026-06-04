// Higher order functions (HOF)

//primary data types --- int, float, double, string, char, boolean 
// secondary data types 
       // array --- stores similar data types 
       // object --- stores key value pairs or stores different kind of data types data 
       // Json ----- array of objects 

let array =[1,2,3,4,5];

let student1 = {
    name: "Krishna",
    age: 25,
    city: "Delhi"
};

let users1 = [
    {
        name: "Krishna",
        age: 27,
        city: "Delhi"
    },
    {
        name: "Revanth",
        age:27,
        city: "Bangalore"
    }
]


console.log("------------------");

//Map -- it is used to transform the elements of an array 
// and return a new array with the transformed elements. 
let nums =[1,2,3];
let squares = nums.map(n => n*2);
console.log(squares);

console.log("------------------");  

let users =[ 
    {
        name: "Krishna",
        age:27
    },
    {
        name: "Revanth",
        age:17

    }
]

let names = users.map(user => {
    return {
        name: user.name,
        isadult: user.age >=18
    }
})

console.log(names);

console.log("------------------");

//Filter 
// Note: map and filter are creating a completely new array.
// a==b  , it will comapre the values of a and b
// a===b , it will compare the values and data types of a and b

let a = 5
let b= "5"
console.log(a==b); // true
console.log(a===b); // false

let numbers = [1,2,3,4,5,6];
let even = numbers.filter(n => n%2 === 0);
console.log(even);

console.log("------------------");

let employees = [
    {name: "Krishna", active: true},
    {name: "Revanth", active: false}
]
let activeemployees = employees.filter(employee => employee.active === false);
console.log(activeemployees);

console.log("------------------");

//reduce -- bring all the elements of an array together and return a single value
// what are the complex numbers are there bringing into a single value

let digits = [1,2,3,4,5];
let output = digits.reduce((acc,val) => acc + val, 0);
console.log(output);

console.log("------------------");

let cart = [
    {item:1, price: 100},
    {item:2, price: 200},
]
let total = cart.reduce((acc,product) => {
    return acc + product.price;
}, 0);
console.log(total);

// for each -- it is used to iterate over an array and perform some operation on each element of the array.
// it does not return a new array like map and filter, it returns undefined.
// for each is similar to the map  
let arr = [1,2,3];
arr.forEach(n => console.log(n+1)); // 2,3,4

let arr1 = [
    {name: "Krishna"},
    {name: "Revanth"}
]
arr1.forEach(user => user.id = Math.random());
console.log(arr1);

//find -- it is used to find the first element of an array 
// that satisfies a given condition and return that element.

let numbs = [1,2,3];
let res= numbs.find(n => n>1);
console.log(res);

console.log("------------------");

let empp = [
    {id:1, name: "Krishna"},
    {id:2, name: "Revanth"}
]

let res1 = empp.find(emp => emp.id ===2);
console.log(res1);

// some -- it is used to check if at least one element of an array 
// satisfies a given condition and return true or false.

let abc = [1,2,3];
let res2 = abc.some(n => n>2);
console.log(res2);

console.log("------------------");

// every -- it is used to check if all elements of an array 
// satisfies a given condition and return true or false.

let xyz = [
    {name: "Krishna", active: true},
    {name: "Revanth", active: true}
]
let res3 = xyz.every(u => u.active === true);
console.log(res3);