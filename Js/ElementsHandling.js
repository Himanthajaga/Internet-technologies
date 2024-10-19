console.log("Elements Handling is loaded");

const newDiv = document.createElement("div");
console.log(newDiv);

newDiv.id = "alert";
newDiv.className = "alert alert-success";
newDiv.textContent = "You have successfully logged in";
newDiv.backgroundColor = "green";
newDiv.style.color = "red";
newDiv.style.padding = "5px";
newDiv.style.borderRadius = "10px";
newDiv.style.margin = "10px";
newDiv.style.fontSize = "16px";
newDiv.style.border = "3px solid green";
console.log(newDiv);

const card = document.querySelector(".card");

// card.append(newDiv);
card.appendChild(newDiv);

// card.insertBefore(newDiv, card.firstChild);

const newDiv2 = document.createElement("div");
newDiv2.id = "alert2";
newDiv2.className = "alert alert-danger";
newDiv2.textContent = "danger Alert";
newDiv2.backgroundColor = "blue";
newDiv2.style.color = "purple";
newDiv2.style.padding = "5px";
newDiv2.style.borderRadius = "10px";
newDiv2.style.margin = "10px";
newDiv2.style.fontSize = "16px";
newDiv2.style.border = "3px solid green";
console.log(newDiv2);
// card.appendChild(newDiv2);

// card.removeChild(newDiv);
card.replaceChild(newDiv2, newDiv);


const cloneDiv = newDiv2.cloneNode(true);
card.appendChild(cloneDiv);

console.log(card.hasChildNodes());

// card.remove();
