/* let score = 33 */

let score = "33"

let scoreA = "33abc"

//console.log(score);
//console.log(typeof score);
//console.log(typeof(score));

let convertInNumber = Number(score);


let convertInNumberA = Number(scoreA);


//console.log(convertInNumber);

//console.log(typeof(convertInNumber));

//console.log(convertInNumberA);


// "33" => 33
//"33abc" => NaN 
// null => 0
//true => 1; false => 0

let isLoggedIn = 1

let isLoggedIn2 = "mayank"

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)

console.log(booleanIsLoggedIn);
console.log(booleanIsLoggedIn2);

// 1 => true; o => false
// "" => false
// "mayank" => true


// ******************operation****************//

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "mayank"
let str2 = " mehar"

let str3 = str1 +str2
// console.log(str1 + str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 101
gameCounter++ // postfix
// ++gameCounter //prefix
// console.log(gameCounter); // same output with prefix

// link to study
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let x = 3;
const y = x++;

console.log(y);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(a, b);
// Expected output: "a:4, b:4"

