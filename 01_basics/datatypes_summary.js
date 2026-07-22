// primitive

// 7 types : String,Number,Boolean,Null,Undefined,Symbol,BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

// console.log(id === anotherId);

// const bigNumber = 328738738278372887392328n





// (Reference)=>NONPRIMITIVE 
// : Array,Object,function 

const heros = ["Shaktiman", "Spiderman", "Saturu Gojo"];
let myobj = {
    name: "Kaif",
    age: 22,

}
const myFunction = function(){
    console.log("Hello world");
    
}
// console.log(typeof heros);

// ++++++++++++++++++++++++++++++

//stack (Primitive) and Heap memory (NONPRIMITIVE)

let myYoutubename = "mohdkaif99.com"
let anothername = myYoutubename
anothername = "chaiaurcoffee"
console.log(myYoutubename);
console.log(anothername);

let userOne  = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email ="kaif@google.com"

console.log(userOne.email);
console.log(userTwo.email);








    

