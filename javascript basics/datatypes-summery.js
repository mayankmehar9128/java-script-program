// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;     // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3465323361435562114n  // bigInt data type

// Referene (Non primitve)

// Array, Objects, Functons

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "mayank", 
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//*************************************************************

// Stack (Primitve), Heap (Non-Primitve)

let myLocation = "Bihar"

let anotherLocation = myLocation
anotherLocation = "Patna"

console.log(myLocation);
console.log(anotherLocation);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mikejis@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


