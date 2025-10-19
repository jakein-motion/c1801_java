// Author: Jake Molitor
// Course: COP1801 - JavaScript
// Assignment: Module 01 Activity
// Date: [insert date]
// Description: Demonstrates how to create variables, constants, and perform calculations.

// Ask user for their first name
let Fname = prompt("Please enter your first name:");

// Display a welcome message using the user's name
alert("Welcome, " + Fname + "!");

// Create a constant for Pi (7 significant digits)
const piValue = 3.1415926;

// Ask user for their favorite number and store it in a variable
let myFavNum = prompt("Enter your favorite number:");

// Convert the favorite number to a numeric type (in case it’s a string)
myFavNum = Number(myFavNum);

// Calculate the area of a circle using the formula A = πr²
let myArea = piValue * (myFavNum ** 2);

// Display all variables and results on the webpage
document.getElementById("output").innerHTML =
  "Hello " + Fname + "!<br>" +
  "You entered " + myFavNum + " as your favorite number.<br>" +
  "If that was the radius of a circle, the circle’s area would be " + myArea.toFixed(6) + ".<br><br>" +
  "Constant π (Pi) value used: " + piValue;
