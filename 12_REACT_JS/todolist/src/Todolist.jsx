import React from 'react'
import './Todolist.css'
import { useState } from 'react'
import { v4 as uuidv4} from "uuid"

function Todolist() {

    let [todos, setTodos] = useState([{task: "sample task"}])
    let [newTodo, setnewTodos] = useState("") 

    
    // npm -> commandline jo ki packages install karne me help karta hai. And secondly library, for installing packages.

    console.log(uuidv4())
    // 6bee10d1-27b8-4b9d-9c84-eb121de8f0ea
    // f45bc6b3-852a-45b3-a71c-0c486038979e
    

    let addNewTask = () => {
        // console.log('ADD NEW TASK')

    }


  return (
    <>
      <h1>Todolist</h1>


      {/*1) CREATE A NEW TODO */}
      <button onClick={addNewTask}>ADD TASK</button>



    </>
  )
}

export default Todolist
