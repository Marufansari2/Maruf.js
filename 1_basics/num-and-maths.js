/*const score = 500
console.log(score);


const balance=new Number(100) // Number is a wrapper object for primitive number, it is used to create a number object, it is not recommended to use it to create a number object, it is better to use primitive number
console.log(balance);

console.log(balance.toString()); // toString is used to convert a number to a string, it returns a string representation of the number
console.log(balance.toString().length); // toString is used to convert a number to a string, it returns a string representation of the number, length is used to get the length of the string
console.log(balance.toFixed(2)); // toFixed is used to format a number with a specified number of digits after the decimal point, it returns a string representation of the number
console.log(balance.toPrecision(3)); // toPrecision is used to format a number to a specified length, it returns a string representation of the number

const otherNumber = 123.456789
console.log(otherNumber.toPrecision(4)); // toPrecision is used to format a number to a specified length, it returns a string representation of the number

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // toLocaleString is used to convert a number to a string, it returns a string representation of the number according to the host's current locale, it can also accept a locale and options as parameters

*/
//Maths

console.log(Math);
console.log(Math.abs(-36)); // abs is used to get the absolute value of a number, it returns the absolute value of the number
console.log(Math.round(4.6)); // round is used to round a number to the nearest integer, it returns the rounded integer
console.log(Math.floor(4.6)); // floor is used to round a number down to the nearest integer, it returns the rounded integer
console.log(Math.ceil(4.2)); // ceil is used to round a number up to the nearest integer, it returns the rounded integer
console.log(Math.max(1,2,3,4,5)); // max is used to get the maximum value from a list of numbers, it returns the maximum value
console.log(Math.min(1,2,3,4,5)); // min is used to get the minimum value from a list of numbers, it returns the minimum value
console.log(Math.sqrt(16)); // sqrt is used to get the square root of a number, it returns the square root of the number
console.log(Math.random()); // random is used to get a random number between 0 and 1, it returns a random number between 0 and 1
console.log(Math.random()*10); // random is used to get a random number between 0 and 1, it returns a random number between 0 and 1, multiplying it by 10 will give us a random number between 0 and 10


const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min +1))+min); // this will give us a random number between min and max, we can also use Math.floor to round it down to the nearest integer