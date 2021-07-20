/*
What is a variable?

Varibles are named containers for sorting data.
We can think of these containers as resources we can call upon later. Each
varible alloes us to store data, which could be a value or a function, that
we will want to reference back to.

*/

let a = 2;

/*
-"let" is a keyword
-"a" is our NAME of our varible.
-"=" is our assignment operator.
-"2" is our varible's value.
*/

let b = 1;

console.log(a + b); // We would get 3

/*
Restrictions with variables

- a varible must begin with a letter, underscore, or dollar sign.
- number may follow the above characters, but cannot come first in the name.
- Javascript is case sensitive- 'hello' and "Hello" are different varibles.
- no spaces are allowed in varible names
- camelCase is best practice for naming a varible in js. This will help keep names of varibles 
readable
    ex: 
		   let myName = 'Jerome';
			 is easier to read than
			 let myname = 'Jerome';

*/

let startingWithLetter = 'test';
let _startingWithUnderscore = 'test';
let $startingWithDollarSign = 'test';
// let 5startingWithNumber = 'Breaks'; // CANNOT start a varible name with a number
// let -startingWithDash = 'breaks'; // cannot start with a -
console.log(startingWithLetter, _startingWithUnderscore, $startingWithDollarSign)

// ctrl + alt + n will run code runner (windows)

/* 
KEYWORDS

var, let, const

-var: the 'old' keyword for varibles. We will not use this much but it is still used depending on the project and when it was made. 
we will focus on let and const. 

-let: which is the new keyword for varibles which was introduced in ES6 *newest version of ECMAScript, which is a standardization of 
JS

-const: also 'new' and declares an unchangeable, or constant, varible. The only limit to const varibles is that once they
are declared/assigned their value will NEVER change.

*/

var Variable = 'var variable';
let letVariable = 'let varible';
const constVariable = 'const varible';

/* 
Declarations are the LEFT SIDE of the assignment operator (=) within a variable
-let x

Initializations are the RIGHT SIDE of the assignment operator (=)
and sets the value of the variable
let x = 10

10 would be the initializations
*/