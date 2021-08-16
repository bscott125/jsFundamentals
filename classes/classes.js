/*
  CLASSES

	- Classes can be defined by either expression or declaration
	- Classes are functions

	- Classes act as blueprints for creating objects that share methods and properties.
	Using this blueprint creates different "instances" of that class, and each object will
	have different values for thesame properties they hold.

	- body of the class will be written between {}

	- Constructor method is a special method for creating and initializing an object that
	was created with a class.
	- Can use the "super" keyword
	- super keyword is used to access and call functions from a parent class

	- Introduced in ES5
	- New way to write previous existing prototype-based inheritance
	- closest thing in vanilla JS to OOP (Object Oriented Programming)
*/

/*
   CLASS DECLARATION
*/

class Automobile {
	//start writing my class here
  constructor(make, model) {
		// set the current instance of Automobile's make property to the parameter value of make
    this.make = make
		this.model = model
	}
}

// Hoisting: Unlike function declarations, class declarations are not hoisted. A class declaration must
// be declared before accessing it.

/*
  Class Expression

	- can be named or not named
	- the name given to an unnamed class expression is local to the class' body
	- the name of a named class can be retrieved through the class' name property
*/

// unnamed:
let Vehicle = class {
	constructor(make,model){
		this.make = make
		this.model = model
	}
}

console.log(Vehicle.name)

//named:
let Auto = class Mobile {
	constructor(make,model){
		this.make = make
		this.model = model
	}
}
console.log(Auto.name)

/*
   METHODS
*/

// Method Definition: OLD SYNTAX
const automobile = {
	start: function(){
		//do stuff here
	},
	stop: function(){
		//do more stuff here
	}
}

// PROTOTYPE METHOD: NEW syntax

const automobile = {
	start () {
		//do stuff
	},
	stop () {
		//do more stuff here
	}
}

class AutoMobile {
  constructor(make,model){
		this.make = make
		this.model = model
	}
   
  //method 1
	start () {
		console.log(`This ${this.make} ${this.model}'s engine started.`);
	}

	//method 2
	stop () {
			console.log(`This ${this.make} ${this.model}'s engine stopped.`);
	}
}

/*
  NEW INSTANCES

	- using the "new" keyword, we can create a new object/instance of a class
*/

let hondaCivic = new AutoMobile('Honda', 'Civic')
// nameOfVarible.nameOfProperty
console.log(hondaCivic.make)
// nameOfVarible.nameOfMethod()
hondaCivic.start()

let buickBatmobile = new AutoMobile('Buick', 'Batmobile')
buickBatmobile.start()
hondaCivic.stop()

/*
   CONSTRUCTOR METHOD

	 - Helps create and initialize an object created from a class
	 - works along with the 'new' keyword

	 - Needs to be included to create new objects and instances of our class
	   -sets properties
		 -passes values for properties
*/

class Cookie {
	// the parameters will be the placeholders for values we want to be passed and stored in the object
  constructor(type, icing, shape){
		this.t = type
		this.i = icing
		this.s = shape
		//  the names do not have to match
		// Left side: declaring keys for the values we will pass on
		// Right side: assigning our passed values into the keys
		// the left side stores values for "this" specific object being created
	}
}

let chocolateChipCookie = new Cookie('chocolate chip', false, 'square')
console.log(chocolateChipCookie.t)
console.log(chocolateChipCookie.i)
console.log(chocolateChipCookie.s)

console.log(chocolateChipCookie)

// Function is to make that logic work once, samething for a class

/*
  EXTENDS

	- a keyword used in a class declaration/expressions to create a new child class
   
- CHILD CLASS
	- each new class created inherits the properties and methods from the parent class
	- can also have it's own methods and properties
	- also known as a subclass
*/

// Parent

class Animal{
	constructor(name){
		this.name = name
	}

	eat(){
		console.log(`${this.name} eats their food.`)
	}
}

// SUBCLASS (CHILD)
class Dog extends Animal {
	constructor(name, breed){
		// 'super' has to be used before we can use 'this' - otherwise we get an error
		// inside the parenthesis, we will pass in all the properties that the parent class needs
		// before assigning properties to the child class
		super(name)
		this.type = breed
	}

	play(){
		console.log(`The ${this.type} named ${this.name} fetches the ball!`);
	}
}

const mastiff = new Dog('Maximus', 'Mastiff')
console.log(mastiff)
mastiff.play()
mastiff.eat()


class Cupcake{
	constructor(icing, batter, cost){
		this.i = icing
		this.b = batter
		this.c = cost
	}

	getPrice(amount){
    console.log(amount * this.c)
	}
}

const chocoCupcake = new Cupcake('carmel', 'chocolate', 3);
console.log(chocoCupcake)
chocoCupcake.getPrice(3)