console.log("DOM Traversing file is loaded");

const cardDetails = document.querySelector('.card-details');

// console.log(cardDetails.parentNode);
// console.log(cardDetails.parentNode.parentNode);
// console.log(cardDetails.parentNode.parentNode.parentNode);
// console.log(cardDetails.parentNode.parentNode.parentNode.parentNode);
// console.log(cardDetails.parentNode.parentNode.parentNode.parentNode.parentNode);

console.log(cardDetails.childNodes);


const card = document.querySelector('.card');
console.log(card.children);

console.log(card.children[0]);
console.log(card.firstChild);
console.log(card.lastChild);