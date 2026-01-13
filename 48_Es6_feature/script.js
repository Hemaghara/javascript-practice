//1]let:block scope

let a=10;
console.log(a);

{
  let b=10;
}

// console.log(b);        never access b



//2]const:block scope

const pi=3.14
console.log(pi);

{
  const number=23;

}

// console.log(number);       never access number




//3]Arrow Functions:

const add = (a, b) => a + b;
console.log(add(2, 3));


//4]Template Literals

let name = "Hem";
let age = 22;

console.log(`My name is ${name} and age is ${age}`);

//5]Default Parameters

function greet(name = "User") {
  console.log(`Hello ${name}`);
}

greet();        
greet("Hem");


//6]Destructuring (Array)

let arr = [10, 20, 30];

let [ab, b, c] = arr;

console.log(ab); 
console.log(b); 

//7]Destructuring (Object)

let user = {
  fullname: "Hem",
  city: "Rajkot"
};

let { fullname, city } = user;

console.log(fullname);
console.log(city);

//8]Spread Operator ...(expand value)

/*copy ,merge(arrays or objects),Pass array values as function arguments*/
let a1 = [1, 2];
let a2 = [...a1, 3, 4];

console.log(a2);



//9]Rest Operator ... (To COLLECT (gather) multiple values into one)

/*
Handle unknown number of function arguments,Write flexible functions,Collect remaining values.
*/


function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3));

//10]Enhanced Object Literals

let emp = "Hem";
let year = 22;

let user1 = {
  emp,
  year,
  greet() {
    console.log("Hello");
  }
};

