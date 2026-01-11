//creat object.

let person={
  name:"hem",
  age:21,
  city:"morbi"

}

console.log("name:",person.name);
console.log("age:",person.age);
console.log("city:",person.city);


//add new item.
person.country="india";
console.log("country:",person.country);

//update item.
person.age=25;
console.log("age update:",person.age);

//delete item
delete person.city;
console.log("delete city:",person.city);



//object inside object.

let emp={
  id:101,
  name:"manav",
  address:{
    country:"india",
    state:"gujarat"
  }
}

console.log("emp_name:",emp.name);
console.log("emp_country:",emp.address.country);




