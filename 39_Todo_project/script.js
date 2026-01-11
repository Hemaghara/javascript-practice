const taskList=document.getElementById("taskList");

function addTask() {
  let input=document.getElementById("taskInput");
  let taskText=input.value;
 
  if(taskText===""){
    alert("please enter task");
    return;
  }

let li=document.createElement("li");
li.textContent=taskText;

li.onclick=function(){
  li.classList.toggle("Done");
}

let deletebtn=document.createElement('button');
deletebtn.textContent="Delete";

deletebtn.onclick=function(){
  taskList.removeChild(li);
}

li.appendChild(deletebtn);
  taskList.appendChild(li);

  input.value = "";

}

