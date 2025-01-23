// 09) ARRAYS (DATA STRUCTURE)
//  Arrays are data structures used to store multiple values in a single variable, they same or different types of datatype.
// - They are ordered collections of items, accessible using indices (starting from 0).
// - Example:
//   ```javascript
//   const fruits = ["apple", "banana", "cherry"];
//   ```

// let arr = [false, true, 1, 1.2, "shubam"]

// ### Characteristics of Arrays:
// 1. Arrays can hold elements of any data type (numbers, strings, objects, etc.).
// 2. Arrays are dynamic in size.
// 3. Elements in arrays are accessed using their index.

// let arr  = ["hello", "world"];
// arr.push("rirtk")
// console.log(arr)

// let name = "shubam"
// let name = "abhishike"
// let name = "shubam"
// let name = "abhishike"
// let name =
// let name = "abhishike"
// let name = "shubam"
// let name = "abhishike"

let arr = ["shubam", "abhishike", "shubam", "shubam"];

// 10)

// 11)push :  Adds an element to the end of an array

arr.push("hello");
arr.push("hello");
arr.push("hello");
arr.push("hello");
// console.log(arr)

//13)pop : Removes the last element of an array

arr.pop();
arr.pop();
arr.pop();

// console.log(arr)

// 14)`shift()`**: Removes the first element of an array.

// arr.shift();
// arr.shift();
// arr.shift();
// arr.shift();
arr.shift();
// console.log(arr)

let arr2 = ["shubam", "abhishike", "shubam", "ram"];
//             0          1         2         3

arr2.unshift("ram");
// console.lo(indexOf())

//15)unshift

// 16) indexOf() : - Finds the first occurrence of a value and returns its index. Returns `-1` if not found.

const fruit = ["apple", "bannana", "mango", "cherry"];
// console.log(fruit.indexOf( "bannana"))
// console.log(fruit.indexOf( "cherry"))
// console.log(fruit.indexOf( "ch"))

// includes() : Checks if an array contains a specific value. Returns `true` or `false`.

// console.log(fruit.includes("cherry"))

// 17)Concatenation:Combines two or more arrays into a new array.

// const arr1 = [1, 2]
// const arr4 = [3, 4]
// const combined = arr1.concat(arr4)
// console.log(combined)

// Reverse:
// - Reverses the order of elements in an array.
const arr1 = [1, 2, 3, 2, 1];
// console.log(arr1.reverse())

// 1, 2, 3
// 3, 2 ,1
// 1, 2, 1
// 1, 2, 1

// 15.a) SLICE IN ARRAYS

//               0   1   2   3   4
const numbers = [10, 20, 30, 40, 50];
// const sliced = numbers.slice(0, 3)
// console.log(sliced)
// console.log(numbers)

// const removed = numbers.splice(0, 3)
// console.log(removed)  //40 50
// console.log(numbers)  //all

numbers.splice(3, 3, 100, 90, 100 )
console.log(numbers)

// 16)sort()

// const numbers1 = [998, 1000, 30, 20, 1000011, 10, 100, 900, 998, 998989];
// numbers1.sort((a, b) => b - a);
// console.log(numbers1);

// ### Behavior of `(a - b)`
// - **Negative**: `a` is smaller, so it goes first.
// - **Positive**: `b` is smaller, so it goes first.
// - **Zero**: Both are equal.

let arr10 = ["h", "e", "l", "l", "o"];
let arr12 = ["l", "l", "o", "i", "e"];

const arrnew = arr10.sort();

// console.log(arrnew);

const arrnew2 = arr12.sort();

// console.log(arrnew2);

let flag = 0;

for (let i = 0; i < arrnew.length; i++) {
  if (arrnew[i] == arrnew2[i]) {
    // flag = 1;
    console.log(" anagram")
    
  } else {
    // flag = 0;
    
    console.log("not anagram")
    break;
  }
}

// if (flag == 1) {
//   console.log("this string is anagram");
// } else {
//   console.log("this string is not anagram");
// }

// [ 'e', 'h', 'l', o ]
// [ 'e', 'h', 'l', q ]

// arrnew[0] = arrnew2[0]
// arrnew[1] = arrnew2[1]
// arrnew[2] = arrnew2[2]
// arrnew[3] = arrnew2[3] -> simple

// console.log(arr10)
// console.log(arr12)

// 17)

// [10, 20]


// 19)CONSTANT ARRAY : - Arrays declared with `const` can be modified, but you cannot reassign them.

const fruits = ["apple", "cheery"]
fruits.push("hello")
fruits.push("hello")
// console.log(fruits)

// 20)NESTED ARRAYS :Arrays that contain other arrays as elements.


// [[], [], [], []]

// if(){

//   if(){

//     if(){

//     }
//   }



// }


let arr20 = [[1,2,3],[6,7,8],[2,1,1]]



console.log(arr20[1][2]);

