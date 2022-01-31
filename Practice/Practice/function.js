//Global Scope

let a = 20;

function decode(){
    return a;
}
console.log(decode());


//Function Scope

function decode2 (){
    let b = 40
    return b;
}
console.log(decode2());
// console.log(b);

//Block Scope

if (100 > 20) {
    var c = 50;
    let d = 60;
    console.log(d);
}
console.log(c);
// console.log(d);

// Passing Data In Function 
// 1.
function upperMsg (message){
    var toUpperMsg = message.toUpperCase();
    console.log(toUpperMsg);
}
upperMsg("here is msg. ")

//2.
function addNum(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
}
addNum(5, 7);

//Returning Data In Function

function addNum2(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log(addNum2(5, 17));


//Generate random Number

function randomInt(min, max) {
    var numOfValues = max - min + 1;
    var randomNum = Math.random();
    var randomVal = randomNum * numOfValues;
    var roundedRandomVal = Math.floor(randomVal);
    var finalNum = min + roundedRandomVal;
    console.log(finalNum);
}
//randomInt(5, 10);



// Select Random Food From Array

let food = ['Pizza', 'Burger', 'Panipuri', 'Sandwich'];

function randomInt(min, max) {
    // let numOfValues = max -min + 1;
    // let randomNum = Math.random();
    // let randomVal = randomNum * numOfValues;
    // var roundedRandomVal = Math.floor(randomVal);
    // var finalNum = min + roundedRandomVal;
    // return(finalNum);

    return Math.floor((max -min + 1) * Math.random()) + min;
}
console.log(food [randomInt(0,3)]);


//More on Function

let greeting = function () {
    let userName = prompt( 'Please enter Your Full Name Here.', 'Your Full Name');
    console.log(`Hello ${userName} How are you?`);
}
greeting()

//Arrow Function
let sentence = "How r u?"
let capitalizeArrow = anyString =>anyString.toUpperCase();
console.log(capitalizeArrow(sentence));