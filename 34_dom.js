//dom main use:change html element,html attribute,css style,remove html,add new html,new html event.


//getelementbytagname:

console.log("hello");
const alltitles = document.getElementsByTagName("h1");
console.log(alltitles);

for (let i = 0; i < alltitles.length; i++) {
  console.log(alltitles[i]) 
}


//getelementbyclassname

const allTitles1 = document.getElementsByClassName('title')

console.log(allTitles1) 
console.log(allTitles1.length) 

for (let i = 0; i < allTitles1.length; i++) {
  console.log(allTitles1[i]) 
}

//getelementbyid:pass id without: #

let firstTitle = document.getElementById('first-title')
console.log(firstTitle)

//queryselector.:select html element by tag name,id,class name.

let first=document.querySelector('h1');
let second=document.querySelector('#second-title');
let third=document.querySelector('.title');

//change the text.:using innerhtml change the text for the html.

function changetext(){
  document.getElementById("box").innerHTML="hello hem";
}


//Change Link href.

document.getElementById("myLink").href = "https://openai.com";

//change the input.
document.getElementById("name").value = "Prince";

//change the css style.

function changeColor(){
  document.getElementById("text").style.color="red";
}

//change the background color.
function changeBg() {
  document.getElementById("box1").style.backgroundColor = "yellow";
}