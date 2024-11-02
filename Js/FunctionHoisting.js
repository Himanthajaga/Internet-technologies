console.log("Function Hoisting file is loaded");

// test();
// function test() {
//     console.log("Test function");
// }
// test();
sayHi();
var sayHi = function () { 
    console.log("Hiii");
}

sayHi();