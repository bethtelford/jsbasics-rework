//////////////////PROBLEM 1////////////////////

//Create a function declaration called greeting that accepts name as it's only parameter.
//greeting should return the string "Hello, " plus the value of the name parameter. 

  //Code Here

//////////////////PROBLEM 2////////////////////

//Rewrite the function greeting as a function expression.
//Name it newGreeting

  //Code Here


//////////////////PROBLEM 3////////////////////

//Rewrite the function greeting as an arrow function.
//Name it finalGreeting

  //Code Here


//////////////////PROBLEM 4////////////////////  

//Create an array called groceries with the values "apples", "milk", "eggs", "bread"

  //Code Here


//Write a function called doubleCheck that takes in an array as a parameter.
//If the array does not contain "chocolate", add "chocolate"

  //Code Here


//Write a function called diet that takes in a number parameter.
//Remove the string from groceries at the index of the parameter. 

  //Code Here


//////////////////PROBLEM 5////////////////////  

//Given the dog object below...
let dog = {
  name: 'Sir Licktenstein',
  color: 'brown',
  age: 8,
  treats: 0,
  goodBoy: false
}
//...console.log the dog's name.

  //Code Here


//Write a function called cleanSlate that removes all the properties from the dog object that contain a falsy value

  //Code Here


//////////////////PROBLEM 6////////////////////

//Create your own dog object with the properties name, color, age.
//Name the object myDog.

  //Code Here


//Add a property to myDog called bark.
//The value of bark should be a function that returns the strings "Woof"

  //Code Here


//Invoke the bark method.

  //Code Here


//////////////////PROBLEM 7////////////////////

//Write a function called dogAdopter that takes in a name, a color, and an age parameters.
//dogAdopter should return an object with the properties of name, color, and age.
//The properties should have the value of the corresponding paramter. 

  //Code Here


//////////////////PROBLEM 8////////////////////

//Given the following function

function math(num1, num2, callback) {
  return callback(num1, num2)
}

//Write a function called add that takes in two parameters and returns the result of adding them together.

  //Code Here


//Now invoke math, passing in the numbers 3 and 4, and your add function

  //Code Here


//////////////////PROBLEM 9////////////////////

//Write a function called invoker that takes in one paramter, a callback function. 
//invoker should return the result of invoking the callback.

function sampleCallbackOne() {
  return 'I am a callback function'
}

function sampleCallbackTwo() {
  return 'I am also a callback function'
}

  //Code Here


//////////////////PROBLEM 10////////////////////

let duck = 'cute';

function bathroom () {
  let rubberDuck = 'squeaky';
  function bathtub() {
    let sailorDuck = 'nautical';
  }
}

function pond() {
  let realDuck = 'fluffy';
}

//Given the functions and variables above, edit the arrays below to contain only the appropriate variable names as strings

//This array should contain the variable names (as strings) accessable in the global scope.
let globalScope = ['duck', 'sailorDuck', 'rubberDuck', 'realDuck'];

//This array should contain the variable names (as strings) accessable in the bathroom function.
let bathroomScope = ['duck', 'sailorDuck', 'rubberDuck', 'realDuck'];

//This array should contain the variable names (as strings) accessable in the bathtub function.
let bathtubScope = ['duck', 'sailorDuck', 'rubberDuck', 'realDuck'];

//This array should contain the variable names (as strings) accessable in the pond function.
let pondScope = ['duck', 'sailorDuck', 'rubberDuck', 'realDuck'];


//////////////////PROBLEM 11////////////////////

//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.

  //Code Here