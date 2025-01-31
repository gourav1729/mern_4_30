

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



///////////////////////////////////////////////////////////////////////////



//  Find All Good Strings
// Hard
// Topics
// Companies
// Hint
// Given the strings s1 and s2 of size n and the string evil, return the number of good strings.

// A good string has size n, it is alphabetically greater than or equal to s1, it is alphabetically smaller than or equal to s2, and it does not contain the string evil as a substring. Since the answer can be a huge number, return this modulo 109 + 7.

 

// Example 1:

// Input: n = 2, s1 = "aa", s2 = "da", evil = "b"
// Output: 51 
// Explanation: There are 25 good strings starting with 'a': "aa","ac","ad",...,"az". Then there are 25 good strings starting with 'c': "ca","cc","cd",...,"cz" and finally there is one good string starting with 'd': "da". 
// Example 2:

// Input: n = 8, s1 = "leetcode", s2 = "leetgoes", evil = "leet"
// Output: 0 
// Explanation: All strings greater than or equal to s1 and smaller than or equal to s2 start with the prefix "leet", therefore, there is not any good string.
// Example 3:

// Input: n = 2, s1 = "gx", s2 = "gz", evil = "x"
// Output: 2
 

// Constraints:

// s1.length == n
// s2.length == n
// s1 <= s2
// 1 <= n <= 500
// 1 <= evil.length <= 50
// All strings consist of lowercase English letters.



////////////////////////////////////////////////




//  Encrypt and Decrypt Strings
// Hard
// Topics
// Companies
// Hint
// You are given a character array keys containing unique characters and a string array values containing strings of length 2. You are also given another string array dictionary that contains all permitted original strings after decryption. You should implement a data structure that can encrypt or decrypt a 0-indexed string.

// A string is encrypted with the following process:

// For each character c in the string, we find the index i satisfying keys[i] == c in keys.
// Replace c with values[i] in the string.
// Note that in case a character of the string is not present in keys, the encryption process cannot be carried out, and an empty string "" is returned.

// A string is decrypted with the following process:

// For each substring s of length 2 occurring at an even index in the string, we find an i such that values[i] == s. If there are multiple valid i, we choose any one of them. This means a string could have multiple possible strings it can decrypt to.
// Replace s with keys[i] in the string.
// Implement the Encrypter class:

// Encrypter(char[] keys, String[] values, String[] dictionary) Initializes the Encrypter class with keys, values, and dictionary.
// String encrypt(String word1) Encrypts word1 with the encryption process described above and returns the encrypted string.
// int decrypt(String word2) Returns the number of possible strings word2 could decrypt to that also appear in dictionary.
 

// Example 1:

// Input
// ["Encrypter", "encrypt", "decrypt"]
// [[['a', 'b', 'c', 'd'], ["ei", "zf", "ei", "am"], ["abcd", "acbd", "adbc", "badc", "dacb", "cadb", "cbda", "abad"]], ["abcd"], ["eizfeiam"]]
// Output
// [null, "eizfeiam", 2]

// Explanation
// Encrypter encrypter = new Encrypter([['a', 'b', 'c', 'd'], ["ei", "zf", "ei", "am"], ["abcd", "acbd", "adbc", "badc", "dacb", "cadb", "cbda", "abad"]);
// encrypter.encrypt("abcd"); // return "eizfeiam". 
//                            // 'a' maps to "ei", 'b' maps to "zf", 'c' maps to "ei", and 'd' maps to "am".
// encrypter.decrypt("eizfeiam"); // return 2. 
//                               // "ei" can map to 'a' or 'c', "zf" maps to 'b', and "am" maps to 'd'. 
//                               // Thus, the possible strings after decryption are "abad", "cbad", "abcd", and "cbcd". 
//                               // 2 of those strings, "abad" and "abcd", appear in dictionary, so the answer is 2.
 

// Constraints:

// 1 <= keys.length == values.length <= 26
// values[i].length == 2
// 1 <= dictionary.length <= 100
// 1 <= dictionary[i].length <= 100
// All keys[i] and dictionary[i] are unique.
// 1 <= word1.length <= 2000
// 2 <= word2.length <= 200
// All word1[i] appear in keys.
// word2.length is even.
// keys, values[i], dictionary[i], word1, and word2 only contain lowercase English letters.
// At most 200 calls will be made to encrypt and decrypt in total.





















