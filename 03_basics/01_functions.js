


function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");

}

// sayMyName()

// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
    
}
 const result = addTwoNumbers(3, 5)
//  console.log("result: ", result);
 
function loginUserMessage(username = "Sam") {
    if(!username){
        console.log("Please Enter a username");
        return
        


    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("XYZZZ"))
// console.log(loginUserMessage("xyzz")) // undefined



function calculateCardPrice(val1, val2, ...num1) { // restoperator
    return num1


} // val1=200 and val2=400/// 
// console.log(calculateCardPrice(200, 400, 500, 202020));


const user = {
    username: "XYZZ" ,
    prices: 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({

    username: "Sam" , 
    price: 399
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[2]

}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
