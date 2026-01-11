//simple function:use function keyword,own this,use constructor,take argrument.

function greet(){
  console.log("hello");
}

greet();


//arrow function:written using =>,short syntax,not own this,cannot use constructor,no argument.

const sayhello=()=>{
  console.log("hello world");
}

sayhello();

//simple function take argrument.

function fullname(firstname,lastname){
  const fullName=firstname+" "+lastname;
  console.log(fullName);
}

fullname("hem","Aghara");


