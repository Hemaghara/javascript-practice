//Destructing.(Array):take value from the array and assign into variable
const numbers = [1, 2, 3]
  let [numOne, numTwo, numThree] = numbers

  console.log(numOne, numTwo, numThree)


  const name=["hem","prince","manav"];
  let [first,second,third]=name;

  console.log(first,second,third);

  //Destructing.(object)

 const user = {
  fname: "Prince",
  role: "Full Stack Developer",
  age: 22
};

const { fname, role } = user;

console.log(fname); // Prince
console.log(role);
