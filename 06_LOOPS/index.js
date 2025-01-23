// ## Concept:
// A for loop is used to repeat a block of code a specific number of times. It’s best when the number of iterations is known beforehand.

// init , condition, inc/dec

// for (let i = 0; i <= 100; i++) {
//    console.log(i)

// }

// for (let i = 0; i < 5; i++) {
//     console.log("hello")

// }

// ### Explanation of the Syntax:
// - **Initialization:** `let i = 0` initializes the loop variable.
// - **Condition:** `i < 5` checks if the loop should continue running.
// - **Increment/Decrement:** `i++` increases the value of `i` by 1 after each iteration.

// 5 4 3 2 1

// for (let i = 100; i > 0; i--) {
//     console.log(i)

// }

// let n = 25;

// for (let i = 1; i <= 10; i++) {
//     console.log(i*n)

// }

//1*19
//2*19
//3*19
//4*19

// HW : PRINT ODD AND EVEN NO USING LOOPS FROM 1 TO 100.
// HW : PRINT MULTIPLICATION TABE OF 21.
// HW : PRINT PRIME NUMBERS USING LOOP FROM 2 TO 100

//BREAK KEYWORD

//WHILE LOOP

let i = 1;
// while (i <= 10000000000) {
//   console.log(i);
//   i++;
// }

// let i2 = 0;

// do {
//   console.log(i2);
//   i2++;
// } while (i2 < 5);

// let arr = ["hello", "world", "kaise", "ho"];

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let arr1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [20, 30, 40],
// ];

// for (i = 0; i < arr1.length; i++) {
//   for (j = 0; j < arr1[i].length; j++) {
//     console.log(arr1[i][j]);
//   }
//   // console.log(arr[i])
// }

// *
// **
// ***
// ****
// *****

// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";

//   for (let j = 1; j <= rows - i; j++) {
//     pattern += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     pattern += "*";
//   }

//   console.log(pattern);
// }

// const row = 5;

// for (let i = 0; i < row-i; i++) {

//   console.log(i)

//   let star = "*".repeat(i)

//   console.log(star)
// }

// let rows = 5
// for (let i = 1; i <= rows; i++) {   //i = 2
//     let line = '';
  
//     // Add spaces before the stars to center-align the triangle
//     for (let j = 1; j <= rows - i; j++) { // j = 1          j <= 3 
//       line += '  '; // Two spaces for alignment
//     }
  
   
//     // Add stars and hollow spaces
//     for (let k = 1; k <= 2 * i - 1; k++) { //k =1               k <  3 
//       if (k === 1 || k === 2 * i - 1 || (i === rows && (k % 2 === 1))) {
//         // Print stars at the edges and at alternate positions in the last row
//         line += '* ';
//       } else {
//         // Print spaces for the hollow part
//         line += '  ';
//       }
//     }
  
//     // Print the current line
//     console.log(line.trimEnd());
//   }
  
//         *
//       *   *
//     *   *   *
//   *           *
// *   *   *   *   *

//



// [0, 2 ,1, 4, 5] : maximum water it can hold.


// function printPattern(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let str = '';

//     // Add spaces to center the stars
//     for (let j = 1; j <= rows - i; j++) {
//       str += '  ';
//     }

//     // Print stars with spaces between them
//     for (let j = 1; j <= i; j++) {
//       if (i === rows || j === 1 || j === i) {
//         str += '* ';
//       } else {
//         str += '  ';
//       }
//     }

//     console.log(str);
//   }
// }

// // Call the function with the number of rows
// printPattern(5);



// function printHollowTriangle(rows) {
//   // For each row
//   for (let i = 0; i < rows; i++) {
//     let line = '';
    
//     // Calculate spaces before the first star
//     for (let j = 0; j < rows - i - 1; j++) {
//       line += ' ';
//     }
    
//     // For each position in current row
//     for (let j = 0; j <= i; j++) {
//       // Print star if it's:
//       // - First row (i === 0)
//       // - Last row (i === rows-1)
//       // - First position in row (j === 0)
//       // - Last position in row (j === i)
//       if (i === 0 || i === rows-1 || j === 0 || j === i) {
//         line += '* ';
//       } else {
//         line += '  '; // Two spaces to maintain spacing
//       }
//     }
//     console.log(line);
//   }
// }

// // Test with different numbers of rows
// console.log("Triangle with 5 rows:");
// printHollowTriangle(5);

// console.log("\nTriangle with 7 rows:");
// printHollowTriangle(7);


let rows = 10; // Number of rows in the triangle

// Outer loop for each row
for (let i = 1; i <= rows; i++) {  //i=2
  let line = '';


  //j = 1           | j <= 3  | j++
  // Add spaces before the stars to center-align the triangle
  for (let j = 1; j <= rows - i; j++) {
    line += '  '; // Two spaces for alignment
  }


  // k =1              k <=2*2-1 = 3  
  // Add stars and hollow spaces
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k === 1 || k === 2 * i - 1 || (i === rows && (k % 2 === 1) ||  (i === rows / 2 && k === i))) {
      // Print stars at the edges and at alternate positions in the last row
      line += '* ';
    } else {
      // Print spaces for the hollow part
      line += '  ';
    }
  }

  // Print the current line
  console.log(line);
}


console.log(Math.ceil(3.2))
console.log(Math.floor(3.2))




