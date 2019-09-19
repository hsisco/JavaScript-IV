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

const ygritte = new Student({
  name: 'Ygritte',
  age: '23',
  location: 'North of the Wall',
  catchPhrase: 'You know nothin, Jon Snow',
  previousBackground: 'Free Folk',
  className: 'WldlgsSoWal',
  favSubjects: ['Jon', 'tra-la-la-lally day', 'archery'],
})

const hodor = new Student({
  name: 'Hodor',
  age: 'Hodor',
  location: 'Hodor',
  catchPhrase: 'Hodor!',
  previousBackground: 'Hodor',
  className: 'Hodor',
  favSubjects: ['Hodor', 'Hodor', 'Hodor'],
})

const jaqen = new Student({
  name: 'Jaqen Hghar',
  age: '27',
  location: 'Braavos',
  catchPhrase: 'valar morghulis',
  previousBackground: 'a man',
  className: 'Faceless Men',
  favSubjects: ['fighting', 'annoying Arya', 'changing faces'],
})

class ProjectManager extends Instructor{
  constructor(attributes){
      super(attributes);
      this.gradClassName = attributes.gradClassName;
      this.favInstructor = attributes.favInstructor
  }
  standUp(name, channel){
      return `${this.name} announces to ${channel}, "@channel, standy times!​​​​​"`;
  }
  debugsCode(name, student, subject){
      return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}
const tyrion = new ProjectManager({
  name: 'Tyrion',
  age: '25',
  location: 'Dragonstone',
  specialty: 'drinking and knowing things',
  favLanguage: 'anything other than Valyrian',
  catchPhrase: 'I drink and I know things',
  gradClassName: 'BreakTheWheel',
  favInstructor: 'definetly not Cersei, so Daenerys I guess?'
})

const missandei = new ProjectManager({
  name: 'Missandei',
  age: '23',
  location: 'wherever Daenerys is',
  specialty: 'languages',
  favLanguage: 'all of them',
  catchPhrase: 'You stand in the presence of Daenerys Stormborn of House Targaryen, rightful heir to the Iron Throne, rightful Queen of the Andals and the First Men, Protector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains.',
  gradClassName: 'BreakTheWheel',
  favInstructor: 'Daenerys'
})

const sam = new ProjectManager({
  name: 'Samwell',
  age: '23',
  location: 'wherever Jon Snow is',
  specialty: 'reading',
  favLanguage: '',
  catchPhrase: 'It is a bit nippy',
  gradClassName: 'Jon4king',
  favInstructor: 'Jon'
})

console.log(daenerys.speak());
console.log(daenerys.demo());
console.log(daenerys.grade(ygritte, ygritte.favSubjects[1]));

console.log(cersei.speak());
console.log(cersei.demo());
console.log(cersei.grade(jaqen, jaqen.favSubjects[1]));

console.log(jon.speak());
console.log(jon.demo());
console.log(jon.grade(hodor, hodor.favSubjects[1]));

console.log(ygritte.speak());
console.log(ygritte.listSubjects());
console.log(ygritte.PRAssignment());
console.log(ygritte.sprintChallenge());

console.log(hodor.speak());
console.log(hodor.listSubjects());
console.log(hodor.PRAssignment());
console.log(hodor.sprintChallenge());

console.log(jaqen.speak());
console.log(jaqen.listSubjects());
console.log(jaqen.PRAssignment());
console.log(jaqen.sprintChallenge());

console.log(tyrion.speak());
console.log(tyrion.demo());
console.log(tyrion.grade(jaqen, jaqen.favSubjects[1]));
console.log(tyrion.standUp(tyrion, 'the dragons'));
console.log(tyrion.debugsCode(tyrion, hodor, hodor.favSubjects[0]));

console.log(missandei.speak());
console.log(missandei.demo());
console.log(missandei.grade(hodor, hodor.favSubjects[1]));
console.log(missandei.standUp(missandei, 'the Unsullied'));
console.log(missandei.debugsCode(missandei, ygritte, ygritte.favSubjects[0]));

console.log(sam.speak());
console.log(sam.demo());
console.log(sam.grade(ygritte, ygritte.favSubjects[1]));
console.log(sam.standUp(sam, 'the Maesters'));
console.log(sam.debugsCode(sam, jaqen, jaqen.favSubjects[0]));