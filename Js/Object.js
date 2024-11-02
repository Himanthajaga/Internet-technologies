console.log("Object file is loaded");

// 1. Object
let person = {
  firstName: "maleesha",
  lastName: "madushanka",
  age: 22,
  hobbies: ["Singing", "Dancing"],
  address: {
    city: "Chennai",
    state: "Tamilnadu",
  },
  getBirthYear: function () {
    return 2024 - this.age;
  },
};

console.log('person', person);    
console.log(typeof person);    

console.log("=========================================");

// Accessing properties
// 1.1 Dot Notation
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.address);
console.log(person.address.city);
console.log(person.getBirthYear());


// 1.2 Bracket Notation
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["hobbies"]);
console.log(person["address"]);
console.log(person["address"]["city"]);
console.log(person["getBirthYear"]());

// Adding properties
person.phone = 1234567890,


    console.log(person);

// Updating properties
person.firstName = "Himantha";
person.lastName = "Jaga";
console.log(person);
    

// Deleting properties
delete person.phone;
console.log(person);

console.log("=========================================");

let car = {
  brand: "Toyota",
  model: "Corolla",
   getdescription: function () {
       //    return this.brand + "-" + this.model; 
       return `${this.brand}-${this.model}`;   
  }
}
console.log(car.getdescription());//

console.log("=========================================");

function displayName(student) { 
console.log(student.name + " " + student.age);
}
displayName({ name: "Himantha", age: 22 });


for (let key in person) {
  console.log(key, person[key]);
}

console.log("=========================================");

// Object destructuring
let { firstName, lastName, age,address,hobbies } = person;
console.log(firstName, lastName, age);
console.log(address);
console.log(hobbies);

console.log("=========================================");
// object keys
console.log(Object.keys(person));

console.log("=========================================");
// object values
console.log(Object.values(person));
console.log("=========================================");
// object entries
console.log(Object.entries(person));

console.log("=========================================");
// Constructor functions
function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
    this.age = age;
    
}
let student = new Student("Himantha", "Jaga", 22);
console.log(student);

class Person1 { 
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

}

let person1 = new Person1("Himantha", "Jaga", 22);
console.log(person1);
console.log(typeof person1);