// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


function divide(x,y) {
	//Write your code below this line
var divide = x /y;
return divide;
}

function multiply(x,y) {
var multiply = x *y;
return multiply;
}

function subtract(x,y) {
var subtract = x -y;
return subtract;
}

function add(x,y) {
 var sum = x +y;
 return sum;
}

function power(x,y) {
var power = Math.pow (x,y);
return power;
}

function square_root(x) {
var square_root = Math.sqrt(x);
return square_root;
}

function logBase10(x) {
var logbase10 = Math.log10(x);
return logbase10;
}

function generateRandomNumber() {
var generateRandomNumber = Math.floor((Math.random()*10)+1);
return generateRandomNumber;
}
