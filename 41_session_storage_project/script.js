//Session storage is a web browser API used for temporarily storing key-value data that persists only for the duration of a single page session. Data stored in session storage is automatically cleared when the browser tab or window is closed. 

function saveData(){
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;

  sessionStorage.setItem("userName",name);
  sessionStorage.setItem("userEmail",email);

  console.log("data is save in session storage...");
}

function getData(){
  document.getElementById("showName").innerText =
    sessionStorage.getItem("userName") || "";

  document.getElementById("showEmail").innerText =
    sessionStorage.getItem("userEmail") || "";
}

function clearData() {
  sessionStorage.clear();

  document.getElementById("showName").innerText = "";
  document.getElementById("showEmail").innerText = "";

  console.log("Session Storage cleared");
}