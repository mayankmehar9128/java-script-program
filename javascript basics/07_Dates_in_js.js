// Date

let myDate = new Date()  // type of Date is object
// console.log(myDate);
// console.log(myDate.toString()); //toString is a method
// console.log(myDate.toDateString()); 
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 26) // months starts with 0 in java-script
// let myCreateDate = new Date(2023, 0, 26, 5, 3)
// let myCreateDate = new Date("2023-01-14")
let myCreatedDate = new Date("11-14-2023")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));  // gives value in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday:"long",
}));

