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








//==============================================================

//functions

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




// Boolean Function

console.log ("It seems we have and experienced player here.");
      
	  var playerSkilled = {
		  skills : function ( playedBefore ){
			  if( playedBefore > 1 ){
				  var skilled = true
				  return skilled;
			  }else{
				  var unSkilled = false
				  return unskilled;
			  }
	   }
};
	
console.log ( " I have played this game it is " + playerSkilled.skills (3) + "  ,and I know my way around a little bit. ")






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
arrayFunction(characterRaces);
var myJSON = function() {}

