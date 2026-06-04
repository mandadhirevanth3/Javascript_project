const buttons = document.querySelectorAll(".color-btn");
const randomBtn = document.getElementById("random");
const colorcode = document.getElementById("colorCode");

buttons.forEach(btn => {
    btn.addEventListener("click", () =>{
        const color = btn.getAttribute("data-color");
        document.body.style.backgroundColor = color;
        colorcode.textContent = color;
    })
})

randomBtn.addEventListener("click", ()=>{
    const randomColour = "#" + Math.floor(Math.random()*86459812).toString(16);
    document.body.style.backgroundColor = randomColour;
    colorcode.textContent = randomColour;
})


// document represents the entire webpage.
// JavaScript uses it to access HTML elements.

// querySelectorAll()?

// It selects ALL matching elements.

// Here:

// ".color-btn"

// means:

// Select all elements having class color-btn

// From your HTML:

// buttons becomes a collection like:

// [
//    redButton,
//    greenButton,
//    blueButton
// ]

//forEach() loops through every element one by one from collection/ array

// btn => {

// means:

// function(btn){
// }

// Why use data-color?

// Because it stores custom information inside HTML.

// Very useful for dynamic behavior.

// document.body.style.backgroundColor = color;
// document.body ---- HTML Represents:
// .style --- Used to change CSS using JavaScript.
// What is textContent? --- Changes text inside an element.

// Math.random()
// Math.random()

// Generates random decimal number:

// 0.234234
// 0.923423
// 0.123456

// Range:

// 0≤x<1

// Math.floor()

// Removes decimal part.


// .toString(16)

// Converts number into hexadecimal.

// Example:

// 53453453 → "32fd8a"

// Concept	Meaning
// querySelectorAll	Select multiple elements
// getElementById	Select one element
// forEach	Loop through elements
// addEventListener	Listen for events
// getAttribute	Read HTML attribute
// style.backgroundColor	Change CSS
// textContent	Change text
// Math.random	Generate random number
// Math.floor	Remove decimals
// toString(16) Convert to hexadecimal


// Method	Returns	Number of Elements
// querySelector()	First matching element	Only one
// querySelectorAll()	NodeList of matching elements	One or many