import React from "react";
import "./Product.css";

function Product({ location, price, day, activities }) {
  let style = { backgroundColor: price > 10000 ? "red" : "grey" };

  

  return (
    <div>
      <div className="Product" style={style}>
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
