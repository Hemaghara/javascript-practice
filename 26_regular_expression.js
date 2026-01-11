//Regular Expressions:find pattern inside data.

//take two parameter:pattern,flag.

// let pattern = 'love'
// let flag = 'gi'
// let regEx = new RegExp(pattern, flag)


const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result)