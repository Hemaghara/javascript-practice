//for loop.

for(let i=1;i<=5;i++){
  console.log("i:",i);
}

console.log("=======================")

//while loop.

let number=0;

while(number<5){
  console.log("number:",number);
  number++;
}

console.log("==================");

//do-while loop.

number=0;
do{
  console.log("number:",number);
  number++;

}while(number<5);

console.log("==================");

//for-each loop

const fruits=["banana","apple","mango","orange"];

fruits.forEach((fruit)=>{
  console.log("fruit:",fruit);
})

console.log("==================");

//for-of loop

const student=["rahul","ajay","vijay"];

for(const stu of student){
  console.log("student:",stu)
}

