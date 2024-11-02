console.log("DataTypes file is loaded");

// 1.Primitive Data Types

// 1.1 Number=>represent both integers and floating point numbers
let num1 = 10;
console.log(num1);
console.log(typeof num1);


let num2 = 10.5;
console.log(num2);
console.log(typeof num2);

console.log("===================================================");
// 1.2 String=>sequence of characters

let customerName = "Himantha";
console.log(customerName);
console.log(typeof customerName);

console.log("===================================================");

// 1.3 Boolean=>true or false
let isLoggedIn = true;

console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let isLoggedOut = false;
console.log(isLoggedOut);
console.log(typeof isLoggedOut);


console.log("===================================================");

// 1.4 undefined
let name;
console.log(name);
console.log(typeof name);


console.log("===================================================");

// 1.5 null
let address = null;
console.log(address);
console.log(typeof address);

console.log("===================================================");

// 1.6 Symbol
let symbol = Symbol();
console.log(symbol);
console.log(typeof symbol);


console.log("===================================================");

// 2.Reference Data Types

// 2.1 object=>collection of key-value pairs
let person = {
    name: "Himantha",
    age: 22
}
console.log(person);
console.log(typeof person);


console.log("===================================================");

// 2.2 Array
let colors = ["red", "green", "blue"];
console.log(colors);
console.log(typeof colors);
console.log(Array.isArray(colors));
console.log(Array.isArray(person));


console.log("===================================================");

// 2.3 Function

function greet() {  
    console.log("Hello");
}
console.log(greet);
console.log(typeof greet);


console.log("===================================================");

// 2.4 Date=>represents a single moment in time in a platform-independent format
let date = new Date();
console.log(date);
console.log(typeof date);