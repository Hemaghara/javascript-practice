//Synchronous:code line by line run .each task wait for previous task is finish.

//Synchronous example:

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

//Asynchronous:Asynchronous code allows multiple tasks to run without blocking the main program.

//doesn't wait for other task.

console.log("hello1");

setTimeout(() => {
  console.log("run after 2 second");
}, 2000);

console.log("hello2");