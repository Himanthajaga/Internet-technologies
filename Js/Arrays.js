console.log("Arrays file is loaded");
// using array literal
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

console.log("===================================================");
// using array constructor
let fruits1 = new Array("Apple", "Banana", "Orange");
console.log(fruits1);

console.log("===================================================");

let myArray = [10,'add',true,null,undefined,{ name: "Himantha", age: 22 },[1,2,3,4,5]];
console.log(myArray);


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// changing values
fruits[0] = "graves";
console.log(fruits);


console.log("===================================================");

// built in array functions
// push
fruits.push("Mango");
console.log(fruits);


let items = [
    {itemID: 1, itemName: "Banana"},
    {itemID: 2, itemName: "Apple"},
    {itemID: 3, itemName: "Orange"}
];
let newItem = {itemID: 4, itemName: "Grapes"};
items.push(newItem);
console.log(items);

// pop=>remove last element
console.log(fruits);
let popped = fruits.pop();
console.log(fruits);

// shift=>remove first element
console.log(fruits);
let shifted = fruits.shift();
console.log(fruits);

// unshift=>add first element
console.log(fruits);
fruits.unshift("Mango");
console.log(fruits);

// splice=>remove and add elements
console.log(fruits);
fruits.splice(1,2);
console.log(fruits);
fruits.splice(1,0,"Mango","Banana","Orange","Kiwi");
console.log(fruits);

console.log("===================================================");


// slice=>copy elements
console.log(fruits);
let selectedFruits = fruits.slice(1,4);
console.log(selectedFruits);

console.log("===================================================");

// Concatenation
let newFruits = selectedFruits.concat(fruits);
console.log(newFruits);

console.log("===================================================");

// forEach
fruits.forEach(function(fruit){
    console.log(fruit);
});

console.log("===================================================");

// map
let toUpperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(toUpperCaseFruits);


let s = '22222222222222222'
console.log(s.length);

console.log("===================================================");

// filter
let filteredFruits = fruits.filter(fruit => fruit.length > 5);
console.log(filteredFruits);