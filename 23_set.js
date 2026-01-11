//empty set

//store the unique value

const company=new Set()
console.log(company)

//creating set from the array.

const language=["hindi","gujarati","punjabi","english"];

const setoflanguage=new Set(language);
console.log(setoflanguage);

//iterable each element

for (const language of setoflanguage) {
  console.log(language)
}

//add element

const student=new Set()


student.add('hem')
student.add('manav')
student.add('prince')

console.log(student)

//delete item


