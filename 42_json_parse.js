// JSON.parse()  :==> is a JavaScript method used to convert a JSON string into a JavaScript object.


//datacomes:Local storage,api response,

//use:Localstorage store data only string. , api send data in json format



let jsonData = '{"name":"Hem","age":22,"city":"morbi"}';

let user = JSON.parse(jsonData);

console.log(user.name);
console.log(user.age); 


//json array example..

let jsonArray = '[{"id":1,"name":"Hem"},{"id":2,"name":"Manav"}]';

let users = JSON.parse(jsonArray);

console.log(users[1].name);

