/*
   OBJECTS

	 - objects are used to store multiple sets of data in the key/ value pair format
	 - denoted by {}
*/

let netflix = {
// name: value
	id: 1,
	name: 'The Office',
	genre: 'Comedy',
	season1: {
		seasonInfo: {
			episodeInfo: [
				{
					episode: 1,
					episodeName: 'Pilot'
				},
				{
					episode: 2,
          episodeName: 'Diversity Day'
				},
				{
					episode: 3,
					episodeName: 'Health Care'
				},
				{
					episode: 4,
					episodeName: 'The Alliance'
				},
				{
					episode: 5,
					episodeName: 'Basketball'
				},
				{
					episode: 6,
					episodeName: 'Hot Girl'
				}
			]
		}
	}
}
console.log(`Episode ${netflix.season1.seasonInfo.episodeInfo[1].episode}:`, netflix.season1.seasonInfo.episodeInfo[1].episodeName);

console.log('Just season info:', netflix.season1.seasonInfo);
console.log('All Data:' ,netflix);
console.log(netflix.name, netflix.genre); // dot notation: when we know the name of the key/value info we want, we will use dot notati1on 

console.log('Episode 2:', netflix.season1.seasonInfo.episodeInfo[1].episodeName);

/*
   JSON OBJECTS

	   - JSON stands for JavaScript Object Notation
		 - The JSON syntax is derived from JavaScript object syntax,
		 but the JSON format is text only
		 - JSON exists as a string - useful when fetching data from a server. It needs to be translated into
		 a native JavaScript object if we want to access the data.
*/



let spaceJam = {
	toonSquad: {
			human: 'Michael Jordan',
			rabbit1: 'Bugs Bunny',
			rabbit2: 'Lola Bunny',
			duck: 'Daffy Duck',
			tDevil: 'Tasmanian Devil',
			bird: 'Tweety',
			cat: 'Sylvester',
			pig: 'Porky Pig'
	},
	monstars: {
			0: 'Bupkus',
			1: 'Bang',
			2: 'Nawt',
			3: 'Pound',
			4: 'Blanko'
	},
	nbaPlayers: {
			phoenixSuns: 'Charles Barkley',
			newJerseyNets: 'Shawn Bradley',
			newYorkNicks: 'Patrick Ewing',
			charlotteHornets1: 'Larry Johnson',
			charlotteHornets2: 'Muggsy Bogues'
	}
}

// We can use some object methods to help us gather information we might not otherwise know

// Object.keys()
console.log(Object.keys(spaceJam.toonSquad)); // Gives an array of the keys in an object

console.log(Object.keys(spaceJam.toonSquad.duck)) //Gives us the index numbers for the string 'Daffy Duck'

console.log(Object.values(spaceJam.toonSquad)); // Gives us an array with values of each key in an object

/*
   OBJECT BRACKET NOTATION
   
   - object bracket notation can allow us to find a value in an object we wouldn't be able to access using 
	 dot notation.
	 -We can also use object bracket notation to store a key in a varible and use that varible to access informtion
	 in an object
	 -this works because all key names in an object are strings
*/

let garden = {
	vegtable: 'Zucchini',
	flower: 'Orchid',
	fruit: 'Kiwi',
	water: true,
	sun: true,
	size: 10
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

//Dot notation
console.log(garden.flower);

//Square Bracket Notation
console.log(garden['fruit']);


let baking = {};
baking['zucchini'] = 'better make some bread!';
baking.bakeTime = 60;
console.log(baking);

let garden = {
	vegtable: 'Zucchini',
	flower: 'Orchid',
	fruit: 'Kiwi',
	water: true,
	sun: true,
	size: 10
}

console.log(baking[garden['vegtable']])

//Using square brackets can also be a good idea if the object's key has a space in the name

let testObj = {
	"Spaces Here": true,
	noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj['Spaces Here']);