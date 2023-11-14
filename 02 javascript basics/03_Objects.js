// singleton

// object literals

const mysym = Symbol("key1")

const jsUser = {
    name: "Mike",
    "full name": "Mike kumar",
    // mysym : "mykey1", // data type gives string not symbol
    [mysym]: "mykey1", // to refer symbol
    age: 18,
    location: "Delhi",
    email: "mikek@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);  // another way to display object
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]); // for displaying symbol


jsUser.email = "mikechatgpt@gmail.com"
// Object.freeze(jsUser)

jsUser.email = "mikeiowen12@gmail.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello js User");
}

jsUser.greetingTwo = function() {
    console.log(`hello js User, $[this.name]`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());