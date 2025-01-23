// ### 1. Object Literals
// **What are Object Literals?**
// Object literals are a way to store multiple related values as key-value pairs. They are commonly used to represent entities or real-world objects in JavaScript.

//SYNTAX
// cont objectName = {

//     key : value,
//     key  : value,
// }

// const person = {
//   name: "Hello",
//   age: 25,
//   isEmployed: true,
// };

// 4. Get Values

// console.log(person.name)  // Dot notation
// console.log(person.age)
// console.log(person.isEmployed)
// console.log(person["name"]) // Bracket notation

// 6. Add / Update Values

const person = {
    name: "Hello",
    age: 25,
    isEmployed: true,
  };

person.age = 26;
person.age = 26;
person.age = 26;
person.age = 28;
// console.log(person.age)


// **Exercise:** Create a `blogPost` object with properties `title`, `content`, and `views`
// **Exercise:** Create a `instagram` object with properties `name`, `likes`, and `comments`


const blogPost = {

  title : "JS",
  CONTENT : "OBJECTS IN JAVASCRIPT",
  VIEWS : 100,
}


// console.log(blogPost.title)
// console.log(blogPost.CONTENT)
// console.log(blogPost.VIEWS)


// 6) NESTED OBJECTS :

// {{}, {}, {}, {}, {}}

const object = {


  name : "HELLO",
  address : {ciyt : "india", address1 : {ciyt2 : "india2" } }
}

// 
console.log(object.address.zip)
console.log(object.address.address1.ciyt2)




//7) Array of Objects :  Group multiple objects into an array.

const employe = [{name : "vishal", role : "sstudent1" },{name : "shubam", role : "sstudent2" },{name : "ritik", role : "sstudent3" },{name : "ayush", role : "sstudent4" },
]

// console.log(employe[2].name)
// console.log(employe[3].role)

//8)MATH OBJECTS 
// - `Math.PI` - π value -> 3.14 -> 22/7
// - `Math.sqrt(x)` - Square root -> 9 -> 3 , 16->4
// - `Math.round(x)` - Rounds to the nearest integer -> 7.8 -> 8


// console.log(Math.PI)
// console.log(Math.sqrt(9))
// console.log(Math.sqrt(25))
// console.log(Math.round(7.9))
// console.log(Math.sin(1.5708))
// console.log(Math.cos(1.5708))

// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10))



// 1)MAKE LIST OF 10 METHODS IN MATH OBJECT WHICH IS FRQUENTLY USED.
// 2)- Calculate the area of a circle, volume of cylinder using `Math.PI`.
// 3)-- Generate a random number between 1 and 10 using `Math.random()` AND MAEK A PROGRAM FOR GUSSING ANY RANDOM NUMBR AND IT SHOULD HAVE 1 WINING CONDITION.
// 5)Create a nested object `course` with properties `title`, `duration`, and a nested object `instructor` with `name` and `experience`.


// console.log(Math.abs(2))


let myguess = 5;
let random = Math.floor(Math.random()*10)



if (myguess == random) {
  console.log("You have won the game")
  console.log(myguess)
  console.log(random)
  
}else{

  console.log("Please try again")
  console.log(myguess)
  console.log(random)
}



console.log(5 === '5')

