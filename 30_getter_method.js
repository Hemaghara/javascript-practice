//getter:access value from the object.

class Person{
  constructor(FirstName,LastName,age,address){
    this.firstName=FirstName
    this.LastName=LastName
    this.age=age
    this.address=address
  }

  getfullname(){
    const fullName=this.firstName+" "+this.LastName
    return fullName
  }

  getAddress(){
    return this.address
  }

  get getAge(){
    return this.age
  }
}


const user1=new Person("Hem","Aghara",21,"Morbi");

console.log(user1.getfullname());
console.log(user1.getAddress());
console.log(user1.getAge)