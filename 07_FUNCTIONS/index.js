// A function is a reusable block of code designed to perform a task.
// - Benefits:
//   - Reduces redundancy.
//   - Increases code clarity and maintainability.

// function name(){

// code to execute
// }

// let a = 10;
// let b = 20;
// let sum = a + b;

// console.log(sum)

// function sum() {
//   console.log(a + b);
// }

// sum();
// sum();
// sum();
// sum();

function sum2(a, b, c) {
  //parameter
  console.log(a + b + c);
}

sum2(5 + 10 + 20); // argument

// 0/0   =
// Infinity - Infinity
// 1 ^ Infinty

// let a = 1+ 2 + "A" + 3 + 5
// console.log(typeof(a))

console.log();
console.log(1 + 2 + "A" + 3 + 5);
console.log();
console.log(1 + 2 + "A" + 3 + 5);
console.log("1" + 1);

// sum2(5, 10, "a");
// sum2(5, 10, 20);
// sum2(5, 10, 20);
// sum2(5, 10, 20);

// Function Declaration**

// function hello(a){

//     console.log(`${a} hello`);
// }

// hello(10)

// ### **2.2. Function Expression**

// const sayhello = function(){
//     console.log("hello")
// }

// sayhello()

// Example 1: Adding a string that can't be converted to a number
// let result1 = "abc" + 10; // "abc10" (string concatenation)
// let nanResult1 = Number("abc") + 10; // NaN

// console.log(nanResult1); // Output: NaN

// function wAter(a) {
//     let wAter = 0;
//     let n = a.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             let b = j - i;
//             let newA = Math.min(a[i], a[j]);
//             let c = b * newA;
//             wAter = Math.max(wAter, c);
//         }
//     }
//     console.log("Maximum water this array should have ",wAter)
// }
// let a =[4, 2, 0, 3, 2, 5];
// wAter(a)

//Higher order function

// function multiplegreet(func, count) {
//   for (let i = 1; i <= count; i++) {
//     func();
//   }
// }

// let greet = function () {
//   console.log("hello");
// };

// multiplegreet(greet, 1000);


//

{

    // let a  = 10;
    var b = 10;


}

// console.log(a)
console.log(b)


// 0 1 1 2 3 5 
// function fib(n){

//     let fib = [0, 1];

//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i-1] + fib[i-2]
        
//     }
//     return fib;

// }

// console.log(fib(1))

const calculator = {

    add : function(a, b){
        return a+b;
    }


}

//1) + - *  / % ! && || === 

//2) n*(n-1)!
// 5*4*3*2*1 

//3)Implement a function that generates a random password of a given length.

console.log("addition", calculator.add(10,5))



