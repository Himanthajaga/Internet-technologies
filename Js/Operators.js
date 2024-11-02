console.log("Operators file is loaded");

// 1. Arithmetic Operators

let x = 10;
let y = 20;

console.log(x+y);//30
console.log(x-y);//-10
console.log(x*y);//200
console.log(x/y);//0.5
console.log(x%y);//10
console.log(x ** y);//100000000000000000000000

console.log("================================================");

// 2. Assignment Operators

let a = 10;// = is an assignment operator
let b = 20;


a += b;//a = a+b
console.log(a);//30

a -= b;//a = a-b
console.log(a);//10


// 3. Comparison Operators

let c = 10;
let d = 20;

console.log(c==d);//false
console.log(c!=d);//true
console.log(c>d);//false
console.log(c<d);//true
console.log(c>=d);//false
console.log(c <= d);//true

let e = "10";
console.log(typeof e);//string
let f = 10;
console.log(typeof f);//number

console.log(e==f);//true
console.log(e===f);//false

console.log("================================================");


// 4. Logical Operators

let g = 10;
let h = 20;

console.log(g>h && g==h);//false
console.log(g>h || g==h);//true
console.log(!(g>h && g==h));//true