/*
 ARROW FUCTIONS

 arrow functions are expressional functions that can be simplified into
 one of the two forms: Concise body and Block body. The main goal is to
 generate shorter syntax for writing a function.
*/

//Regular Function
function regFunc() {
	console.log('just a regular function');
}

regFunc();

// ARROW FUNCTION
//     (1)    (2) (3)     (4)
let arrowFunc = () => console.log('function in one line');
arrowFunc();

/*
  1: A variable created to hold the value of our anonymous arrow function
	   - Arrow functions are ALWAYS anonymous.
	2: Parameters are still capable of being added 
	   - Parameters go i the () as they would with a normal function,
		 BUT if we only have 1, no more or less, parmameter, we do not need ().
		 If we have no parameters we are still required to put ().

  3: "How we see an arrow". This is JS syntax that says we are about to process a function.
	4: The code the arrrow function will run, or execute. i.e. "Do this"
*/

let arrow = (x) => console.log(x);
arrow(10);//prints 10

// CONCISE vs BLOCK BODY

// CONCISE BODY
/* When we have a simple return, or response, from our arrow function, it makes sense to write
it in a concise, simplified way. When we use a concise body arrow function, the "return" statement
is implied (meaning we do not have to write it) */

                   // return x + y
                   // implied return
let conciseBody = (x,y) => x + y;
let result = conciseBody(1,2);// return sets conciseBody(1,2) = 3
console.log(result);


let slightlyComplexConcise = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) :
console.log(`${x} and ${y} are where we want them`)

slightlyComplexConcise(3,1);
slightlyComplexConcise(2,1);

//BLOCK BODY
/* the 'return' keyword IS required. We will include curly braces.
Sometimes it will make sense to use block body if we need to do
multiple lines of code*/

let blockArrow = (x,y) => {
	return `${x} and ${y} are in a block body function`
}

console.log(blockArrow(1,2));


//console.log tells us
//return tells the computer

let blockArrow = (x,y) => {
	return `${x} and ${y} are in a block body function`
}
//A varible holds the stored value
let blockResponse = blockArrow(1,2);
console.log('RESPONSE: ' ,blockResponse);


//CHALLENGE Rewite the function to a concise body
let hero = 'Robin Hood';
let nock = 1;

function shot(x,y) {
	 y < 3 ? console.log(`${x} only shot ${} arrow...`) :
	 console.log(`${x} shot ${y} arrows at the target!`);
};

shot(hero,nock);

let hero = 'Robin Hood';
let nock = 1;

let shot = (x, y) => y < 3 ? console.log(`${x} only shot ${y} arrow...`) : 
console.log(`${x} shot ${y} arrows at the target!`);

shot(hero,nock);

/* Using a block body arrow function, pass the same varible but increase the number of shots
until the second console.log is printed*/

let hero = 'Robin Hood';
let nock = 1;

let shoot = (x,y) => {

	for(y; y <= 3; y++){
	if(y < 3){
		console.log(`${x} only shot ${y} arrow...`)
} else {
  console.log(`${x} shot ${y} arrows at the target!`)};
};
}
shoot(hero, nock);

for(let i = 0; i <= 100; i++){
	if(i % 24 == 0) {
	console.log('Fizz Buzz')}
	else if(i % 6 == 0){
	console.log('Fizz')}
	else if(i % 8 == 0){
	console.log('Buzz')}
	else {
		console.log(i)
 }
}


function translatePigLatin(str) {
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	let newStr = "";

	if (vowels.indexOf(str[0]) > -1) {
			newStr = str + "way";
			return newStr;
	} else {
			let firstMatch = str.match(/[aeiou]/g) || 0;
			let vowel = str.indexOf(firstMatch[0]);
			newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
			return newStr;
	}
}
console.log(translatePigLatin());