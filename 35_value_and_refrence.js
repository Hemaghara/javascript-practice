//value type:store the actual value ,new copy create,change the variable does not effect other.

//example:string,number,boolean,null,undefined.

let a = 10;
let b = a;

b = 20;

console.log(a); 
console.log(b);


//reference:store memory refrence,not actual value,change the variable effect the other 

//object,array,function.


let obj1 = { name: "Hem" };
let obj2 = obj1;

obj2.name = "Prince";

console.log(obj1.name); 
console.log(obj2.name);
