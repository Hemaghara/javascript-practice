//global scope.

var a=10;
console.log("a:",a);

//fuction scope.

function test(){
  var b=20;
  console.log("b:",b);

}

test();


//block scope.
{
  let c=30;
  console.log("c:",c);
}



