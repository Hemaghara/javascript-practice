//javascript does not use inheritance but use prototypes.

//which you can access using __proto__

const person={
  greet:function(){
    console.log("hello");
  },
};

const student={
  name:"hem aghara"
}

student.__proto__=person;
student.greet();

//student have does not greet method.
//find greet method in person. 
//executes.


