import React from "react";

function Events() {
  function printme() {
    console.log("hello");
  }

  function bye(params) {
    console.log("bye");
  }

  function handleOver(params) {
    console.log("hoverssdc,as vc m,dv .dvs,.ads.vadffvdsfv!");
   
  }

  return (
    <div>
      {/* <button onClick={printme}>CLICK ME!</button>
        <button onClick={bye}>CLICK ME!</button>

        <button onMouseOver={handleOver}>Hover over me</button> */}

      {/* <p style={{ color: "red" }}>{<i class="fa-solid fa-heart"></i>}</p> */}
      {/* <p style={{color:"red"}}>{(<i class="fa-solid fa-heart"></i>)}</p> */}

      {/* { <FontAwesomeIcon icon="fa-brands fa-font-awesome" />} */}
    </div>
  );
}

export default Events;


// color changes -> set -> fasle(black) -> true (red)
// likes inc    -> karwa diya hai 
