//map method.:return a new array.

const number=[1,2,3,4,5];

const mappednumber=number.map(function(value){
  return value*3;
})

console.log("Mapped number:",mappednumber);


//example 2

const student=["hem","rahul","jay","prince"];

const uppercasestudent=student.map(function(name){
  return name.toUpperCase();
})

console.log("uppercase student:",uppercasestudent);

//example 3

const country=["india","usa","uk","canada"];

const firsttwoletters=country.map(function(cntry){
  return cntry.slice(0,2);
})

console.log("first two letter country:",firsttwoletters);

