const name = "Maruf"
const repoCount = 50

// console.log(name+repoCount+ "value");  // concatenation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Chess-Ansari')
console.log(gameName[3]);
console.log(gameName.__proto__); // __proto__ is used to access the prototype of an object, it returns the prototype object of the specified object, it is a property of all objects in JavaScript and is used for inheritance and method sharing among objects 


console.log(gameName.length);
console.log(gameName.toLocaleUpperCase()); // toLocaleUpperCase is used to convert a string to uppercase letters according to the host's current locale, it returns a new string with the converted characters

console.log(gameName.charAt(2)); // charAt is used to return the character at a specified index in a string, it returns an empty string if the index is out of range
console.log(gameName.indexOf('e')); // indexOf is used to find the index of the first occurrence of a specified value in a string, it returns -1 if the value is not found

const newString =gameName.substring(0,4) // substring is used to extract a part of the string and return a new string, it can also accept negative index but it will be treated as 0
console.log(newString);

const anotherString = gameName.slice(-2,3) // slice is used to extract a part of the string and return a new string, it can also accept negative index
console.log(anotherString);

const newStringOne ="  Maruf    "
console.log(newStringOne); 
console.log(newStringOne.trim()); // use to remove white spaces from start and end of the string

const url = "https://www.youtube.com/watch?v=123456789"
console.log(url.replace("youtube","facebook")); // replace is used to replace a specified value with another value in a string, it returns a new string with the replaced value

console.log(url.includes('maruf')); // includes is used to check if a string contains a specified value, it returns true if the value is found and false if it is not found

console.log(gameName.split('-')); // split is used to split a string into an array of substrings, it returns an array of substrings based on the specified separator
