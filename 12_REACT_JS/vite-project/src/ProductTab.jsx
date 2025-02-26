import Product from "./Product";

function ProductTab() {

  // ol 
  // ul
 
  // let activities = [ <li>"bungy jumping"</li>,  <li>"rafting"</li>, <li> "trekking"</li>, <li>"paragliding"</li>,<li> "safari"</li>];

  // let activities1 = [ <li>"bungy jumping"</li>,  <li>"rafting"</li>, <li> "trekking"</li>, <li>"paragliding"</li>,<li> "safari"</li>];

  let activities = ["bungy jumping", "rafting", "trekking", "paragliding", "safari", "adncsdn cnm sdvmndf "];

  let activities2 = ["arti", "yoga", "ganga snan", "temple visit", "ashram visit"];

  let activities1  = activities.map((activity) => {
    return <li>{activity}</li>
  })
  let activities3  = activities2.map((activity) => {
    return <li>{activity}</li>
  })

  console.log(activities1);


  return (
    <>
      {/* <h1>My producttab is working</h1> */}

      <Product location="HARDIDWAR" price="5000" day="2 days"  activities={activities3} />
      <Product location="RISHIKESH" price="10000" day="1 days" activities={activities1}/>
      <Product location="NAINITAL" price="5000" day="1 days"/>
      <Product location="DHERADUN" price="5000" day="1 days"/>
      <Product location="ROORKEE" price="5000" day="1 days"/>
    </>
  );
}

export default ProductTab;


// function sum(a, b) {

//   return a + b;
// }

// sum(10, 20)
// sum(10, 20)
// sum(10, 20)
// sum(10, 20)
// sum(10, 20)

// npm create vite@latest 



// ls -> list
// pwd -> present working directory
// cd -> change directory
// mkdir -> make directory
// touch -> create file 


