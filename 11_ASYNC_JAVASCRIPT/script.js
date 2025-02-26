// console.log("LINE 1")

// function hello(){
//     console.log("LINE 5"); //1
//    //2
// }

// console.log("LINE 2")

// function demo(){
//     console.log("cLINE 4")
//     hello();
// }

// console.log("LINE 3")

// // demo()

// console.log("LINE 6");

//

// console.log("hello1")

// setTimeout(() => {
//     console.log("hello world2"), 0}
// );

// console.log("...hello world4")

// console.log("start")

// setTimeout(() => {

//     console.log("Async operation completed")

// }, 2000);

// console.log("End")

function getUser(userId, callback) {
  setTimeout(() => {
    console.log("User data received");
    callback({ id: userId, name: "John Doe" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Posts received");
    callback(["Post1", "Post2"]);
  }, 1000);
}

() =>
  function getComments(Posts, callback) {
    setTimeout(() => {
      console.log("Comments received");
      callback(["Comment1", "Comment2"]);
    }, 1000);
  };

// askhat -> login (wrong)
// akshat  -> singnup -> login -> like + comment

// getUser(1, (user) => {
//     getPosts(user.id, (posts) => {

//         getComments(posts[0], (comments) => {

//             console.log(posts[0]);
//             console.log(comments);
//         })
//     })
//  })

// What is Callback Hell?
// Definition and explanation
// How deeply nested callbacks create an unreadable and unmaintainable code structure
// Problems with Callback Hell
// Readability issue
// Difficult debugging
// Hard to maintain and scale
// Example of a real-world issue caused by callback hell

// Topic 2: Promises in JavaScript

// What is a Promise?
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

// Why Were Promises Introduced?
// To solve callback hell, JavaScript introduced Promises, which allow cleaner, more manageable asynchronous code.

// States of a Promise
// Pending: Initial state, before completion or failure.
// Fulfilled: Operation completed successfully (resolve).
// Rejected: Operation failed (reject)

//basic synatax of promises

// let promise = new Promise((resolve, reject) =>{

//     let sucess = false;

//     if(sucess){
//         resolve("Promise fullfilled")
//     }else{
//         reject("Promise rejected !")
//     }

// })

// promise
//     .then((message) => console.log(message))

//     .catch((error) =>console.log(error));

//signup -> login

// function signup() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("signuped");
//         resolve();
//       }, 1000);
//     });
//   }

// function login() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("loggin");
//       resolve();
//     }, 10000);
//   });
// }

// signup()
//     .then(()=>login())
//     .then(() => console.log("process completed"))

// 1)login signup -> call-back (confusing)-> call-back hell -> promises -> async-await

// 1-> 10 ||  2) 20

// let p1 = new Promise((resolve) => setTimeout(() => resolve("TASK 1"), 1000))
// let p2 = new Promise((resolve) => setTimeout(() => resolve("TASK 2"), 5000))

// Promise.all([p1, p2]).then((results)=>console.log(results))

// function getUser(userId, callback) {
//     setTimeout(() => {
//         console.log("User data received");
//         callback({id: userId, name: "John Doe"})

//     }, 1000)

// }

// function getPosts(userId, callback) {
//     setTimeout(() => {
//         console.log("Posts received");
//         callback([
//           "Post1", "Post2"
//         ])

//     }, 1000)

// }

// ()=>

// function getComments(Posts, callback){
//     setTimeout(() => {
//         console.log("Comments received");
//         callback(["Comment1", "Comment2"])

//     }, 1000)
// }

// Promise.race

// let p1 = new Promise((resolve) => setTimeout(() => resolve("TASK 1"), 1000));
// let p2 = new Promise((resolve) => setTimeout(() => resolve("TASK 2"), 500));

// Promise.race([p1, p2]).then((results) => console.log(results));

// function getUser(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve({ id: userId, name: "John Doe" }), 1000);

//     });
// }

// function getPosts(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(["Post1", "Post2"]), 1000);

//     });
// }

// function getComments(post) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(["Comment1", "Comment2"]), 1000);

//     });
// }

// getUser(1)
//   .then((user) => getPosts(user.id))
//   .then((post)=>getComments(post[0]))
//   .then((Comments)=>console.log(Comments))
//   .catch((error) =>console.log(error));

// What is Async/Await?
// Async/Await is a feature in JavaScript introduced in ES8 (ECMAScript 2017) that makes working with asynchronous code much easier. It simplifies Promises by allowing developers to write asynchronous code in a synchronous manner.

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data recived");
//     }, 2000);
//   });
// }

// async function getData(){

//     console.log("DATA IS COMMING");
//     let data = await fetchData()
//     console.log(data);
// }

// getData()

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Data not  recived");
//     }, 2000);
//   });
// }

// async function getData() {
//   console.log("DATA IS COMMING");

//   try {
//     let data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.log("error", error)
//   }
// }

// getData();

// 


//api : endpoints : url -> data/information le kar a sakta hu.

// fetch


fetch("https://catfact.ninja/fact")
                            .then((response)=>response.json()) //parse json response
                            .then((data) => console.log(data))
                            .catch((error) => console.log("Error", error))

fetch("https://dog.ceo/api/breeds/image/random")
                            .then((response)=>response.json()) //parse json response
                            .then((data) => console.log(data))
                            .catch((error) => console.log("Error", error))

