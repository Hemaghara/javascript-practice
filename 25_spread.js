//spread with array.(copy,merge,expand array)

const first=[1,2,3]
const second=[...first,4,5]

console.log(second);


//spread with object.

const person={
  name:"hem",
  address:"morbi"
}

const user={
  ...person,
  country:"india"
}

console.log(user)
