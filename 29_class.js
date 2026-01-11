//define a class

class Person{

}

const person=new Person()
console.log(person)


//Class Constructor

class User{
  constructor(firstName,lastName){
    this.firstName=firstName
    this.lastName=lastName
  }
}

const man=new User("Hem","Aghara");
console.log(man);


//class method..


class emp{

  constructor(firstName,lastName,age){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
  }

  getfullname(){
    const fullName=this.firstName+" "+this.lastName
    return fullName
  }

  getAge(){
    return this.age
  }

}

const tcs=new emp("Hem","Aghara",21);
console.log("emp_name:",tcs.getfullname());
console.log("emp_age:",tcs.getAge());