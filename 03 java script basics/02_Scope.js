var c = 500 // global scope

let a = 300   // global scope

if (true) {
    let a = 10          // block scope
    const b = 20
    var c = 30
    console.log("INNER: ", a);     // block scope var a print
}


console.log(a);   // print global scope var a
// console.log(b);
console.log(c);   // its print block scope var not global var



function one() {
    const username = "michalhusy"

    function two() {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    // console.log(username);

    two()
}

one()


if (true) {
    const username = "machine"
    if (username === "machine") {
        const website = "youtube"
        console.log(username + website);  
    }

    // console.log(website);
}

// console.log(username);

console.log(addOne(5)); // it gives the output
function addOne(num) {

    return num + 1
    
}


// console.log(addTwo(5));  // not give output it gives error because the function is store in vareable (declearation se pehle acces kiye h)
const addTwo = function(num) {

    return num + 2
    
}

console.log(addTwo(5));  // this way it gives output