// forin loop is work in object to get the keys and values

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);  // myObject[key] -> to print the values
}

// forin loop use in array to give the values

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]); 
}

// forin loop is not working in Maps