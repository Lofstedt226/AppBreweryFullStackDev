// Random Number Generator
// Any number from 0 to 0.99 recurring 16times
var n = Math.random();

// Love Calculator 

var name1 = prompt("What is your name?");
var name2 = prompt("What is your partner's name?");
var randomChance = Math.random() * 100 + 1;
randomChance = Math.floor(randomChance);

console.log("Chance of "+ name1 + " and " + name2 + " becoming a couple is " + randomChance + "%.");

// Conditional Statements, enhance the love calculator

if (randomChance > 0 && randomChance < 50){
    console.log(randomChance + "%. Unlikely.")
} else if (randomChance >= 50 && randomChance < 75){
    console.log(randomChance + "%. Very likely!")
} else {
    console.log(randomChance + "%. Perfect Match!")
}

// Comparators and Equality
/* === is equal to and is of same type, == is equal value, > is treater than, < is lesser than, >= is greater or equal to, <= is less or equal to.

&& And, || Or, ! Not
*/

/* Coding Exercise 4: BMI Calculator Advanced (IF/ELSE)
Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.
Write a function that outputs (returns) a different message depending on the BMI.
BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."
BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."
BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."
The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.
IMPORTANT the message wording has to match precisely for the code to pass the validation. Including punctuation and capitalisation.
*/

function bmiCalculator (weight, height) {
    var bmi = weight/(height * height);
    var interpretation;
    
    if (bmi < 18.5){
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else{
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}

/* Coding Exercise 5: Leap Year Challenge 
Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.
This is how to work out whether if a particular year is a leap year:
A year is a leap year if it is evenly divisible by 4 ;
except if that year is also evenly divisible by 100;
unless that year is also evenly divisible by 400.

e.g. Is the year 2000 a leap year?:
2000 ÷ 4 = 500 (Leap)
2000 ÷ 100 = 20 (Not Leap)
2000 ÷ 400 = 5 (Leap!)
So the year 2000 is a leap year.
But the year 2100 is not a leap year because:
2100 ÷ 4 = 525 (Leap)
2100 ÷ 100 = 21 (Not Leap)
2100 ÷ 400 = 5.25 (Not Leap)
Warning your output should match the Example Output format exactly, even the positions of the commas and full stops.

Example Input 1
2400
Example Output 1
Leap year.

Example Input 2
1989
Example Output 2
Not leap year.
*/
function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
        var leapYear = "Leap year.";
        var notLeapYear = "Not leap year.";
        
        if ((year%4) == 0) {
            if ((year%100) == 0){
                if ((year%400) == 0){
                    return leapYear;
                } else{
                    return notLeapYear;
                }
            } else{
                return leapYear;
            }
        } else{
            return notLeapYear;
        }
    /**************Don't change the code below****************/    
    
}

// Javascript Arrays

var guestLines = ["Will", "Dave", "John"];
var guestName = prompt("What is your name?");

if (guestLines.includes(guestName)){
    console.log("Welcome");
} else{
    console.log("Next time.");
}

// Adding Elements and Intermediate Array Techniques
function fizzBuzz() {
    
    if (count%3 ==0 && count%5 == 0){
        output.push("FizzBuzz");
    } else if (count%3 == 0){
        output.push("Fizz");
    } else if (count%5 ==0){
        output.push("Buzz");
    } else {
        output.push(count);
    }

    count++;
}

/* Coding Exercise 6: Who's Buying Lunch?
ou are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

Example Input

["Angela", "Ben", "Jenny", "Michael", "Chloe"]
Example Output

Michael is going to buy lunch today!
*/

function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        
        var nameLength = names.length;
        var randomNum = Math.floor(Math.random() * nameLength);
        var chosenOne = names[randomNum];
        
        return chosenOne + " is going to buy lunch today!";
    /******Don't change the code below*******/    
    }

// Control Statement: While Loops

var output = [];
var count = 1;

function fizzBuzz2() {
    while(count <= 100){
        if (count%3 ==0 && count%5 == 0){
            output.push("FizzBuzz");
        } else if (count%3 == 0){
            output.push("Fizz");
        } else if (count%5 ==0){
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
}

// 99 Bootles Challenge
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// Control Statement: For Loop

var output2 = [];

function fizzBuzz3() {
    for (var count = 100; count > 1; count--) {
        if (count%3 ==0 && count%5 == 0){
            output.push("FizzBuzz");
        } else if (count%3 == 0){
            output.push("Fizz");
        } else if (count%5 ==0){
            output.push("Buzz");
        } else {
            output.push(count);
        }
    }
}

/* Coding Exercise 7: Fibonacci Exercise
Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
Where every number is the sum of the two previous ones.
e.g. 0, 1, 1, 2, 3, 5 comes from
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
etc.
Create a function where you can call it by writing the code:
fibonacciGenerator (n)
Where n is the number of items in the sequence.
So I should be able to call:
fibonacciGenerator(3) and get
[0,1,1]
as the output.
IMPORTANT: The solution checker is expecting an array as the correct output.
Do NOT change any of the existing code.
You do NOT need any alerts or prompts, the result should be returned from the function as an output.
The first two numbers in the sequence must be 0 and 1.
Also, if you decide to create a for loop, make sure you explicitly specify var i = 0 rather than simply writing i = 0 . This is a quirk of the testing suite.
e.g. for (var i = 0; i < 10; i ++)
*/

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var output = [];
        
        if(n<=0){
            return Error;
        }
        
        if(n==1){
            output.push(0);
            return output;
        } else if(n==2){
            output.push(0);
            output.push(1);
            return output;
        } else{
            output = [0,1];
    
            for(var i=2; i<n; i++){
                output.push(output[output.length-2] + output[output.length-1]);
            }
        }
    
        return output;
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }