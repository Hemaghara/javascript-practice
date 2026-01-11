//eventListener in js.:listen for action and run the some code and action happen.

//two argument:event,function.

//1]click event.

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("button click");
});

//2]Double Click event

const dblBtn = document.getElementById("dblBtn");

dblBtn.addEventListener("dblclick", function () {
  console.log("Double click");
});

//3]mouse over

const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
  console.log("mouse over...");
});

//4]mouse out

box.addEventListener("mouseout", () => {
  box.style.background = "lightgray";
});

//5]input event

const input = document.getElementById("name");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  output.textContent = input.value;
});


//6]chage event

document.getElementById("city").addEventListener("change", (event) => {
    console.log(`city selected:${event.target.value}`);
    
});

//7]submit event.

 document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted without reload");
  });

//8]key down event.

  document.getElementById("keyInput").addEventListener("keydown", () => {
    console.log("Key pressed");
  });


  