// COMPARISON OPERATORS

//EQUAL
'3' == 3;
console.log('3' == 3) // you would get 3. It is testing if it's equal to each other

/*
Javascript is helpful and does something known as coercion when comparing values
-coercion is the process of converting a value from one type to another
-in the above example, javascript assumed that we were trying to check is '3'
is equal to 3, even though one of our valus is a string and the other is an integer
*/

//STRICT EQUAL - This overrides javascripts coercion
console.log(3 === 3) // we get true
console. log('3'===3) //we would get false   testing the typeOf

// NOT EQUAL
console.log('3' != 3) //false

// STRICT NOT EQUAL
'3' !== 4;
console.log('3' !== 4) //true

// Greater THAN
3 > 2;

// LESS THAN
2 < 3;

// GREATER THAN OR EQUAL TO
3 >= 2; // Not to be confused with => (fat arrows)

// LESS THAN OR EQUAL TO
2 <= 3;

// AND
2 && 3;

// OR 
2 || 3