console.log("Function file is loaded");
// 1. Function Declaration
function greet(firstName) { 
    if(typeof firstName === 'undefined') {
        console.log("Hello");
    }else{
        //  console.log("Hello" + " " + firstName);
        console.log(`Hello ${firstName}`);
    }
    
    
   
}
greet('Hima');

// 2. Function Expression
let greet2 = function (firstName) { 
    console.log(`Hello ${firstName}`); 
};
greet2('Hima');


// 3. Arrow Function
let greet3 = (firstName)=> {
    console.log(`Hello ${firstName}`);
}
greet3('Hima');

// 4. default parameter
let greet4 = (firstName = "Hima") => {
    console.log(`Hello ${firstName}`);
}
greet4('hiii');

// 5. Rest parameter
let sum = (...numbers) => {
   numbers.forEach((number) => {
    console.log(number);
   });
}
sum(1,2,3,4,5,6,7,8,9,10);
