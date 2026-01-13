//simple function:use function keyword,own this,use constructor,take argrument,fully hoisted

/*
Use Simple Function when:

1]Object methods
2]Constructors
3]When you need arguments
4]When function hoisting is required
5]Class / prototype methods

*/


function greet(){
  console.log("hello");
}

greet();


//arrow function:written using =>,short syntax,not own this,cannot use constructor,no argument,NOT hoisted

/*
Use Arrow Function when:
1]Callbacks
2]Array methods (map, filter, reduce)
3]Short functions
4]React components & handlers
*/

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


