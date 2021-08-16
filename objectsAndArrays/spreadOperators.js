/*
  SPREAD OPERATOR
*/

const nameOne = ['Summer', 'Jerome'];
const nameTwo = ['Adam', 'Hustin'];
const copiedNames = ['Levi', nameOne, nameTwo];
// console.log(copiedNames);


const copiedNamesSpread = ['Levi', ...nameOne, ...nameTwo];
nameOne.unshift('Justin');
console.log('Altered:', nameOne, 'Spread:', copiedNamesSpread);

// cannot use spread operator on it's own
// ...nameTwo


//console.log(['Adam', 'Hustin'])
console.log(nameTwo)
//console.log(['Adam', 'Hustin'])
console.log(...nameTwo)

/*
    ...numbers
*/

console.log(Math.min(1, 5 ,-3)) // prints -3 lowest number out of these

const prices = [10.99, 5.99, 3.50, 2.49, 5.49];
console.log(Math.min(...prices)) // prints the lowest number which is 2.49

const persons = [
	{
		name: 'John Wick',
		enemies: true
	},
	{
		name: 'Neo',
		enemies: true
	}
];

const copiedPersons = persons;

persons.push({ name: 'Bill and Ted', enemies: false })
console.log('original:', persons, 'copy:', copiedPersons)

/*
    -primitive variables = primitive value
		let x = 10
		let y = 'abc'
		let z = null

		variables       values
		x                10
		y                'abc'
		z                null
  ---------------------------------------------------------------------
		let x = 10
		let y = 'abc'

		let a = x
		let b = y

		console.log(x,y,a,b) -> 10, 'abc', 10, 'abc'

   a = 5
	 b = 'xyz'
*/
// ^same code above and below

let x = 10
		let y = 'abc'

		let a = x
		let b = y

		console.log(x,y,a,b) //-> 10, 'abc', 10, 'abc'

   a = 5
	 b = 'xyz'

	console.log(x, y, a, b)//->10, 'abc', 5, 'xyz'


/*
   - 3 Data Types that are passed by reference:
	  - Array
		-Function
		-Objects
		   *all 3 are technically objects

	-non primitive varibles are given a reference to the value they "contain"
	-this reference "points" to a location in memory 
	-------------------------------------------------------------------------------------------
  let arr = []
  arr.push(1)

 VARIBLES      VALUES     ADDRESS     OBJECT
 arr          <#001>       #001         []
 arr          <#001>       #001         [1]
---------------------------------------------------------------------------------------------

let reference = [1]
let refCopy = reference


 VARIBLES      VALUES     ADDRESS     OBJECT
 reference     <#001>       #001         []
  refCopy      <#001>
*/

let reference = [1]
let refCopy = reference

reference.push(2)
refCopy.push(3)
console.log(reference, refCopy) //prints [1,2,3]



const persons = [
	{
		name: 'John Wick',
		enemies: true
	},
	{
		name: 'Neo',
		enemies: true
	}
];

const copiedPersons = [...persons]; //putting it in an array with the ...spread operator-creates a new array

persons.push({ name: 'Bill and Ted', enemies: false })

copiedPersons[0].name = 'Birdperson'
console.log('original:', persons, 'copy:', copiedPersons)

/*
  ... & avoiding changing both the original and copied array
*/

const comics = [
	{
		title: 'Spider-Man',
		year: 1962
	},
	{
		title: 'Detective Comics',
		year: 1939
  }
];

const copiedComics = comics.map(comic => ({
	title: comic.title,
	year: comic.year
}))

comics.push({ title: 'Calvin and Hobbes', year: 1985 })
copiedComics[1].title = 'Detective Comics #27';

console.log('OR:', comics, 'CP:', copiedComics);

