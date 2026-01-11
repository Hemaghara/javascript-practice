//template literal:mordern way work with string.  use :  ``  or " "

//uses:1]insert variable direct into string 2] write multi-line string  

//old way.

let name="hem";
let age=22;

console.log("my name is:" +name+ ",my age is:"+age)


//new way.

let fullName="hem aghara";
console.log(`my fullname is:${fullName}`);


//without-template litreal.

let message = "Hello Hem\nWelcome to JavaScript\nHappy Learning!";
console.log(message);


console.log("=======")

//use template litreal

let message1 = `Hello Hem
Welcome to JavaScript
Happy Learning!`;

console.log(message1);


const arr=[4,53,2,1];

const result=arr.sort;
console.log(result);