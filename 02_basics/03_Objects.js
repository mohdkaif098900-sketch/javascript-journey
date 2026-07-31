/// singleton


/// object literals
// Object.create constructor method // singleton
const mySym = Symbol("key1")
const JsUser = {
    name: "kaif" ,
    "full name": "Mohd Kaif" ,
    [mySym]: "mykey1" ,

    age: 18,
    location: "Agra" ,
    email: "Kaif@gmail.com" ,
    isLoggedIN: false,
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "Kaifchatgpt@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Kaifgoogle@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
JsUser.greetingTwo= function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


