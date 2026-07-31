// const tinderUser = new Object() // SIngleton object
const tinderUser = {} // NON SIngletonObject

tinderUser.id = "123abc"
tinderUser.name = "SAmmy"
tinderUser.isLoggedIN = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com" ,
    fullname: {
        userfullname: {
            firstname: "xyz",
            lastname: "abbcs"


        }
    }

}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a" , 6: "b"}
const obj5 = {7: "a" , 8: "b"}
// const obj3 = {obj1, obj2}
// console.log(obj3); /// same as arrays  created problem


// ####  first step 
const obj3 = {...obj1, ...obj2, ...obj4, ...obj5} ////SPREAD operations
// console.log(obj3);
//##### second step also 
const obj02 = Object.assign({}, obj1, obj2, obj4, obj5)
// console.log(obj02);



const users = [
    {
        id: 1,
        email: "k@gamil.com",
    },
    {
        id: 1,
        email: "k@gamil.com",
    },
    {
        id: 1,
        email: "k@gamil.com",
    },
    {
        id: 1,
        email: "k@gamil.com",
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // array datatypes
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIN'));
// console.log(tinderUser.hasOwnProperty('isLogged'));



// ##### #####

// Object de-structure and JSON API intro

const course = {
     coursename: "Js in Hindi" , 
     price: "999" ,
     courseInstructor: "XYZ"
}
// course.courseInstructor

const {courseInstructor: instructor} = course // define small name to simplify 
// ###### DE-STRUCTURING


console.log(instructor);

// const navbar = ({company}) => {  /// React concept

// }
// navbar(company = "XYZ")

// {
//     "name": "XYz"
//     "coursename": "JavaScript" ,
//     "price": "free"
// }


