// Array

const myArr=[0,1,2,3,4,5] // this is an array, it is a data structure that can hold multiple values in a single variable, it is ordered and indexed, it can hold any type of data, it can be created using square brackets [] and the values are separated by commas
const myHero=['Superman','Batman','Spiderman','Ironman'] // this is an array of strings, it can hold any type of data, it can be created using square brackets [] and the values are separated by commas

const myArr2=new Array(1,2,3,4,5) // this is another way to create an array, it is created using the Array constructor, the values are passed as arguments to the constructor
//console.log(myArr[2]);

// Array methods

//myArr.push(6) // push is used to add an element at the end of the array, it modifies the original array and returns the new length of the array
//console.log(myArr);

//myArr.pop() // pop is used to remove the last element of the array, it modifies the original array and returns the removed element
//console.log(myArr);

myArr.unshift(9) // unshift is used to add an element at the beginning of the array, it modifies the original array and returns the new length of the array
//console.log(myArr);

myArr.shift() // shift is used to remove the first element of the array, it modifies the original array and returns the removed element
//console.log(myArr);

//console.log(myArr.includes(9)); // includes is used to check if an element is present in the array, it returns true if the element is found and false if it is not found

//console.log(myArr.indexOf(9)); // indexOf is used to get the index of the first occurrence of an element in the array, it returns the index of the element if it is found and -1 if it is not found

//const newArr= myArr.join()
//console.log(newArr); // join is used to convert an array to a string, it takes an optional separator as an argument, if no separator is provided, it uses a comma as the default separator
//console.log(typeof newArr);

//slice,splice

console.log("A",myArr);

const myn1=myArr.slice(1,3) // slice is used to create a new array from a portion of an existing array, it takes two arguments, the start index and the end index (exclusive), it does not modify the original array
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3) // splice is used to modify an array by adding, removing or replacing elements, it takes three arguments, the start index, the number of elements to remove and the elements to add (optional), it modifies the original array and returns the removed elements
console.log("C",myArr);
console.log(myn2);
