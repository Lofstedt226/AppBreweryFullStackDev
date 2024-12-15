//Opens a prompt to display on web
alert("Hello World!");

//Logs on console
console.log("Hello World!");

//Data types
// String = "Hello World";
// Numbers = 123;
// Boolean = true / false;
// typeof() - used to identify type of given argument

//Variables templte --> declare var variable_name 

var name = "Will";
var age = 20;
var booleanTrue = true;
var booleanFalse = false;

/*Coding Exercise 1: Javascript Variables Exercise
--> Given the existing code below, can you write some code so that their values are switched around?
        - var a = "3";
        - var b = "8";
    So that the variable a holds the value "8".
    And the variable b holds the value "3".
    When the code is run, it should output:
        - a is 8
        - b is 3
    Do NOT change any of the existing code.
    You are NOT allowed to type any numbers.
    You should NOT redeclare the variables a and b. */

    function test() {
        var a = "3";
        var b = "8";
        
    /***********Do not change the code above 👆*******/
    //Write your code on lines 7 - 9:
        var temp = a;
        a = b;
        b = temp; 
    /***********Do not change the code below 👇*******/
    
        console.log("a is " + a);
        console.log("b is " + b);
    }
    
// String Concatenation

console.log("Hello " + " World!");

var nameOne = "Will";
console.log("Hello " + nameOne);


// User input Prompt
// String.length to count number of characters

var msg = prompt("Write your message: ");
var maxCount = 140;
alert("You have " + msg.length + "characters and have " + (maxCount-msg.length) + " characters remaining.");

// Slicing with slice(x,y)

var newName = prompt("What is your name?");
var firstCharacter = newName.slice(0,1);
var reaminingCharacter = newName.slice(1,newName.length);
var formattedName = firstCharacter.toUpperCase() + reaminingCharacter.toLowerCase();
console.log(formattedName);

// Numbers

var dogAge = prompt("How old is your dog?");
var humanAge = (dogAge - 2)*4+21;
console.log(humanAge);

// Functions
// Karel Robot Challenge 5x5
// Link: https://stanford.edu/~cpiech/karel/ide.html

// Challenge 1 - Get to top right corner

function main(){
    //your code here
    solve();
 }
 
 function solve(){
    move();
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();
 }

 // Challenge 2 Beeper along diagonal line

function main(){
    //your code here
    putBeeper();
    nextPoint();
    putBeeper();
    nextPoint();
    putBeeper();
    nextPoint();
    putBeeper();
    nextPoint();
    putBeeper();
 }
 
 function nextPoint(){
    move();
    turnLeft();
    move();
    turnRight();
 }

 // Challenge 3 - Alternating Beeper Placement
 // Highly inefficient but works

function main(){
    oddRow();
    turnLeft();
    evenRow();
    turnRight();
    oddRow();
    turnLeft();
    evenRow();
    turnRight();
    lastOddRow();
 }
 
 function evenRow(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnRight();
    move();
 }
 
 function oddRow(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnLeft();
    move();
 }
 
 function lastOddRow(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
 }

/* Coding Exercise 2: Life in Weeks Coding Exercise
I was reading this article by Tim Urban - Your Life in Weeks and realised just how little time we actually have.
In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
It will take your current age as the input and console.logs a message with our time left in this format:
You have x days, y weeks, and z months left.
Where x, y and z are replaced with the actual calculated numbers.
For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.
IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.
Example Input
e.g. If you are 56 years old:
lifeInWeeks(56)
Example Output
You have 12410 days, 1768 weeks, and 408 months left.
*/

function lifeInWeeks(age) {
    /************Don't change the code above************/    
        //Write your code here.
        var maxAge = 90;
        var remainAge = maxAge - age;
        
        var months = 12;
        var days = 365;
        var weeks = 52;
    
        console.log("You have " + (days * remainAge) + " days, " + (weeks * remainAge) + " weeks, and " + (months * remainAge) + " months left.")
    /*************Don't change the code below**********/
}
    
/* Coding Exercise 3: BMI Calculator Challenge
Create a BMI calculator using JavaScript functions. \
The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.
You can calculate it using the formula below, where weight divided by height squared.
BMI = weight / height^2
Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. The output should be rounded to the nearest whole number.
The first parameter should be the weight and the second should be the height.
NOTE: You do not need to write any alerts or prompts or console logs. Your code should only contain the function, the result has to be returned by the function. You do not need to call the function.
*/

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight, height){
    
    var BMI = weight/(height*height);
    return Math.round(BMI);
}