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

console.log(myLocation);   // value is not changing because primitve value is store in a stack so it gives the copy of value it does not change the original value
console.log(anotherLocation);   // output-> Patna

let userOne = {              // this code is store in the heap
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne   // and veriables are stores in stack

userTwo.email = "mikejis@gmail.com"

console.log(userOne.email);  // value is chage both the vareables is refrences to the heap so it get the original vaue it does have the copy value it dirctly refrences to the heap 
console.log(userTwo.email);