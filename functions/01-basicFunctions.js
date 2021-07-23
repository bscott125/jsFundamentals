/*
   FUNCTIONS

	Functions are processes that we call upon to run an action. They
	can do the following:
	   - Take in an input to process, modify, or respond to (not required)
		 - Return a value (not required)
		 - Can be invoked (or called) as often as needed
*/
 

  //1     (2)
function hi() {
	// (3)
  console.log('Hi!');
	// 1. function keyword - we use this to define a function
	// 2. name of the function, followed by parenthesis - this is how we will call the function
	// 3. code goes here - this will be the "brains" of the function
}

// CALL THE FUNCTION
// a.k.a putting the "fun in fuction"
// in order to invoke (call) a function, we will simply write it's name and put parenthesis after it
hi()
/* When we console.log function, javascript will first evaluate the function, meaning it will run all
of the code and look for a value from it. If we do not have a return statement within the function,
we will get back undefined.
*/

let myName = 'Jerome';
//RECURSION is calling a function within itself
function myNameCap() {
	myName = myName.toUpperCase();

	hi()
}

myNameCap();

console.log(myName)

// function without comments 
function hi() {
	console.log('Hi!');
	}
	hi()
	
	let myName = 'Jerome';
	
	function myNameCap() {
	myName = myName.toUpperCase();
	hi()
	}
	
	myNameCap();
	console.log(myName)

	/*
    FUNCTION DECLARATION

		a chunk of code that performs a set chunk of code when it is invoked (or called)
	*/

	function funcOne() {
		console.log('This is the code that we run in function one');
	}

	funcOne(); // we invoke (or call) a function by writing it's declared name followed by parenthesis

	/*
    FUNCTION EXPRESSIONS

		assigning a function to a varible is what we call an expression
	*/
              //keyword
	let first = function funcTwo() {
    console.log('Code being run in the function expression');
	}

	first();

	let example = function() {
		console.log('What is my name?');
	}

	example();

/*
   ANONYMOUS FUNCTIONS

	 anonymous functions are stored in memory but the runtime does not automatically create
	 a reference to it.

	 the main use would be to pass these functions through another functions. Maybe have a ternary
	 where if something is true we run one function, else we run a different function
*/


  // Common use would be to assign these to a varible
  let anon = function() {
		console.log('Anonymous Function');
	}

	anon();
 //Example of writing anonymous function
 true || false ? function() { console.log('true') } :
 function() { console.log('false') }

 /*
  PARAMETERS

	we will be using functions to pass in information and return a result

	parameters will allow our functions to take in outside information
 */

 function parametersFunc(num) {
	 console.log(num + 1);
	 return num + 5; // sends back a value for the function when it is run
 }

 //return will essentially set the function = to something

 //parametersFunc(7); //prints 7
 //parametersFunc('bruce'); //prints bruce
 //parametersFunc('another test'); // prints another test
 //parametersFunc([1,2,3,4,5]); // prints array 1,2,3,4,5]

 let returnTest = 5;
 parametersFunc(returnTest); //6
 console.log(parameters(returnTest)) //10


 
 function parametersFunc(num) {
	console.log(num + 1);
	return num + 5;
 }
	let returnTest = 5;
	let myReturn = parametersFunc(returnTest);
	console.log('Return: ', myReturn); //RETURN: 10

	
	
	let firstName = 'Jane';
	let lastName = 'Doe';

	function greeting(first, last) {
		console.log(`Hi, ${first}! Welcome back!`);
		console.log(`This is the first parameter: ${first}`);
    console.log(`This is the last parameter: ${last}`);
	}

	greeting(firstName, lastName);