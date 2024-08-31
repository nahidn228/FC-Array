// 1. Declare an array

// Instructions:
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array
console.log("Practice Problem - 01");

let fruits = ["aam", "jam", "kathal", "lichu", "batabiLebu"];
console.log(fruits[3]);
let newValue = "jambura";
fruits[2] = newValue;
console.log(fruits);

// 2. Add or remove elements

// Instructions:
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output
console.log("Practice Problem - 02");

let places = ["Rangamti", "Bandorban", "kaptay"];
console.log(places);

places.push("sylhet");
console.log(places);

places.push("sajek", "lalbag");
console.log(places);

places.pop();
console.log(places);

// 3. Checking Array Membership with ‘includes’

// Instructions:
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.
console.log("Practice Problem - 03");

let books = ["html", "CSS", "Tailwind", "javascript"];
console.log(books);
console.log(books.includes("javascript"));

if (books.includes("javascript")) {
  console.log("Party hobe Mammaaaaa ....!!!!!");
} else {
  console.log("dure giya morr...");
}

// 4. Checking if it's an Array

// Instructions:
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.
console.log("Practice Problem - 04");

let numbers = [20, 12, 35, 40];
console.log(numbers);

let rosGolla = "ros o gol laaa";
console.log(rosGolla);

console.log(Array.isArray(numbers));

if (Array.isArray(numbers) == true) {
  console.log("This is an array");
} else {
  console.log("This is NOT an array");
}

// 5. Combining Arrays

// Instructions:
// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().
console.log("Practice Problem - 05");

let num1 = [1, 2, 3, 4];
let num2 = [5, 6, 7, 8];

let combineArray = num1.concat(num2);
console.log("Array - 1 = ", num1);
console.log("Array - 2 = ", num2);
console.log("Combine Array = ", combineArray);
