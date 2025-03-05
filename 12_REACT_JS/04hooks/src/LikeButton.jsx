import React from "react";
import { useState } from "react";

function LikeButton() {
  let [isLiked, setisLiked] = useState(false);
  let [click, setClick] = useState(0);

  let toggleLike = () => {
    setisLiked(!isLiked);
    setClick(click + 1);
  };

  let likeStyle = {color : "red"}
  let Style = {color: click % 2 == 0 ? 'black' : 'red'};

  return (
    <div>
      <h1 style={Style}>Like button : {click}</h1>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i class="fa-solid fa-heart"  style={likeStyle}></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}

export default LikeButton;
