let name = "Krishna";
console.log(name);
let count=5;

if (count>4){
    console.log(name + " is an active user");
}

//datatypes 
let age =27;   
let number =3.14;
let bool= true;
let char = 'A';

//operators
let a = 10;
let b = 20;
let c = a+b;
console.log(c);

//conditional statements

let age1 =19;
if (age1 >=18){
    console.log("you are eligible to vote");
}else{
    console.log("you are not eligible to vote");
}

// for loop 

for(let i=1; i<=5; i++){
    console.log(i);
}

sum=0;
for(let i=1; i<=10; i++){
    if(i%2==0){
        //console.log("i=" + i);
        sum =sum + i;
        //console.log("sum=" + sum);
    }
}
console.log(sum);

// while loop 

let i=1;
while(i<=5){
    console.log(i);
    i++;
}

let j=1;
let sum1 =0;
while(j<=10){
    if(j%2==0){
        sum1 = sum1 + j;
        //console.log("j=" + j);
    }
    j++;
    //console.log("sum1=" + sum1);
    
}
console.log(sum1);

//switch 

let day=2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// Functions 
function greet(name){
    return "hello " + name;
}
console.log(greet("Krishna"));

function calculate(price, quantity, tax){
    let total = price* quantity;
     total = total + (total* tax);
    return total;
}
console.log(calculate(100, 2, 0.1));