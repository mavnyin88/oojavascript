$(document).ready(function(){

console.log("*** OBJECT LITERALS ***");
console.log("\n");
function blink(){
	$(".blinker").fadeOut(500)
	$('.blinker').fadeIn(500)
}

setInterval(blink,1300);

// object literal

var SouthPark = {
	showName: "South Park",
	showTime: "10:00 PM",
	showChannel: "Comedy Central",
	showRating: "PG-13",
	printAll: function (){
		console.log("Below is the printed function SouthPark.printAll() method call:");
		console.log("	"+this.showName +", "+this.showTime +", "+this.showChannel +", "+this.showRating);
	}
}

console.log("SouthPark.showName: "+SouthPark.showName);
console.log("SouthPark.showTime: "+SouthPark.showTime);
console.log("SouthPark.showRating: "+SouthPark.showRating);
SouthPark.printAll();

//object constructor
console.log("\n");
console.log("*** OBJECT CONSTRUCTORS ***");
console.log("\n");

function TelevisionChannel(stationChannelName,stationChannelNumber,showName,showTime,showRating){
	this.stationChannelName = stationChannelName;
	this.stationChannelNumber = stationChannelNumber;
	this.showName = showName;
	this.showTime = showTime;
	this.showRating = showRating;
	this.printInfo = function(){
		console.log("	"+this.stationChannelName+", "+this.stationChannelNumber+", "+this.showName+", "+this.showTime+", "+this.showRating);
	}
}

// two instances of object TelevisionChannel 

var ESPN = new TelevisionChannel("ESPN","28","Sports Center","8:00 PM","G");
console.log("Below is the printed attribute of ESPN.showName");
console.log("	"+ESPN.showName);
console.log("Below is the printed ESPN.printInfo() method call:");
ESPN.printInfo();

var MTV = new TelevisionChannel("MTV","20","Music Video Countdown","3:00 PM","PG");
console.log("Below is the printed attribute of MTV.showTime");
console.log("	"+MTV.showTime);
console.log("Below is the printed MTV.printInfo() method call:");
MTV.printInfo();

//object constructor

function room(roomNumber,amountoFPeople){
	this.roomNumber = roomNumber;
	this.amountoFPeople = amountoFPeople;
	this.tellUs = function() {
		return "You are in room " + this.roomNumber + " with " + this.amountoFPeople +" people";
	};
}

// instance of object room

var newRoom = new room(247,22);
console.log(newRoom.roomNumber);
console.log(newRoom.amountoFPeople);
console.log(newRoom.tellUs());

// Prototypes

console.log("\n");
console.log("*** PROTOTYPES ***");
console.log("\n");

TelevisionChannel.prototype.whatChannelAndTime = function(){
	return "Channel: "+this.stationChannelNumber+" and Show time: "+this.showTime;
}

console.log(ESPN.whatChannelAndTime());

room.prototype.wifiEnabeled = true;
var anotherRoom = new room(401,10);
newRoom.wifiEnabeled = false;

console.log(newRoom.wifiEnabeled);
console.log(anotherRoom.wifiEnabeled);

// Prototypical Objects

function Birds(type,color){
	this.type = type;
	this.color = color;
}

function Mammal(){
	this.mammal = true;
	Birds.apply(this, arguments);
}

Mammal.prototype = new Birds();

var myM = new Mammal("Eagle","Black");

console.log(myM.type);
console.log(myM.color);
console.log(myM.mammal);

function apartments(floorNumbers,aptNumbers,vacantApts){
	this.floorNumbers = floorNumbers;
	this.aptNumbers = aptNumbers;
	this.vacantApts = vacantApts;
	this.printApt = function(){
		return this.floorNumbers+", "+this.aptNumbers+", "+this.vacantApts;
	}
}

function building(){
	apartments.apply(this,arguments); 
}

var TheHeritage = new building(6,60,2);
console.log(TheHeritage.printApt());

// part 2 Write a method that lists the properties of a JavaScript object. (Hint: loops!)
function getKeys(){
	var keys = [];
	for(var i in SouthPark){
		keys.push(i);
	}
	console.log(keys);
	for(var i in keys){
		console.log(keys[i]);
	}
}

getKeys();

// part 3 Create an object called Multiplier with two methods: multiply and getCurrentValue

var currentValue = 1;
var Multiplier = {
	multiply: function(num){
	currentValue = num*currentValue;
	},
	getCurrentValue: function(){
		return currentValue;
	}

}

Multiplier.multiply(7);
console.log("7 * 1 = "+Multiplier.getCurrentValue());
Multiplier.multiply(3);
console.log("7 * 3 = "+Multiplier.getCurrentValue());
Multiplier.multiply(2);
console.log("21 * 2 = "+Multiplier.getCurrentValue());


function Multiplier(){

}




}) // end document ready