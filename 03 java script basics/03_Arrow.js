const user = {
    username: "hussy",
    price: 2000,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // current context ki baat kerta h
    }
}

// user.welcomeMessage()
// user.username = "manoj"  // manoj is context
// user.welcomeMessage()


// console.log(this);  // node environment ke andar h to output empty dega {}


// browser ke andar jo global object who window object h


// function chai() {
//     let username = "maya"
//     console.log(this.username); // function ke inside data ko print nahi kerta output is undefined
// }

// chai()


// const chai = function() {
//     let username = "mikieer"
//     console.log(this.username);
// }

// chai()

const chai = () => {     // arrow function
    let username = "mikieer"
    console.log(this.username);
}
    
// chai()


// const addTwo = (num1, num2) => {      // Arrow function
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2   // impicit return

const addTwo = (num1, num2) =>  (num1 + num2)


// curli bracis {} ke andar return likhna padega

// small bracket () ke andar return likhna nahi padega  mostly use in react

console.log(addTwo(3, 4));