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
	this.printStudent = function(){
		return "STUDENT INFORMATION: First_Name: "+this.fName+", Last_Name: "+this.lName+", Address: "+this.address+", City: "+this.city+
				", State: "+this.state+", Zip: "+this.zip+", Major: "+this.major+", GPA: "+this.gpa+", Year_Rank: "+this.yearRank;
	}

}
Student.prototype = new Person;

function Teacher(gender,race,age,fName,lName,subject){
	Person.call(this,gender,race,age);
	this.fName = fName;
	this.lName = lName;
	this.subject = subject;
	this.printTeacher = function(){
		return "TEACHER INFORMATION: First_Name: "+this.fName + ", Last_Name: "+this.lName+
						", Gender: "+this.gender+", Race: "+this.race+", Subject: "+this.subject;
	}

}
Teacher.prototype = new Person;

function School(schoolName){
	this.schoolName = schoolName;
	this.teacherArray = [];
	this.studentArray = [];
	this.addTeacher = function(newTeacher){
		this.teacherArray.push(newTeacher);	
	}
	this.addStudent = function(newStudent){
		this.studentArray.push(newStudent);
	}
}

var Teacher_Ms_Yerman = new Teacher("Female","Black",32,"Nicole","Yerman","Math");
var Teacher_Mr_Chase = new Teacher("Male","Caucasian",40,"Vincent","Chase","Computer Science");
console.log(Teacher_Ms_Yerman.fName);
console.log(Teacher_Ms_Yerman.subject);
console.log(Teacher_Ms_Yerman.gender); 
console.log(Teacher_Ms_Yerman.printTeacher());

var Student_Mark_Knovia = new Student("Male","White",20,"Mark","Knovia","88 Dart St.","Howard Beach","NY","11414","Computer Science",3.7,"Freshman");
var Student_Claire_Mari = new Student("Female","Asian",19,"Claire","Mari","77 Great Neck Road","Great Neck","NY","11232","English",3.23,"Junior");
console.log(Student_Mark_Knovia.gender+" "+Student_Mark_Knovia.age);
console.log(Student_Mark_Knovia.major);
console.log(Student_Claire_Mari.printStudent());

var queensCollege = new School("Queens College");
var brooklynCollege = new School("Brooklyn College");
console.log(queensCollege.schoolName);
queensCollege.addTeacher(Teacher_Ms_Yerman);
queensCollege.addStudent(Student_Mark_Knovia);
queensCollege.addStudent(Student_Claire_Mari);
brooklynCollege.addTeacher(Teacher_Mr_Chase);
console.log(queensCollege.teacherArray[0].fName);
console.log(queensCollege.studentArray[0].gender+" "+queensCollege.studentArray[0].address);
console.log(queensCollege.studentArray[0].printStudent());
console.log(queensCollege.studentArray[1].printStudent());
console.log(brooklynCollege.teacherArray[0].printTeacher());
// School.addTeacher(Teacher_Ms_Yerman);
// console.log("Anything?"+teacherArray[0]);


// function checker(){
// 	if(typeof === Teacher){
// 		console.log("Im a teacher");
// 	}
// 	else if(typeof === Student){
// 		console.log("Im a student");
// 	}
// }


})