/*
  - Populating and Referring
	- Methods
	- Length
	- Iterating
*/

// POPULATING and REFERING

let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);

/*
 - when we call an array, we can append, or add, square brackets onto the end of the array name
 with the index number of the value we want to reference. This is known as SQUARE BRACKET NOTATION.

 -Javascript starts counting at 0, so when we console log 'list[1]' we should see 'banana'
*/

let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Phoneix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie'],
15 % 5];
console.log(students[10]);//15 % 5 = 0
console.log(typeof students);//object
console.log(students instanceof Array);//to check if an object is an array //this will print true
// the instanceof operator is used to check the type of an object at run time. Remember arrays are technically objects

/*
  CHALLENGE
  
  console.log from the students array
	  - the name Matthew (the first one)
		- the number 25
		- the phrase "Shake n bake"
		- print out 'Hello Sophie'
*/
let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Phoneix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie'],
15 % 5];

  console.log(students[4]); 
	console.log(students[7]); //25
  console.log(students[9][1]); //Shake n Bake
	console.log(`Hello ${students[9][2]}`);// Hello Sophie  //interpolate
	console.log('Hello', students[9][2])// Hello Sophie   //console log 2 things
	console.log('Hello ' + students[9][2])// Hello Sophie   // concatinate 


	// ARRAY METHODS
  
	/* We can call on multiple different array methods that will allow us to manipulate arrays as we need to.*/

	let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

	// add to our array
	food.push('Pizza'); // .push() will add a value to the end of the array. Prints Multiple values separated by a comma
	console.log(food.push('Spring Onion')); // gives me the length of the array
	console.log('push:', food[6]); // print Push: Spring Onion

	// Remove from array
	food.pop(); // this should remove the LAST item from the array
	console.log('pop:', food);

	food.shift();// taking out the FIRST item in the array
	console.log('shift: ', food);

	food.unshift('chicken', 'Garlic'); //adds item(s) to the BEGINNING of an array
	console.log('unshift: ', food);

  food.splice(2 , 1, 'Bananas') // remove and insert item(s) from an array
	//  (position to remove, how many to remove, what to add in what location)
	console.log('splice: ', food)

	food.splice(1, 0, 'Ice Cream');
	console.log('second splice:', food);

	
	// LENGTH
    
  let long = [0,1,2,3,4,5,6,7,8,9,10];
  console.log(long.length);  //  11

	let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
	console.log(colors.length); //  6

	/*
    ITERATING

		forEach -

		   - the forEach() method executes a provided function once for each element in an array.
			 - the forEach() method does the same thing as a for loop or a for of loop -->
			 both iterate over the properties in an array

			 - provide a callback function that has up to 3 arguments:
			   1. The value.
				 2. The index.
				 3. The array object itself
	*/

	let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'orce'];

	for(let i = 0; i < colorList.length; i++) {
		console.log(colorList[i]);
	}


	let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'orce'];
	colorList.forEach(color => console.log(color));// callback function
  // a callback function is a function that is either called or passed as a parameter to another function
	
	// arrow function
	let something = (color) => {/* CODE HERE*/}

	let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'orce'];
	
	let logItem = item => console.log(item);
	colorList.forEach(logItem);



	let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'orce'];

	colorList.forEach((item, index) => {
		console.log(item);
		console.log(index);
	} )