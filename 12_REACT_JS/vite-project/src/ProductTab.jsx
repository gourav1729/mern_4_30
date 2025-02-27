import Product from "./Product";

function ProductTab() {
  let activities = [
    "bungy jumping",
    "rafting",
    "trekking",
    "paragliding",
    "safari",
    "adncsdn cnm sdvmndf ",
  ];

  let activities2 = [
    "arti",
    "yoga",
    "ganga snan",
    "temple visit",
    "ashram visit",
  ];

  let activities1 = activities.map((activity) => {
    return <li>{activity}</li>;
  });
  let activities3 = activities2.map((activity) => {
    return <li>{activity}</li>;
  });

  console.log(activities1);

  return (
    <>
      {/* <h1>My producttab is working</h1> */}

      <Product
        location="MUSSOORIE"
        price="12000"
        day="3 days"
        activities={activities1}
      />
      <Product
        location="MANALI"
        price="18000"
        day="4 days"
        activities={activities3}
      />
      <Product
        location="SHIMLA"
        price="14000"
        day="2 days"
        activities={activities1}
      />
      <Product
        location="OOTY"
        price="9000"
        day="1 day"
        activities={activities3}
      />
      <Product
        location="DARJEELING"
        price="16000"
        day="3 days"
        activities={activities1}
      />
      <Product
        location="GANGTOK"
        price="20000"
        day="5 days"
        activities={activities3}
      />
      <Product
        location="JAIPUR"
        price="8000"
        day="2 days"
        activities={activities1}
      />
      <Product
        location="UDAIPUR"
        price="17000"
        day="4 days"
        activities={activities3}
      />
      <Product
        location="JODHPUR"
        price="11000"
        day="2 days"
        activities={activities1}
      />
      <Product
        location="AGRA"
        price="7500"
        day="1 day"
        activities={activities3}
      />
      <Product
        location="VARANASI"
        price="13500"
        day="3 days"
        activities={activities1}
      />
      <Product
        location="KOLKATA"
        price="9500"
        day="2 days"
        activities={activities3}
      />
      <Product
        location="CHENNAI"
        price="15500"
        day="3 days"
        activities={activities1}
      />
      <Product
        location="MUMBAI"
        price="22000"
        day="5 days"
        activities={activities3}
      />
      <Product
        location="GOA"
        price="25000"
        day="4 days"
        activities={activities1}
      />
      <Product
        location="HYDERABAD"
        price="13000"
        day="2 days"
        activities={activities3}
      />
      <Product
        location="BANGALORE"
        price="14500"
        day="3 days"
        activities={activities1}
      />
      <Product
        location="KOCHI"
        price="12000"
        day="2 days"
        activities={activities3}
      />
      <Product
        location="PONDICHERRY"
        price="10500"
        day="1 day"
        activities={activities1}
      />
      <Product
        location="ANDAMAN"
        price="30000"
        day="6 days"
        activities={activities3}
      />
    </>
  );
}

export default ProductTab;

