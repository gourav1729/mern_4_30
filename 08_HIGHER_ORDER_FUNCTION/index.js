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


// let adultNames = users
//   .filter(user => user.age >= 18)


 
// console.log(adultNames[0].name);


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










