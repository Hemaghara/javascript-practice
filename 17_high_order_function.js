//callback function.:function pass argument to another function.

const callback=(num)=>{
  return num**2;
}

function cube(callback,num){
  return callback(num)*num;
}

console.log("Cube of 3:",cube(callback,3));




//setinterval function:every second

function hello(){
  console.log("hello every 2 seconds")
}

setInterval(hello,2000);


//settimeout function:run only 1 time.

function greet(){
  console.log("greet after 3 second");
}

setTimeout(greet,3000);


//foreach method 

const colors=["red","green","blue"];

colors.forEach(function(colors){
  console.log("color:",colors);
})

