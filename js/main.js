// Basics of JavaScript

/* 
Input slash star star

Multiline Comment in JavaScript
* -- Variable Declaration in JS --
* Primitive Types: Strings, Numbers, Booleans, Arrays, Objects (aka Python Dictionaries)
* Functions in JS
* Loops in JavaScript

*/

// String Variable
var firstName = 'Nevada'

// Display our String in the JS Console
console.log(firstName)

// Number Variable
var someNumber = 32; // this semicolon is "syntactic sugar", it isn't necessary but we like it
console.log(someNumber)

// Float Variable
var someFloat = 3.14;
console.log(someFloat);

// Arrays
var someArray = [1, 2, 3, 4];
console.log(someArray);

// Object
var someObject = {"test" : "Test Me Please"};
console.log(someObject);

// JAVASCRIPT HOISTING
console.log(somethingRandom);
var somethingRandom = "This is a random string.";
console.log(somethingRandom);

// A Better Way of Declaring Variables
// Use "let" or "const"
// console.log(some_random); // won't work because of 'let' keyword
let someRandom = 948;
console.log(someRandom);

const superHero = "Thor";
console.log(superHero)
// Reassigning variables
// (you do not need to use 'let' again)
someRandom = firstName + ' Las Vegas';
console.log(someRandom);

/**
 * === Basic Math Operations in JS ===
 */

// Addition
let sum = 5 + 5;
console.log(sum);

// Subtraction
let diff = 5 - 5;
console.log(diff);

// Multiplication 
let product = 5 * 5;
console.log(product)

// Division
let quotient = 5 / 5;
console.log(quotient);

// Exponents
let square = 5 ** 2;
console.log(square);

// Modulo
let remainder = 12 % 5;
console.log(remainder);

// More Math Stuff
let findFloor = Math.floor(33.9);
console.log(findFloor);

// Find Ceiling
let findCeil = Math.ceil(33.9);
console.log(findCeil);

//Mind Bender
let crazyStuff = "4" + someFloat; 
console.log(crazyStuff);

// Minder Bender 2
let crazyStuff2 = someFloat + parseFloat('4');
console.log(crazyStuff2);

// Using the "let" keyword and changing variable
let nbaGoat = 'MJ';
console.log(nbaGoat);

nbaGoat = 'Kobe';
console.log(nbaGoat);

/*
 BAD REDECLARATION
 let nbaGoat = 'LeBron';
 console.log(nbaGoat);
 */

/*
 ======== JAVASCRIPT FUNCTIONS ========
 Regular named function syntax
  function nameOfFunction(param){
     
  };
 */

// Regular Named Function
function addNums(){
    let num = 4;
    let num2 = 6;
    return num + num2;
};

// Calling addNums
console.log(addNums());

// Variable Named Functions w/ Parameters
let addNums2 = function(num, num2){
    return num + num2
}

// Calling addNums2
console.log(addNums2(11, 29))

// Regular Named Function w/ Parameters
function addNums3(x, y){
    return x + y
}

// Calling addNums3
console.log(addNums3(99,1))

// ES6+ ARROW FUNCTION
/*
    Using a single parameter in an arrow function
    can be done WITHOUT parens () BUT this can only
    be done with a single parameter.

*/

let cubed = (num) => {
    return num ** 3
}

console.log(cubed(9))

let cubed2 = num => {
    return num ** 3
}

console.log(cubed2(5))

// Write an arrow function or two to get used to it. Your function should take a number and double it and subtract 7
let problem = (num) => {
    return (num * 2) - 7
}

console.log(problem(5))

// JavaScript Closure
// Self-Invoking Function

console.log(function(name){
    let hello = "Hello World from " + name
    return hello
}('Dennis'))

// JavaScript Control Flow
// If Statement

let determineAge = age =>{
    if (age < 18){
        return "Minor"
    } else if (age >= 18 && age <= 65){
        return 'Adult Not Retired'
    } else {
        return 'Elderly Person - Retired'
    }
}

console.log(determineAge(86))

// JavaScript Ternary
let determineAge2 = age => {
    return (age < 18) ? 'Minor' : (age >= 18 && age <= 65) ? "Adult Not Retired" : "Elderly Person -- Retired"
}

console.log(determineAge2(31))

// Loops in JavaScript -- For Loop
// For Loop Syntax -- "for" keyword(counter; condition; incrementation)

let countByOne = () => {
    // For Loop
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has finished... '
}

console.log(countByOne())

function decreaseByOne(){
    // For Loop
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Decrementing has stopped'
}

console.log(decreaseByOne())

// While Loop - JavaScript
function countWithWhile(){
    let i = 0; // the counter
    let text = '';

    // While Loop
    while(i < 10){
        text += `This is the number... ${i} \n`
        i++
    }
    return text
}

console.log(countWithWhile())

// Do While Loop
let countWithDoWhile = () => {
    let i = 0;
    let text = '';

    // Do
    do {
        text += `This is the number... ${i} \n`
        i++
    } while(i < 1)
    return text
}

console.log(countWithDoWhile())

/**
 * 
 * ===== Looping with Arrays and Array Methods, Array String Methods =====
 */

// Create Array: groupOfNames
let groupOfNames = ['Brock', 'Ash', 'Misty', 'Gary', 'James', 'Jessie']

// Index positions on Array
console.log(groupOfNames[0]) // Brock

// Looping through Array in JavaScript

for (let i in groupOfNames){
    console.log(groupOfNames[i])
}

// Deconstruction of Array
let brock, ash, misty
[brock, ash, misty, ...teamRocket] = groupOfNames
console.log(ash)
console.log(teamRocket)

// Other methods of looping an array
let showNames = (names) => {
    for (let i = 0; i < names.length; i++){
        console.log(names[i])
    }
    return 'Done with Names'
}

console.log(showNames(groupOfNames))

// Method 3 for looping
groupOfNames.forEach(element => console.log(element))

// JS Array Methods
// Array.toString()
console.log(groupOfNames.toString())
console.log(typeof(groupOfNames.toString()))

// .map(), .filter(), .reduce()

let jNames = groupOfNames.map( name => {
    return name[0] == 'J' ? name : false 
})

console.log(jNames)

// .reduce()
const nums = [2, 4, 6, 8, 10]
let numsReduced = nums.reduce((accumulator, currentNum) => {
    return accumulator + currentNum
})

console.log(numsReduced)

// .filter()
let longNames = groupOfNames.filter( name => name.length > 4)
console.log(longNames)

// .join(), .slice(), .search(), .splice()
console.log(groupOfNames.join())

console.log(groupOfNames.slice(0, 3))

console.log(groupOfNames.splice(0, 1, 'Professor Oak'))
console.log(groupOfNames)

console.log(groupOfNames[0].search('ak'))

