console.log("Type Conversion file is loaded");

// IMPLICITLY TYPE CONVERSION
let result = 'The Answer Is : '+ 42;
console.log(result);//The Answer Is : 42
console.log(typeof result);//string

console.log("================================================")

let sum = '37' + 5;
console.log(sum);//375
console.log(typeof sum);//string

console.log("================================================");

let diff = '37' - 5;
console.log(diff);//32
console.log(typeof diff);//number

console.log("================================================");

let multiply = '37' * 5;
console.log(multiply);//185
console.log(typeof multiply);//number

console.log("================================================");

let divide = '37' / 5;
console.log(divide);//7.4
console.log(typeof divide);//number

console.log("================================================");

let remainder = '37' % 5;
console.log(remainder);//2
console.log(typeof remainder);//number

console.log("================================================");

// EXPLICITLY TYPE CONVERSION
let num1 = '100';
console.log(num1);//100
console.log(typeof num1);//string

console.log("================================================");

let num2 = Number(num1);
console.log(num2);//100
console.log(typeof num2);//number


console.log("================================================");

let num3 = Number('100abc');
console.log(num3);//NaN
console.log(typeof num3);//number

console.log("================================================");

let num4 = Number('Hello');
console.log(num4);//NaN
console.log(typeof num4);//number

console.log("================================================");

let num5 = Number(true);
console.log(num5);//1
console.log(typeof num5);//number

console.log("================================================");
let num6 = Number(false);
console.log(num6);//0
console.log(typeof num6);//number

console.log("================================================");

let num7 = Number(null);
console.log(num7);//0
console.log(typeof num7);//number

console.log("================================================");

let num8 = Number(undefined);
console.log(num8);//NaN
console.log(typeof num8);//number

console.log("================================================");


let num9 = parseInt('100');
console.log(num9);//100
console.log(typeof num9);//number

console.log("================================================");

let num10 = parseInt('100.5');
console.log(num10);//100
console.log(typeof num10);//number

console.log("================================================");

let num11 = parseFloat('100.5');
console.log(num11);//100.5
console.log(typeof num11);//number