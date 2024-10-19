console.log("Content Manipulation is loaded");

const heading = document.getElementById("heading");
console.log(heading.textContent);

heading.textContent = "Content Manipulation";



const card = document.querySelector(".card");
console.log(card.innerHTML);
//elements replaced
card.innerHTML = '<h2>My Card</h2><p>This is a card</p>';
//text replaced
console.log(card.innerText);
card.innerText = "This is a card";


const input = document.querySelector('input[type="text"]');
    console.log(input);
    input.value = "Hello World";