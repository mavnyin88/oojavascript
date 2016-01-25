$(document).ready(function(){

	function Album(albumName){
		this.albumName = albumName;
		this.albumArray = [];
		var counter = 0;
		this.addNewPhoto = function(photo){
			this.albumArray.push(photo);
			counter++;
		}
		this.listAllPhotos = function(){
			console.log("Album Name: "+this.albumName);
			for(var i = 0; i < this.albumArray.length; i++){
				console.log("File Name: "+this.albumArray[i].fileName+"\n");
				console.log("File Location: "+this.albumArray[i].photoLocation+'\n');
				console.log("File Index: "+i+'\n');
				console.log("\n");
			}
		}
	}
	

	function Photo(fileName,photoLocation){
		this.fileName = fileName;
		this.photoLocation = photoLocation;
	}

	var myPhoto = new Photo("me.jpg","New York");
	var myPhoto2 = new Photo("meAndDad.png","Orlando");
	var myAlbum = new Album("My General Picture Album");
	var photo1 = new Photo("er23.jpeg","Los Angeles");
	var photo2 = new Photo("ever-green.jpeg","Upstate New York");
	var photo3 = new Photo("blue-skies.png","Long BeacH Island, NJ")
	var myAlbum2 = new Album("My Photography Album");

	myAlbum.addNewPhoto(myPhoto);
	myAlbum.addNewPhoto(myPhoto2);
	myAlbum2.addNewPhoto(photo1);
	myAlbum2.addNewPhoto(photo2);
	myAlbum2.addNewPhoto(photo3);

	myAlbum.listAllPhotos();
	myAlbum2.listAllPhotos();

})