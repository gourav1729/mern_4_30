import React from "react";
import { useState } from "react";

function Counter() {
  //5)
  console.log("rendering.............")

  let [count, setCount] = useState(0);
  // let [count, setCount] = useState(10);

  // let count = 0;
  
 

  function inCount() {

    // 2)
    console.log("Before update 1:", count); 
    
    // 3) //count : asychrouns operation
    setCount(count + 1); 
   
    // 4)
    console.log("After update 1:", count); 
   
  }


  return (
    <div>
     
     {/* 1) */}
      <button onClick={inCount}> click me  : {count}</button> 
      {/* 6) */}
    
    
    </div>    
  );
  
}

export default Counter;
