//for-each

const number=[10,20,30,40,50];

number.forEach(element => {
  console.log("Element:",element);
});

//map method

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
console.log("Mapped array:",numbers2);







