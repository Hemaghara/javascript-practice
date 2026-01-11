let x=10;
let y=20;

//sum function.

function sum(x,y){
 return x+y;
}

let result1=sum(x,y);
console.log("sum:",result1);

//Arrow function.

const multiplication=(x,y)=>{
  return x*y;
}

const result2=multiplication(x,y);
console.log("multiplication:",result2);


//greet function.

function greet(name ,age){
  return `hello ${name},your age is ${age}`;
}
let message=greet("hem",21);
console.log(message);


