/*
call():The call() method immediately invokes a function with a specified this value and arguments provided individually (comma-separated). 

*/

const person={
  name:"Alice"
}

function greet(message){
  console.log(`${message},${this.name}`);
}

greet.call(person,'hello');


/*
The apply() method is very similar to call(), except it accepts an array (or array-like object) of arguments instead of individual arguments
*/

const user={
  name:"hem"
}

function welcome(message1,message2){
  console.log(`${message1},${this.name}!${message2}`)
}

welcome.apply(user,['hi','how are you?']);

/*
The bind() method creates a new function with a specified this value and optional preset arguments, but it does not execute the function immediately. The new, "bound" function can be invoked later.

*/

const emp={
  name:"hem aghara"
}

function hello(){
  console.log(`Greetings, ${this.name}!`);
}

const boundhello=hello.bind(emp);
boundhello();