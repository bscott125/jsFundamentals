/*
 DATA and STRUCTURE TYPES

 -Primitive Data Types
    -boolean
		-undefined
		-string
		-number
		-bigInt*
		-symbol*
		-object
		-Function
*/

/* 
   Boolean

	 A boolean has two possible values: true and false
*/

let on = true;
let off = false;

console.log(on); // returns true
console.log(off); // returns false

/*
  NULL 

	A null value is an empty value. Think of it as an empty container that has space to fill. Note:
	null and undifined are 2 different things
	 */

	/*
	  UNDEFINED

		No value has been assigned to a container and doesn't even act as an empty container
	*/

	// What's the difference between null and undefined?
	/*
	   -Null is like a container with nothing in it
		 -Undefined is a variable that has never been set, or it hasn't been created yet
	*/

  /*

	  NUMBERS

		Literally just numbers

  */
    
	/*
      STRINGS

			Strings represent text and are wrapped in either single or double quotes.
	*/

	// Numbers and strings
	let addThese = 1050 + 100;
	console.log(addThese);

	let addTHeseAlso = '1050' + '100';
	console.log(addTheseAlso);

	//We can use an operation called 'typeof' to return a string of the varible's type

	console.log(typeof addThese);

	/*
	  objects 
    
   Objects are used to store many values instead of just one.
	 COnsider them a a collection of different varibles in one container
	 denoted by curly brackets: {}
	*/

	let frodo = {
		//an object has many properties inside of it
		race: 'Hobbit' ,//string
		// name : value
		// we must sbarate properties in an object with a comma
		rings: 1, // number
    sting: true //boolean
	}

	console.log(frodo);
	console.log(typeof frodo); //returns object
	console.log(frodo.rings); // Dot notation example

	/*
	 ARRAYS
   
	Containers that hold a list of items
	denoted by square brackets: []
	all items are within the square brackets
	regardless of the data type, all items are separated by commas
	*/

	let arrayList = ['position 1', 'position 2', 'position 3'];
	console.log(arrayList);

	let anotherExample = ['muffins', 'pizza toppings', true, 17, 9007199254740992, false, null, undefined];
	console.log(anotherExample);
	console,log(anotherExample[0]); //prints muffins

	console.log(typeof anotherExample); //in js an array is an object

	/*
	  ADDITION vs CONCATENATION

		JS sees the + symbol in two different ways
		  - When we use it with numbers, it will use the built-in math functionality
			- When we use it with strings, it will ignore the math functionality and concats, or combines, the 
			two strings into one
	*/

	let strings = 'one' + ' ' + 'is a number';
	console.log(strings);

	let concatDiff = 1050 + '100';
	console.log(concatDiff);
	console.log(typeof concatDiff); //would print the object string


	let firstName = 'Brennan';
	let lastName = 'Scott';
	let houseNumber = 6103;
	let street = 'Elm Street';
	let city = 'C-Bus';
	let state = 'Indiana';
	let zipcode = 47203;

	console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode);


	/*
	  STRING: Properties
		
		properties are qualities associated with data type
		strings have properties, or qualities, associated with them
		the length of a string is a property

	*/

	let myName = 'Brennan';
	console.log(myName.length);// prints the number of characters

	/*
	  STRING: METHODS

		methods are tools that can help us manipulate data
		.property              .method() 
		no parentheses          parentheses
  */

	let myNameIs = 'Jerome';
	console.log(myNameIs.toUpperCase());

	let sent = 'This sentence will be split into individual parts ';

	const word = sent.split(' ');
console.log(word);

