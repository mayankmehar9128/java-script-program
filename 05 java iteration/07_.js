const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1 =  myNumbers.map( (num) => num + 10)  // using map
// console.log(newNums1);

const newNums2 =  myNumbers.map( (num) => { return num + 10 })  // using map
// console.log(newNums2);

const newNums = myNumbers      // chaining
                .map( (num) => num * 10 )  // map me <, >, <=, >= kam nahi kerta
                .map( (num) => num + 1 )   
                .filter( (num) => num >= 40)  // filter me condition hi chalta h


console.log(newNums);