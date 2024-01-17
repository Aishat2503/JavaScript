console.log("Hello world!");
let name = "Ade";c
console.log(name);
name ="busola";
console.log(name);
let age = 57;
let newAge = 13;
let percentage = newAge / age;
console.log(percentage);
let myString='hi';
let otherString = 'hello';
console.log(myString);
console.log(otherString);
let $num = 0;
console.log($num);
let bol = true;
console.log(bol);
let undefinedVariables;
console.log(undefinedVariables);
let emptyValue = null;
console.log(emptyValue);
console.log(typeof myString);
const pI=3.147;
console.log(pI);


// Strings Methods

let string = "Javascript"
firstLetter =  string[3];
console.log(firstLetter);
console.log(string.length);
console.log(string.length - 1);

console.log(string.toUpperCase());
console.log(string.toLowerCase());

let text = "Programming";
console.log(text.substring(1, 3));
console.log(text.substr(1, 4));

let day = "30 Days of Javascript";
console.log(day.split());
console.log(day.split(" "));

console.log(day.includes("Days"));

let title = "javscript"
let lastIndex = title.length-1;
console.log(title.charAt(lastIndex));
console.log(title.indexOf("j"));
console.log(day.replace("Days", "Months"));


// Assignment Operators
let numOne = 5;
let numTwo = 4;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let reminder = numOne % numTwo;
let powerOf = numOne ** numTwo;
console.log(sum, diff, mult, reminder, powerOf);

// Comparison Operators
let first = 3;
let second = 2;
console.log(first>second);
console.log(first<second);
console.log(first == second);
console.log(first === second);
console.log(first !== second);
console.log(first <= second);

console.log("3" == 3);
console.log("3" === 3);

//console.log()
console.log(1 == true);
console.log(0 == true);
console.log(0 == false);
console.log(0 === false);

// Logical Operator
// true and true = true
// true and false = false
// false and false = false

let check = 4 > 3 && 10 > 5;
let see = 4 > 3 && 5 > 10;
console.log(check, see);

let compare = 4 > 3 || 10 > 5;
let value = 4 > 3 || 10 < 5;
let answer = 4 < 3 || 10 < 5;

// true or false =true;
// true or true = true;
// false or false = false;

console.log(compare, value, answer);

// Negation Operators
let negate = !(4 < 3);
let result = !true;
console.log(result, negate);

//Increment and Decrement Operator
let count = 20;
console.log(++count);
console.log(count++);
let num = 20;
num--;
console.log(num);
// 

// Ternary Operators
let isAMan = true;
isAMan ? console.log('Yes, he is a man') :
console.log("No, he is not a man");