// [{}, {}, {}]

// ["", "", ""]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}


const greeting = "hello world"
for (const greet of greeting) {
    if (greet == " ") {
        console.log("-");
        continue
        
    }
    // console.log(`Each char is ${greet}`);   
}


// Maps it is a object
// Maps gives unique value dont give dublicate value
// maps are iterrtable using forof [key, value]

const map = new Map()   
map.set('IN', "India")    // set a key value to set a value IN -> key, India -> Value
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);


// for (const key of object) {   // it gives values in array dont give keys
//     console.log(key);
// }


for (const [key, vlaue] of map) {    // this works in map not in object
    console.log(key, ':-', vlaue);
}


const myObject = {
    'game1': 'NFS',
    'game2': 'Marvel Spiderman'
}

for (const [key, value] of myObject) {   // this syntex not work in object
    console.log(key,':-', value);
}