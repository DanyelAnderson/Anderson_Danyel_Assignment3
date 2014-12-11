alert("JavaScript works!");

//Danyel Anderson
// SDI 1412
// Assignment 3
// GamePlay


// global variables
var characterRaces = [ "NightElf", "Tauren", "Human", "Orc", "Goblin" ];
var characterGender = [ "Male", "Female"];
var maxLevel = 100;

console.log ("Welcome! Prepare to start your new adventure!");


//functions
var arrayFunction = function (argArray) {
	var raceLength = argArray.length;
	
	console.log ( "You can choose from " + argArray + " to be your race."  );
    for ( var i = 0; i <  raceLength; i++ ){
		
        }
}









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




//=============================================================	 
//Main Code
arrayFunction(characterRaces);
