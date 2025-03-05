import React from "react";
import "./Product.css";

function Product({ location, price, day, activities, image }) {
  
  let Style = {color:count%2==0 ? 'red' : 'white'};
  let style = { backgroundColor: price > 10000 ? "red" : "grey" };

  // function sum(a, b) {
  //   return a + b;
  // }

  // console.lo(sum(2, 3));
  // console.lo(sum(2, 3));
  // console.lo(sum(2, 3));

  return (
    <div>
      <div className="Product" style={style}  >
        <img src={image} alt="thanks"  style={{ backgroundColor: "lightblue", height: "200px", width:"200px"}} />
        Location : {location} <br />
        Price : {price} <br />
        {price > 10000 ? <p>"Discount of 10%"</p> : null}
        Days : {day}
        <br />
        activities: {activities}
        
      </div>
    </div>
  );
}

export default Product;



