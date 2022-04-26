// Homework Day 1

// Returning Code Wars Problem

/**
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */

function even_or_odd(number) {
    if (number % 2 == 0) {
      return 'Even'
    } else {
      return 'Odd'
    }
  }

/*
Return the Nth Even Number
*/

function nthEven(n){
    let output = n * 2 - 2
    return output
  }

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(sentence, arr){
    for (let i = 0; i < arr.length; i++){
        if (sentence.includes(arr[i]) == true) {
            return `Matched ${arr[i]}`           
        } else {
            console.log("No Matches")
        }
    }
}

console.log(findWords(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arrChange = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i +=2){
        arr.splice(i, 1, "even index")
    } return arr
}

console.log(replaceEvens(arrChange))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]