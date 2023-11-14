// array

const myArr = [0, 1, 2, 3, 4, 5]  // type of array is object
const myHeroes = ["Iron-Man", "Spider-Man", "Thor"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

myArr.push(6) // push insert the value inside the array
myArr.push(7)
myArr.pop(7) // pop delete the perticuler value present in array 
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()    it remove the 0 from the array

// console.log(myArr.includes(9));  // gives boolean value that the element is present true or false
// console.log(myArr.indexOf(4));

const newArr = myArr.join()  // it gives the array in strings and the type array is string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // string
// console.log(typeof myArr); // object


// slice or splice

console.log("A -> ", myArr);  // normal array

const myn1 = myArr.slice(1, 3)  // it does not manuplate the original array
console.log("B -> ", myArr);  // slice array
console.log("B ", myn1);




const myn2 = myArr.splice(1, 3)  //it manuplates the original array
console.log("C -> ", myArr);  // splice array
console.log("C ", myn2);