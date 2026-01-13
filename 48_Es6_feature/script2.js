//11]Classes:Blueprint for objects.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi ${this.name}`);
  }
}

let p1 = new Person("Hem", 22);
p1.greet();


//12]Promises

let promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise
  .then(data => console.log(data))
  .catch(err => console.log(err));

 //13]for...of loop
 
 let arr = [1, 2, 3];

for (let value of arr) {
  console.log(value);
}

//14]Map:key-value collection.

let map = new Map();

map.set("name", "Hem");
map.set("age", 22);

console.log(map.get("name"));

//15]Set:Unique values only.

let set = new Set([1, 2, 2, 3]);

console.log(set);

//16]Array.find() & findIndex()

let arr1 = [10, 20, 30];

let value = arr1.find(x => x > 15);
let index = arr1.findIndex(x => x > 15);

//17]String Methods

let str = "Hello World";

str.startsWith("Hello"); 
str.endsWith("World");   
str.includes("lo"); 