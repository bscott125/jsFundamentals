//LOOPS 
/*
Loops allow us to go over a block of information or code in  determined 
amount of cycles. It's important to note that it is possible for us to write code without declaring an endpoint.

Loops help us repeat a process without writing alot of code.
*/


/*
STUCTURE

We have to setup our loops in a way that we can:
1) See where we are in a loop
2) Consider what sort of condition we want to run it against
3) Note when we are done with that condition and move on to the next iteration.

We need to:
    1)Create an Index
		2) Run a condition
		3) Change to the indexing varible (execution of condition)
*/

//Let's count to 10:

for (let i = 0; i <= 10; i++){
	console.log(i);
}

/*
We state our loop with a "for". Within this function, we are injecting some parameters 
that JS will run against. index; condition, change index -> result

Within parameters, we are stating our index declaration to 0. This is our baseline.
We move on to asking if that varible is less than or equal to the number 10, take that
set number and add 1 to it. Once that is processed, return that value (in this case "console.log
of that number"). Once our condition is met, we return a FALSE which ends our loop.

This is important to note:
for(<create an index varible); <run condition>; <change index> {
	<return results>
	<cont. until the condition is met>
}
*/

/*If we don't indicate what our condition is, the loop will not have a finish line
and thus run until we have to force close it */

//INFINITE LOOP

for(let i = 0; i++) {
	 console.log(i);
}

/* No condition means that JS doesn't know when to stop and we'll never assume
that information */

for(let i = 2; i > -10; i-= 4){
	console.log(i);
}

/* We aren't limited by psitive or negative numbers. We can cycle through
varibles assigned with strings.
*/

let word = "super";

for(let b = 0; b < word.length; b++){
	  // .length is a method we can use in JS that helps us determine a value we may not know.
		console.log(b, word[b]);

	 // 1) We set of each index and are displaying that.
	 /* 2) We set to display the value within the "object" of word. Each character that is assigned to
	 the varible of "word" is provided an index value and this is how we are cycling through it.*/
	 console.log(`The letter ${word[b]} is in position: ${b}`);
}

/*
  FOR IN LOOPS

	For Loops, we are seeking an index value and running it against a condition. In Loops do not require
	an index number.
*/

let city = {
	name: 'Indianapolis',
	population: 87700,
	speedway: true
}

// info(we can call in whatever we want) 
for(info in city){
	 console.log(info);
	 console.log(city[info])
}

/*
  for(varible in object){
		run code
	}
*/

//            0       1       2        3         4
let list = ['milk', 'eggs', 'meat', 'bread', 'bananas'];
/* let list = {
	0: 'milk'
	1: 'eggs',
	2: 'meat',
	3: 'bread'
	4: 'ban
}
*/

for (item in list){
	console.log(list[item]);
}


/*CHALLENGE
Write a for loop that loops over name, and will capitalize the first letter, and
make all other letters lowercase
*/
let myName = 'dwiGht';

let propCase;
// i is for index
for (let i = 0; i <= myName.length -1; i++){
	// code here //you can put any code below, in this case
	//	console.log(myName[i])

	if(i === 0){
	propCase = myName[i].toUpperCase(); // propCase = 'D'
 } else {
	 
	 propCase += myName[i].toLowerCase(); // 'D' + 'w' = 'Dw'
 }
}

console.log(propCase);

// FOR IN VERSION
let myName = 'dwIght';

let propCase;

for(index in myName){
	 index == 0 ? propCase = myName[index].toUpperCase() : propCase += myName[index].toLowerCase();
}

console.log(propCase);


/*
  FOR OF LOOP

	In order to run a for of loop, the 'thing' must be numbered like an array
*/
// ERROR
// let myObject = {
// string: 'Peter',
//	 boolean: true,
//	number: 1
//};

//for(item of myObject) {
//	console.log(item);
//}

let indexArray = ['spot 1', 2, true, 'not fifth'];

for(let pos of indexArray){
	console.log(pos, 'was run through a "for of" loop')
}

/*
  for(varibles of iterable) {
		code goes here
	}
   
	 *an iterable is something that has numbers assigned to it like an array,
	 where the first item is assigne a 0, the second a 1, and so on...[eg. Arrays, Strings]
	*/

	let officeCharacters = ['Dwight', 'Michael', 'Jim', 'Stanley', 'Pam'];

	for(worker of officeCharacters) {
		if(worker === 'Dwight' || worker === 'Michael'){
		console.log(worker, 'works in the office');
	}
}


/* 
CHALLENGE

Write a for loop that counts from 1 to 100
   -for numbers that are evenly divisable by 3, print: 'FIZZ'
	 -for numbers that are evenly divisable by 5, print: 'BUZZ'
	 -for numbers that are evenly divisable by BOTH 3 and 5, print: 'FIZZ BUZZ'

reminder: a number is evenly divisable by another number when the remainder is 0
*/

for(let i = 0; i <= 100; i++){
	console.log(i);
   if(i % 3 == 0)
		 console.log('FIZZ');
	 if(i % 5 == 0)
	 console.log('BUZZ');
} 

//or Jerome's way

for(let i = 1; i <= 100; i++){
	if(i % 15 == 0){
		console.log("FIZZ BUZZ")
} else if(i % 3 == 0){
	console.log('FIZZ')
} else if(i % 5 == 0){
	console.log('BUZZ')
} else {
	console.log(i)
}
}
