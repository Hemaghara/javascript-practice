//setter_method :set the value.


class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.skills = []; 
  }

  getfullname() {
    return this.firstName + " " + this.lastName;
  }

  set setSkill(skill) {
    this.skills.push(skill);
  }

  get getSkill() {
    return this.skills;
  }
}

const user1 = new Person("Hem", "Aghara");

console.log(user1.getfullname());
user1.setSkill = "HTML";
user1.setSkill = "CSS";

console.log(user1.getSkill); 
