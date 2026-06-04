//setInterval(() => console.log("running...."),1000);

let count =0;

let id = setInterval(() => {
    count++;
    console.log("count", count);

    if(count === 5){
        clearInterval(id);
    }
})