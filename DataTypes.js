//String
let name1 = "John";
//Number
let age = 20;
let percentage = 90.5;
//Boolean
let isStudent = true;
//Null
let address = null;
//Undefined
let city;

let myObj = {
    name: "John",
    age: 20,
    isStudent: true,
    address: null,
    city: undefined
};

let x = Symbol("name");
let y = Symbol("name");
console.log(x == y);

console.log("Name : " + name1);
console.log("Age : " + age);
console.log("Is Student : " + isStudent);
console.log("Address : " + address);
console.log("City : " + city);

console.log(typeof name1);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof city);
console.log(typeof myObj);
console.log(myObj.name);