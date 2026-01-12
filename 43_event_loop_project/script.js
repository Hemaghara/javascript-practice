/*
JavaScript is single-threaded, meaning it has only one call stack and can execute one task at a time

JavaScript Engine, which executes code line-by-line and handles async work using the Event Loop.

engine:two part

 1]memory phase:variable are allocate to the memory.
 2]call stack:manage the function stack 

browser provide web api:settimeout,fetch,dom event.

Two Queues:

1]Microtask Queue:Promises,async/await.
2]Callback (Task) Queue:settimeout,events.

Priority:Microtask Queue > Callback Queue

*/


//example:1

console.log("A");
console.log("B");
console.log("C");


//example:2


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
},2000);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");