// if
// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 41) {
//     console.log("less then 50");
// }else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power ${power}`);
// }

// console.log(`User power ${power}`);

const balance = 1000

if (balance > 500) console.log("test"), console.log("test2");   // implicite scope ek hi line me execute hota h  // dont write a code in this way



// if (balance <500) {
//     console.log("less than 500");
    
// } else if(balance < 600) {
//     console.log("less than 600");
    
// } else if(balance < 800) {
//     console.log("less than 600");
// }
// else {
//     console.log(`the balance is ${balance}`);
// }

const userLoggedIn = true
const debitCard = true
const userLoggedInGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 2 ) {
    console.log("Allow to buy course");
}

if (userLoggedInGoogle || loggedInFromEmail) {
    console.log("user logged in");  
}