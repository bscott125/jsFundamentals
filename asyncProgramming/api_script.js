const baseUrl = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.getElementsByTagName('form')[0];
const spaceShips = document.querySelector('ul'); // gets the first ul tag from html (the first tag/class/id combo we gie it in the string)

searchForm.addEventListener('submit', fetchSpace)

/* HOISTING MINI LESSON 
  JS will compile code reading from top to bottom, BUT it actually reads code twice. The first time it reads code,
	it will stor anything in memory such as: varible names, functions (when using the key word)
*/

function fetchSpace(e){
  e.preventDefault(); // this will stop the page from reloading when we submit our form. It prevents a default action by the browser.

	console.log('Clicked!');

	fetch(baseUrl) // starts the process of 'fetching' or getting information from our resource
	/* Function goes here */
	.then(result => { //when we have a promise, we can call a method called 'then()'. This will be given a callback function to send the result into
		console.log(result);
		return result.json(); // this will json-ify, or translate our result into json, which will be more easily readable and accessible within our app
	}) // .then() also returns a promise, meaning if we want to continue to run code after one is done, we can just add another .then()
	.then(json => {
	 //	console.log(json);
	 displayRockets(json);
	})
}

function displayRockets(data) {
	console.log('Inside displayRockets:', data);

	// for(let i = 0; i < data.length; i++)
	data.forEach(rocket => {
    console.log(rocket.name);
		let listItem = document.createElement('li'); // creates an empty <li></li> tag
		listItem.innerText = rocket.name; // change the text of the item. The tag now looks like this: <li>rocket name</li>
		spaceShips.appendChild(listItem) // will add one of our tags into another tag. In this case we are adding listItem into the ul (spaceShips)

		/* container.appendChild(itemInContainer) */
	})
}

//*Optional Challenge
//Add a table to the html page, and comment out the ul
// comment out the above forEach loop and make a new one
// make a new row in the table for each rocket
// inside o each new row, add the name and cost of the rocket