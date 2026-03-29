//Dates
/*
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.getTime()); // getTime is used to get the number of milliseconds since January 1, 1970, it returns a number representing the time value of the date object
console.log(myDate.getFullYear()); // getFullYear is used to get the year of the date object, it returns a number representing the year
console.log(myDate.getMonth()); // getMonth is used to get the month of the date object, it returns a number representing the month (0-11)
console.log(myDate.getDate()); // getDate is used to get the day of the month of the date object, it returns a number representing the day of the month (1-31)
console.log(typeof myDate);

//let myCreatedDate = new Date('2000-04-01') // this is the date format that we can use to create a date object, it is in the format of YYYY-MM-DD, we can also use other formats like MM/DD/YYYY or DD/MM/YYYY but it is not recommended to use them because they are not supported in all browsers
//console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date(2000,3,1)
console.log(myCreatedDate.toDateString()); // this is the date format that we can use to create a date object, it is in the format of new Date(year, month, day), month is 0-indexed (0-11) so January is 0 and December is 11

let myTimestamp = Date.now() // this is used to get the current timestamp in milliseconds since January 1, 1970
console.log(myTimestamp);

console.log(myCreatedDate.getTime()); // this is used to get the timestamp of the created date in milliseconds since January 1, 1970
console.log(Math.floor(Date.now()/1000));
*/

let newDate = new Date()        
console.log(newDate);
console.log(newDate.getMonth()); // getMonth is used to get the month of the date object, it returns a number representing the month (0-11)

newDate.toLocaleString('default',{
    weekday:'long',
    
})