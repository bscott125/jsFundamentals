// selecting the body tag from the document
//const body = document.querySelector('body');

// need an h1
let header1 = document.createElement('h1'); //<h1></h1>
// make it  say something
header1.innerText = 'Our Favorite Books!'  //<h1>Our Favorite Books!</h1>
// put it on the page
// using the document and using dot notation to get the body tag
document.body.appendChild(header1);


const books = ['Lord of the Rings', 'Dune', 'The Catcher in the Rye', 'Harry Potter',];

let table = document.createElement('table');
let headerRow = document.createElement('tr');
let tHeader = document.createElement('th');

tHeader.innerText = 'Book Names';  //<th>Book Names</th>

headerRow.appendChild(tHeader); // <tr> <th>Book Names</th>  </tr>
table.appendChild(headerRow);    // <table> <tr>...</tr> </table>
document.body.appendChild(table);  // <body> <table> ... </table>


books.forEach(function(current){
	console.log(current);

	let row2 = document.createElement('tr');
	let firstBook = document.createElement('td');
	
	firstBook.innerText = current;
	
	table.appendChild(row2);
	row2.appendChild(firstBook);
})

//another way 


//    initial    condition      iterator
for(let i = 0; i < books.length; i++){
	let row2 = document.createElement('tr');
	let firstBook = document.createElement('td');
	
	firstBook.innerText = books[i];
	
	table.appendChild(row2);
	row2.appendChild(firstBook);

}