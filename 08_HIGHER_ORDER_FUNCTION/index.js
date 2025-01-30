// - `.push()` and `.pop()`
// - `.shift()` and `.unshift()`
// - `.indexOf()`
// - `.slice()`
// - `.splice()`

// ## **2. Map & Filter**
// - **Map**:
//   - Creates a new array by applying a function to each element of the original array.

// let arr1 = [20, 14 , 15 , 30, 23, 8];

// let multiply = arr1.map(num => 2*num )
// console.log(multiply)

// let celsius = [0, 10, 20, 30];

// let far = celsius.map(i => (i*9/5) + 32)
// console.log(far)

// temp*9/5 + 32

// What is filter?
// filter is a higher-order function that iterates over an array and creates a new array containing only the elements that satisfy a given condition.


let arr1 = [20, 14 , 15 , 30, 23, 8];

let even = arr1.filter(i => i > 21)

console.log(even)




let products = [
    { id: 1, name: "Laptop", inStock: true },
    { id: 2, name: "Phone", inStock: false },
    { id: 3, name: "Tablet", inStock: true }
  ];

//   let stock = products.filter( product => product.inStock == false )
//   console.log(stock)


  //length 



  let users = [
    { id: 1, name: "Alice", age: 17 },
    { id: 2, name: "Bob", age: 21 },
    { id: 3, name: "Charlie", age: 25 }
  ];

  


// ["Bob", "Charlie"]


let adultNames = users
  .filter(user => user.age >= 18).map(user => user.name)


 
console.log(adultNames);


// 1. Use `map` to double the numbers in an array: `[1, 2, 3, 4]`.
// 2. Use `filter` to find all words starting with the letter "a" in `['apple', 'banana', 'avocado', 'cherry']`.
// 3. Combine `map` and `filter` to get the names of students who scored above 80 from:
//    ```javascript
//    let students = [
//      { name: "John", score: 75 },
//      { name: "Jane", score: 85 },
//      { name: "Jake", score: 95 }
//    ];
//    ```
// 4. Extract all even numbers greater than 10, square them, and return the new array from `[5, 12, 18, 7, 20]`.

// 5. 20, 10, 5, 15, 20, 14;  

// let stock = [7,6,4,3,1];


//reduce :

let arr = [1, 2, 3, 4, 5];



// 0 + 1 = 1 
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15


let sum = arr.reduce((acc, curr) => acc + curr, 0 )


console.log(sum)



//spread operator

let arr10 = [1, 2, 3];
let arr20 = [4, 5, 6];

let arr30 = [...arr10, ...arr20]
console.log(arr30)

let colors = ['red', 'green', 'blue'];
let [first, second] = colors;
console.log(first); // red
console.log(second); // green

let user = { name: 'John', age: 30 };
let { name, age } = user;
console.log(name); // John
console.log(age); // 30


// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.


// ## **11. Assignment Questions**
// 1. Write a function that uses `reduce()` to calculate the product of an array.
// 2. Use destructuring to swap the values of two variables.
// 3. Write a program to merge two arrays using the spread operator.

// 4)On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

















