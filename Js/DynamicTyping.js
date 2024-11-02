console.log("Dynamic Typing file is loaded");


let x = 10;
console.log(typeof x);

x="Hello";
console.log(typeof x);

x=true;
console.log(typeof x);

x=null;
console.log(typeof x);

x=undefined;
console.log(typeof x);

x = {
    name : "Himantha",
    age : 22
};
console.log(typeof x);

x = [1,2,3,4,5];
console.log(Array.isArray(x));