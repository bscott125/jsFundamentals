/*
   CONDITIONALS

	 FALSY VALUES:
	 A falsy value is a value that is considered false when encounted in a boolean context.
	 There are 6 falsy values in JS:
	  - false
		- 0
		-"", '', ``   Any empty string
		- null
		-undefined
		- NaN (Not a number)

		What does this mean? Whenever JS is expecting a boolean value and is given one of these 6,
		it is evaluated as false

		side note: there are also Truthy values in JS, which tend to be much less limited. 
		Examples objects, strings, number:
		true
		{}
		[]
		42 (any number) 
		"false" (any non-empty string)   
		-anything that has a value
*/

/*
  IF STATEMENTS
  
  When we use comparison operators, we typically are asking if we can move on to the next
	section of code. "If" something is true, do "this thing"
*/

let light = 'on';
// keyword    expression 
if           (true) {
//code to run if the expression evaluates to true
 console.log('Truthy Test');
}

//condition
if (false) {
	console.log('Falsy Test'); //this will not print anything because the condition is false
}

let light = 'on';

if(light == 'on') {
	  console.log('The light is one');
}


let weather = 65;
let rain = true;

if(weather < 70 && rain == true){ 
  console.log('Maybe wear a jacket');
}

let batman = 'is the night';
let bruce = true;

if(batman == 'is the night' && bruce == true){ //also (batman == 'is the night' && bruce)
	console.log('Batman!');
}

/*
   IF ELSE

	 We can think of this as not only writing an answer if our condition evaluates to be true,
	 but also one if it ends up being false
*/

let today = 75;

if(today < 70){
	//            string interpolation
	console.log(`It's ${today}, wear a jacket!`);
} else {
	console.log(`It's ${today}. No jacket needed!`);
}

/*
ELSE IF

This is a condition that will be checked if the above condition was not met
*/

let cooktime = 60;

if(cooktime === 45) {
	console.log('Let us feast!');
} else if(cooktime > 45){
	console.log(`It has been ${cooktime} minutes?? It's on fire`)
} else if(cooktime >= 30) {
	console.log(`It has only been ${cooktime} miinutes. Wait another 5-15 minutes.`);
} else if(cooktime >= 20){
  console.log(`It has only been ${cooktime} minutes. Wait another 10-25 minutes.`);
} else {
	console.log(`It has only been ${cooktime} minutes. Perhaps you could at least try cooking it...`);
}

let age = 22;

if(age <=  17){
	console.log("Sorry, you're too young to do anything");
} else if(age >= 25){
	console.log('You can rent a car!');
} else if(age >= 21) {
	console.log('You can drink!');
} else if(age >= 18){
	console.log("You can vote!");
}

//or

let age = 21

if (age >= 25) {
    console.log(`You are ${age}. You can vote, drink, and rent a car!`);
} else if (age >= 21) {
    console.log(`You are ${age}. You can vote and drink!`);
} else if (age >=18) {
    console.log(`You are ${age}. You can vote!`)
} else {
    console.log("Sorry, you're too young to do anything.");
}

/*
TERNARIES

They are if/else statements but they look weird!
*/

let myName = 'Brennan';

if(myName === 'Brennan') {
	console.log(`Hi, ${myName}!`);
} else {
	console.log(`Not sure I know ${myName}`);
}

// condition ? if true : else result
//condition                     if true run this                  else run this
myName === 'Brennan' ? console.log(`Hi, ${myName}!`) : console.log(`Not sure I know ${}`);

let hero = 'Batman';
let villain = 'Mr.Freeze';

hero == 'Batman' && villain == 'Riddler' ? console.log('What has a head and a tail but no body?') : 
hero == 'Batman' && villain == 'Joker' ? console.log('Why So Serious?') : 
hero == 'Batman' && villain == 'Mr.Freeze' ? console.log('Ice to meet you!') :
console.log(`${hero} is the night`);

let lampOn = false;
let daytime = true;

lampOn == true && daytime != true ? console.log('The lamp is on during the night') :
lampOn != true && daytime != true ? console.log('The lamp is off during the night') :
lampOn == true && daytime == true ? console.log('The lamp is on during the day') :
lampOn != true && daytime == true ? console.log('The lamp is off during the day') :
console.log('What lamp');


/* SWITCH STATEMENT

The switch statement executes a block of code depending on different cases

*/

let instructor = 'Jerome';

switch(instructor) {
// if (instructor === 'Jerome') {
case 'Jerome':
	console.log(`${instructor} is a part of the Web Development Team`);
	// }
	break;
case 'Summer':
	console.log(`${instructor} is a part of the Web Development Team`);
	break;
case 'Josh':
	console.log(`${instructor} is a part of the Software Development Team`);
	break;
	// else {
default:
	console.log(`Sorry, I cannot find what ${instructor} teaches at this time`)
	// }
	break;
}

let staff = 'Jerome';

switch(staff) {
	case 'Jerome':
  case 'Summer':
	case 'Levi':
	case 'Adam':
	case 'Hustin':
	  console.log(`${staff} is a part of the Web Development Team`);
	break;
  case 'Josh':
	case 'Amanda':
	case 'Casey':
	case 'Junior':
		console.log(`${staff}is a part of the Software Development`);
	break;
	default:
		console.log(`Sorry, I can't find what ${staff} teaches.`);
	break; // Technically you do not need a break after default
}

let switchConditional = true;

switch(typeof switchConditional == 'string' || typeof switchConditional == 'boolean') {
	case true:
	  console.log(`${switchConditional} is a string or boolean!`);
		break;
		default:
		console.log(`${switchConditional} is NOT a string or boolean`);
}

// When we use || (or) only one side of the || needs to be true for the expression to be true

// When we use && (and) BOTH sides of the && need to be true for the expression to be true

//! Challenge:
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

let grade = 80

switch (true) {
	case grade >= 89:
		console.log(`Your grade is ${grade}, you got an A!`);
		break;
	case grade >= 79:
		console.log(`Your grade is ${grade}, you got an B!`);
		break;
	case grade >= 66:
		console.log(`Your grade is ${grade}, you got an C!`)
		break;
	case grade >= 59:
		console.log(`Your grade is ${grade}, you got an D!`)
		break;
		case grade >= 0:
		console.log(`Your grade is ${grade}, you got an D!`)
		break;
    default:
		console.log('Please insert a value')
		break;
}



let character = "";

character === 'Michael' ? console.log('That\'s what she said!') :
character === 'Dwight' ? console.log('It\'s not weed! It\'s hemp!') :
character === 'Jim' ? console.log('Bears. Beets. Battlestar Galactica.') :
console.log('*slow camera zoom*');

let character = "";

switch (true) {
	case character === 'Michael': //  case 'Michael'
   	console.log('That\'s what she said!')
		break;
	case character === 'Dwight': //case 'Dwight'
   	console.log('It\'s not weed! It\'s hemp!')
		break;
	case character === 'Jim': //case 'Jim'
   	console.log('Bears. Beets. Battlestar Galactica.')
		break;
    default:
		console.log('*slow camera zoom*')
}



