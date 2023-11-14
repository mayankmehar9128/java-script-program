const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

// console.log(Math);  // math is a library in java-script use to do maths operations
// console.log(Math.abs(-4)); // abs(absolute) makes the negetive value into positive
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));  // floor takes highest value
// console.log(Math.floor(4.9)); // floor tkes lowest value
// console.log(Math.min(4,6,8,2));
// console.log(Math.max(4,6,8,2));

console.log(Math.random()); // random gives the value between 0 and 1
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Maths.floor(Math.random() * (max - min + 1)) + min); //  1 is added to not give 0 value the logic give the floor value that is between 10 and 20
