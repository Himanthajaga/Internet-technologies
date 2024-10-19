console.log("Selector file is loaded");
console.log(document);


// getElementById
const heading = document.getElementById("heading");
console.log(heading);

//getElementsByClassName
const paragraph = document.getElementsByClassName("para");
console.log(paragraph);

// getElementsByTagName
const tags = document.getElementsByTagName("p");
console.log(tags)

// querySelector#.
const querySelector = document.querySelector(".para");
console.log(querySelector);

// querySelectorAll
const querySelectorAll = document.querySelectorAll(".para");
console.log(querySelectorAll)

// querySelectorAll
const querySelectors = document.querySelectorAll(".container.box p");
console.log(querySelectors)