//promise:handle asynchronous operations

//promise provide three state:pending(initial),fullfilled(operation complete),reject(opertion fail).

//fetching data from server,read file ,waiting user input,timer(settimeout).


//take two parameter:resolve and reject.


//example:1

const mypromise=new Promise((resolve,reject)=>{
let success=true;

if(success){
  resolve("complete task");
}else{
  reject("task not complete");
}
});

mypromise
.then(result=>console.log(result))
.catch(error=>console.log(error));



//example:2

const delayPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received after 2 seconds");
  }, 2000);
});

delayPromise.then(result => {
  console.log(result);
});


//student check result..

function checkresult(marks) {

  return new Promise((resolve,reject)=>{
    if(marks>=35){
      resolve("pass in result");
    }else{
      reject("not pass in result");
    }
  })
}

checkresult(70).then(result=>console.log(result)).catch(error=>console.log(error))