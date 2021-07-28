/*
  ! ASYNCHRONOUS PROGRAMMING
 
	- Generally, JS is read top to bottom, performing each line of 
	code one after another - this is known as synchronous programming.
     -ex. line 1 is run and completed before line 2 begins, which is then
		 run and completed before line 3, etc.

	- This can become an issue when we fetch, or gather, info from an outside
	source, from something such as an API. If JS did not have the ability to run code
	asynchronously, we would be forced to wait for our line of code to finish as it
	tried to gather mountains of data from a database. Asyncronous code will allow us
	to somewhat ignore the one line at a time rule.

	- Asynchronus programming allows a program to do more than one thing at a time.
	
	- Makes it possible to run long-running actions without stopping the program to
	wait for a response.

*/

//Synchronous Code
const secondSync = () => {
	console.log('Second Hello');
}

const firstSync = () => {
	console.log('First Hello');
	secondSync();
	console.log('End')
}

firstSync();


// Asynchronous Code
const networkRequest = () => {
	setTimeout(() => {
		//setTimeout is a method that will work in the browser and node. Js - we are using it to
		// simulate a network request
		// setTimeout has 2 parameters, the first is a callback function (a function that we pass into a parameter)
		// and the secound is how time to wait measured in milliseconds
		console.log('Async Code');
  }, 2000) // 2000 miliseconds = 2 seconds and is waiting before it prints
}

console.log('Hello World');

networkRequest();

console.log('The End');


/* 
   ! API

	 - APPLICATION PROGRAM INTERFACE
   
	  - an API is something that allows us to talk to other programs, such as a database or a server,
		however, the API itself is not a database or server, it is the code with access points to the server

		- access to a server will come in the form of ENDPOINTS
		   - these ENDPOINTS direct us to sets of data

		REST API
		REpresentational State Transfer
		    -creates an object of requested data from a client, and sends values back as response

		Methods:
		  CRUD
			  Create (POST)
				Read (GET)
				Update (PUT)
				Delete (DELETE)
				
				
		FETCH()

		The fetch method is an asynchronous method, and is part of the browser window, NOT JS.
		This method will start the process of 'fetching' or grabbing, a resource from the network,
		and will return a promise which is fulfilled when the response is availble

		- Promise is an unknown value that will eventually be filled with either a value or a rejection (error)
		   -Pending: initial state, neither fulfilled or rejected
			 -Fulfilled: meaning the operation completed successfully
			 -Rejected: meaning the operation failed.
*/