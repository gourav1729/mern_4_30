import React from "react";
import "./Todolist.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todolist() {
  let [todos, setTodos] = useState([{task: "sample task", id : uuidv4(), isDone: false}]);

  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    // console.log('ADD NEW TASK')
    setTodos([...todos, newTodo]);
    setNewTodo("");
    console.log(todos);
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      <h1>Todolist</h1>

      <input
        placeholder="add new todos"
        value={newTodo}
        onChange={updateTodoValue}
      />

      {/*1) CREATE A NEW TODO */}
      <button onClick={addNewTask}>ADD TASK</button>

      <h2>TASK TO DO </h2>
      <ul>
        {todos.map((todo) => (
          <li>{todo}
          
          <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todolist;

// 1)add    :
// 2)delete :

// 1) list
// 2) ntask 1
// 3) task 2
// 4) task 2
// 5) task 1

//

// console.log(uuidv4())
// 6bee10d1-27b8-4b9d-9c84-eb121de8f0ea
// f45bc6b3-852a-45b3-a71c-0c486038979e

// npm -> commandline jo ki packages install karne me help karta hai. And secondly library, for installing packages.
