import React from "react";
import { useState } from "react";

function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red : 0});

  let updateBlue = () => {
    moves.blue += 1;
    setMoves({ ...moves });
  };

  let updateRed = () => {
    moves.red += 1;
    setMoves({ ...moves });

  }
  return (
    <div>
      <h1>GAME !!!!</h1>

      <div className="board">
        <p>Blue turn = {moves.blue}</p>
        <button style={{ background: "blue" }} onClick={updateBlue}>
          +1
        </button>

        <p>Blue turn = {moves.red}</p>
        <button style={{ background: "red" }} onClick={updateRed}>
          +1
        </button>

       
      </div>
    </div>
  );
}

export default LudoBoard;
