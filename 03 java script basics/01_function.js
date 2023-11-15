

function sayMyName() {   // how to write functions
console.log("m");
console.log("i");
console.log("k");
console.log("e");
console.log("k");   
}

// sayMyName()   // how to acces function inside data


// function addTwoNumber(number1, number2) {   // function with parameters

//     console.log(number1 + number2);
// }

// const result = addTwoNumber(7, 8)
// console.log("Result: ", result);

function addTwoNumber(number1, number2) {   // function with parameters
    
    // let result = number1 + number2
    // console.log("hello"); // this will print
    return number1 + number2
    console.log("hello"); // this will not print
}

const result = addTwoNumber(7, 8)  // arguments
// console.log("Result: ", result);


function loginUserMessage(username = "sam") {

    if (username === undefined) {  // if (!username){}
    
        console.log("please enter a username");
        return
    }
    else {
        return `${username} just logged in`
    }

}
// loginUserMessage("motabhai") // this will not print the name only return it

console.log(loginUserMessage("Motabhai"));

function calculateCartPrice(val1, val2,...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 9800, 600, 7600));

const user = {
    username: "michal",
    price: 200
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 500
})

const myArray = [200, 400, 100, 800]

function returnSecondvalue(getArray) {
    return getArray[1]
}

console.log(returnSecondvalue(myArray));
console.log(returnSecondvalue([200, 400, 500,1000 ]));