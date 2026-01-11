//JSON.stringify() :==> converts a JavaScript object into a JSON string.


//uses:==>LocalStorage only stores strings,Servers accept JSON text

let user = {
  name: "Hem",
  age: 22,
  city: "Morbi"
};

let jsonData = JSON.stringify(user);

console.log(jsonData);



