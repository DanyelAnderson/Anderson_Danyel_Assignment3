//alert("JavaScript works!");

//Danyel Anderson
// SDI 1412
// Assignment 3
// GamePlay


// global variables
var characterRaces = [  "Tauren", "NightElf", "Orc", "Human", "Goblin", "Gnome" ];
var characterGender = [ "Male", "Female"];
var maxLevel = 100;
var playedBefore = true;
var yes = true;


//============================================================


//Alert
console.log ("Welcome! Prepare to start your new adventure!");


//=============================================================

// JSON Document


var jsonData = {
	
	"classSpecs":
	      [
		         {
					 "classOption": "Paladin",
					 "specialMove": "LightFury",
					 "armor":       "Plate",
					 "hitPower":    "90"
				 },
				 {
					 "classOption":  "Druid",
					 "specialMove":  "LifeSteal",
					 "armor":        "Leather",
					 "hitPower":     "75"
				 },
				 {   "classOption":   "Mage",
				     "specialMove":   "Curse",
					 "armor":         "Cloth",
					 "hitPower":      "85"
				 }
			]
	
}
console.log(" What class will you choose this time to fight with? ");

var myJSON = function() {

	
	for (var key in jsonData.classSpecs) {
		
		for (var newKey in jsonData.classSpecs[key]) {
		
			
			if (jsonData.classSpecs[key][newKey] == "Paladin") {
				console.log(" I choose Paladin!");
				
				
				
			}
		}
		
	}
	
	
	
};




myJSON();



//==============================================================

//Functions


//ArrayFunction

var arrayFunction = function (characterRaces) {
	var raceLength = characterRaces.length;
	
	console.log ( "You have " + characterRaces.length + " races to choose from.")
	
	console.log ( "You can choose from " + characterRaces + " to be your race."  );
    for ( var i = 0; i <  raceLength; i++ ){
		
        if (characterRaces [i] === "Tauren"){
			
			console.log ( characterRaces[i] + " is for the Horde.");
			
		
		} else {
			
			console.log ( characterRaces [i++] + " is for the Alliance.");
			 
			
		};
		
	};


};

arrayFunction(characterRaces);


//Procedure Function
var readyToBegin = function( yes ) { //conditional
	if (yes === true ) {
		console.log ("Let's Begin!");
		
	} else { 
	  console.log ( " We shall play later!");
	  
	}
};




// Boolean Function

console.log ("It seems we have and experienced player here.");
      
	var experience = function (played, skills) {
		if ( played > 3 ) {
			if (skills === "great") { //nested conditional
			console.log (" This will be easy to go through.");
			return true;
			
		}else{
			console.log("We should take our time and pay attention. ");
			return true;
			
		}
	}
	else if ( played > 1 || skills === " We should go through the tutorial.") {
		return true;
	
	}else{
		  return false;
		  
	}
};
		
//Function with argument/return

var gear = function ( helm, chest, weapon) {
	var gearSpecs = {
		head : helm,
		top: chest,
		hand: weapon,
	};
	return gearSpecs
};





//Number Function
	var startingLevel = 0;
	var endingLevel = 100;
	while (startingLevel <= 100 ) {
		console.log ( startingLevel + " levels down " + endingLevel + " levels until 100.");
		
		startingLevel = startingLevel +1;
		endingLevel = endingLevel -1;
	   };

console.log (" All levels have been completed at now the real fun can begin. "  );
			
			










//=============================================================


//=============================================================	 
//Main Code





