

//1)WHAT IS STRING :

// let str = "shubam";

// "" '' ``

// 2) What is the trim() Method?
// The trim() method removes whitespace from both ends of a string. It doesn’t modify the original string but returns a new one.

// Why use trim()?
// To clean up user input.
// To avoid formatting issues caused by unnecessary spaces.

// let userName =  "    shubham";
// let trimedName = userName.trim();
// console.log(trimedName);

// 3)Strings are Immutable in JavaScript 

// let username = "ayush";


// console.log(username);

// 4)ToUpperCase and ToLowerCase

// console.log(username.toUpperCase());
// console.log(username.toLowerCase());


///5)Methods with Arguments - indexOf
// The indexOf() method returns the position of the first occurrence of a specified value in a string. If the value is not found, it returns -1.

// let arr = "    hello worlodooooo   "

// console.log(arr.indexOf('o'));
// console.log(arr.indexOf('z'));

// console.log(arr.includes('z'));


// 6)Method Chaining : Method chaining allows you to call multiple methods on the same string in a single statement.

// console.log(arr.toUpperCase());

// console.log(arr.toLowerCase().trim().indexOf(' '));

//  "hello worlodooooo"

// 7)Slice Method


// let name = "shubam"

// console.log(name.slice(0, 6)) //shuba 

// 8)Replace & Repeat Method


// let str = "javascript";

// console.log(str.replace('i', 'hello'))

// console.log(str.repeat(10))


//PRACTISE QUESTION :

// let str = "     shubam    and    ayush    ";

// console.log(str.replace(/\s+/g, " ").trim())



//1)Pallindrome :

//   i       j
// "z m a a m z"
// "z m a a m z"


// i   j
// "T H E"
// "E H T"

//



//2) We have a string " Welcome to JavaScript world! Let's learn JavaScript. ".
// Perform the following steps in one line:

// Trim the string to remove leading and trailing spaces.
// Convert it to uppercase.
// Replace the word "WORLD" with "UNIVERSE".
// Extract the first 15 characters of the modified string.
// Find the index of the word "JAVASCRIPT" in the first 15 characters.
// Check if it includes the word "LEARN".
// Return the final result by concatenating the index and the boolean value (true/false).
















