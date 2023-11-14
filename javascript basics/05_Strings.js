const name = "Mike"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String('micro-hc-jh') // new is a keyword for using objects string is a onject

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("r"));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-2, 4)
// console.log("anotherstr"+anotherString);
console.log(anotherString);

const newStringOne = "    mike    "
console.log(newStringOne);
console.log(newStringOne.trim);  // trim remove the unwated start and end spaces spaces there is also (start trim) and (end trim)


const url = "https://mike.com/mike%20kum"

console.log(url.replace('%20', '-'));
console.log(url.includes('mike'));

console.log(gameName.split('-'));