console.log("Class Manipulation file is loaded");

const heading = document.getElementById('heading');
console.log(heading.classList);

heading.classList.add('newClass');
console.log(heading.classList);

heading.classList.remove('newClass');
console.log(heading.classList);

heading.classList.toggle('active');
console.log(heading.classList)

heading.classList.toggle("active");
console.log(heading.classList);