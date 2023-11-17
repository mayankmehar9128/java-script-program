const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {    // callback function has not name
//     console.log(val);
// })

// coding.forEach( (item) => {    // Arrow function is use in to define function in this way
//     console.log(item);
// } )

function printme(item) {
    console.log(item);
}

// coding.forEach(printme)


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
}) 