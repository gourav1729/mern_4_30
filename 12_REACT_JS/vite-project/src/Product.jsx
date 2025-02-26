import React from "react";
import "./Product.css";

function Product({ location, price, day,  activities}) {
  return (
    <div>
      <div className="Product">
        Location : {location} <br />
        Price : {price} <br />
        Days : {day}<br />
        activities: { activities}

        
        
        </div>

      {/* <h1>HARIDWAR</h1>
        <h1>Price : 2</h1>


        <hr />

        <h1>Bhramtal</h1>
        <h1>5 days</h1> */}
    </div>
  );
}

export default Product;

// function Product(a, b) {}

// product(2, 3)
