// CODE here for your Lambda Classes
class Person{
  constructor(attributes){
      this.name = attributes.name,
      this.age = attributes.age,
      this.location = attributes.location
  }
  speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructor extends Person{
  constructor(attributes){
      super(attributes);
      this.specialty = attributes.specialty;
      this.favLanguage = attributes.favLanguage;
      this.catchPhrase = attributes.catchPhrase
  }
  demo(){
      return `Today we are learning about ${this.specialty}.`;
  }
  grade(student, subject){
      return `${student.name} receives a perfect score on ${subject}.`
  }
}

const daenerys = new Instructor({
  name: 'Daenerys',
  age: '23',
  location: 'Dragonstone',
  specialty: 'conquering',
  favLanguage: 'Valyrian ',
  catchPhrase: 'Fire and Blood',
})

const cersei = new Instructor({
  name: 'Cersei',
  age: '27',
  location: 'Kings Landing',
  specialty: 'cruelty',
  favLanguage: '$$$',
  catchPhrase: 'A Lannister always pays his debts',
})

const jon = new Instructor({
  name: 'Jon',
  age: '23',
  location: 'Castle Black',
  specialty: 'looking confused',
  favLanguage: 'the common tongue',
  catchPhrase: 'Winter is comin',
})

class Student extends Person{
  constructor(attributes){
      super(attributes);
      this.previousBackground = attributes.previousBackground;
      this.className = attributes.className;
      this.favSubjects = attributes.favSubjects
  }
  listSubjects(){
      return `${this.favSubjects}`
  }
  PRAssignment(){
      return `${this.name} has submitted a PR for ${this.className}.`;
  }
  sprintChallenge(){
      return `${this.name} has begun a sprint challenge on ${this.favSubjects[2]}.`;
  }
}

class ProjectManager extends Instructor{
  constructor(attributes){
      super(attributes);
      this.gradClassName = attributes.gradClassName;
      this.favInstructor = attributes.favInstructor
  }
  standUp(name, channel){
      return `${this.name} announces to ${channel}, "@${channel}, standy times!​​​​​"`;
  }
  debugsCode(name, student, subject){
      return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}