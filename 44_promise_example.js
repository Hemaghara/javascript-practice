//example:1
const p=new Promise((res,rej)=>{
  rej("rejected promise");
}).then((data)=>{
  console.log("first then");
}).catch((err)=>{
  console.log("first catch");
}).catch((err)=>{
console.log("second catch");
})
.then((data)=>{
  console.log("second then")
}).finally(()=>{
  console.log("finaly")
});



//example:2

const q=new Promise((res,rej)=>{
  res("rejected promise");
}).then((data)=>{
  console.log("first then");
}).catch((err)=>{
  console.log("first catch");
})
.then((data)=>{
  console.log("second then")
}).finally(()=>{
  console.log("finaly")
})