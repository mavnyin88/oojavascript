
// function Student(fName,lName){ //,address,city,state,zip,age,major,gpa){
// 	this.fName = fName;
// 	this.lName = lName;
// 	// this.address = address;
// 	// this.city = city;
// 	// this.state = state;
// 	// this.zip = zip;
// 	// this.age = age;
// 	// this.major = major;
// 	// this.gpa = gpa;
// }

// function Person(sex){
// 	this.sex = sex;
// 	Student.apply(this, arguments);
// }

// var newPerson = new Student("Mike","Avn");
// console.log(newPerson.lName);
// console.log(newPerson.sex);

$(document).ready(function(){

function Person(gender,race,age){
	this.gender = gender;
	this.race = race;
	this.age = age;
}

function Student(gender,race,age,fName,lName,address,city,state,zip,major,gpa,yearRank){
	Person.call(this,gender,race,age);
	this.fName = fName;
	this.lName = lName;
	this.address = address;
	this.city = city;
	this.state = state;
	this.zip = zip;
	this.major = major;
	this.gpa = gpa;
	this.yearRank = yearRank;
}
Student.prototype = new Person;

function Teacher(gender,race,age,fName,lName,subject){
	Person.call(this,gender,race,age);
	this.fName = fName;
	this.lName = lName;
	this.subject = subject;
}
Teacher.prototype = new Person;

var Teacher_Ms_Yerman = new Teacher("Female","Black",32,"Nicole","Yerman","Math");
console.log(Teacher_Ms_Yerman.fName);
console.log(Teacher_Ms_Yerman.subject);
console.log(Teacher_Ms_Yerman.gender); 

var Student_Mark_Knovia = new Student("Male","White",20,"Mark","Knovia","88 Dart St.","Howard Beach","NY","11414","Computer Science",3.7,"Freshman");
console.log(Student_Mark_Knovia.gender+" "+Student_Mark_Knovia.age);
console.log(Student_Mark_Knovia.major);

})