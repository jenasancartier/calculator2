// Calculator
var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(numbers1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: "));

alert(divide(number1, number2));

// Calculate BMI

var bmi = function (answer1, answer2) {
 return (answer1 * 703) / (answer2 * answer2);
};
var lbs = parseInt(prompt("What is your weight in lbs?"));

var inch = parseInt(prompt("What is your height in inches?"));


alert(bmi(lbs, inch));

// Convert temperature from Celsius to Farenheight

var celsius = parseInt(prompt("Enter a temperature in Celsius."));

var convert = function (input1){
return (input1 *1.8) + 32;
};
alert(convert(celsius));

// Convert temperature from Farenheight to Celsius

var fahrenheit = parseInt(prompt("Enter the temperature in fahrenheit, please."));

var convert = function(input) {
	return (input - 32) * 1.8;
};

alert(convert(fahrenheit));
