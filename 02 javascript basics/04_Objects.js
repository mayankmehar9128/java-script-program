// const tinderUser = new Object() // this is singleton object
const tinderUser = {}  // this is non singleton object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        Userfullname: {
            firstname: "aakaash",
            lastname: "kumar"
        }
    }
}


// console.log(regularUser.fullname.Userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}  // using spread
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    } 
]


users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "commerce",
    price: "15000",
    courseInstructor: "Mithilesh kumar"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course  // De-structering
console.log(Instructor);

// const navbar = ({company}) => {  // how to de-structure object

// }

// navbar(company = "MICRO")

{
    // this is object
}

// {
//     "name": "mike",
//     "cousename": "Science"  // API in json 
//     "price": "free"
// }

[
    {},       // in this type of data come from API
    {},       //  array having object inside
    {}
]