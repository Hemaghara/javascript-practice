//reduce method:convert into single answer


const name = [
  { firstname: "hem", lastname: "aghara" },
  { firstname: "john", lastname: "doe" },
];
const result = name.reduce((acc, cur) => {
  console.log("cur", cur);
  const fullname = cur.firstname + " " + cur.lastname;
  acc.push({ fullname: fullname });
  return acc;
}, []);
console.log(result);

//example 2

const number = [5, 10, 15];

const sum = number.reduce((acc, cur) => acc + cur, 0);

console.log("total sum is", sum);

//example 3:

const arr = [2, 4, 6];

const multiplication = arr.reduce((acc, cur) => acc * cur, 1);

console.log("multiplication:", multiplication);

//example 4:

const item = ["pen", "pencil", "eraser", "scale", "pen"];

const count = item.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

console.log("total count:", count);


//example:5

const fruit = ["banana", "apple", "kiwi", "orange"];

const findindivuallength = fruit.reduce((acc, cur) => {
  acc.push({
    val: cur,
    len: cur.length,
  });
  return acc;
}, []);
console.log(findindivuallength);
