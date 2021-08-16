/*
  ARRAY DESTRUCTURING

	- allows us to "unpack" values from arrays or properties from objects
	- similar syntax to array literals BUT is on the left side of the assignment operator
	-this will define what values to unpack
	-great for pulling information out of an array/object and assigning that data to it's own variable
*/

const boardGames = ['Catan', 'Monopoly', 'Clue']
// console.log(boardGames[0])

//array destructuring syntax
//position of the index is what's important when using destructuring
const [gameOne, gameTwo, gameThree] = boardGames;
console.log(gameOne);  // prints Catan
console.log(gameTwo);// prints Monopoly
// if I don't define gameThree, it will ignore the value
console.log(gameThree);


/*
 REST OPERATOR
  
 -using the rest operator will look almost exactly like using the spread operator

 -Spread expands an array into it's elements
 -Rest collects multiple elements defined using array destructuring
*/

const hitchhikersGuide = ['Arthur Dent', 'Trillian', 'Babel Fish', {
	day: 'Thursday', answer: 42}]

	let [charOne, charTwo, ...otherInfo] = hitchhikersGuide;
	console.log(charOne);
	console.log(charTwo);
	console.log(otherInfo);

const harryPotter = ['Snape', 'Moaning Myrtle', 'Harry', 'Ron', 'Hermione', 'Dumbledore'];

let [, , ...thirdName] = harryPotter

console.log(thirdName);

/*
   Object Destructuring
*/

const game = {
	title: 'Legend of Zelda',
	developer: 'Nintendo',
	platforms: ['Nintendo Switch', 'Wii U']
}

const {title, platforms} = game;
console.log(title);
console.log(platforms)

const games = [
	{
	title: 'Legend of Zelda',
	developer: 'Nintendo',
	platforms: ['Nintendo Switch', 'Wii U']
  },
	{
	title: 'Bloodborne',
	developer: 'From Software',
	platforms: ['PS4']
	},
	{
	title: 'Stardom Valley',
	developer: 'ConcernedApe',
	platforms: ['Pc', 'macOS', 'Linux', 'PS4', 'Xbox One']
	}
]

const [{title: gameOne, developer: devOne}, gameTwo, {title: gameThree}] = games;
console.log(gameOne, devOne);
console.log(gameTwo);
console.log(gameThree);



const games = [
	{
	title: 'Legend of Zelda',
	developer: 'Nintendo',
	platforms: ['Nintendo Switch', 'Wii U']
  },
	{
	title: 'Bloodborne',
	developer: 'From Software',
	platforms: ['PS4']
	},
	{
	title: 'Stardom Valley',
	developer: 'ConcernedApe',
	platforms: ['Pc', 'macOS', 'Linux', 'PS4', 'Xbox One']
	}
]

for({title, developer} of games){
	console.log(`${title} is developed by ${developer}`);
}
