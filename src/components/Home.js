import React from "react";
import Products from "./Products";

function Home() {
  return <div className="hero">
    <div className="card text-white border-0 bg-dark">
      <img src="https://img.freepik.com/free-photo/details-black-woman-wearing-grey-leather-coat-posing-beige-background-brown-bag-white-sunglasses-hands-autumn-winter-fashion-concept_273443-139.jpg?size=626&ext=jpg" className="card-img" alt="Background" height='400px' width={'400px'}/>
      <div className="card-img-overlay d-flex flex-column ">
        <div className="container">
        <h5 className="card-title display-3 fw-bolder">NEW STOCK</h5>
        <p className="card-text lead fs-2">
          Check Out Cool Trends!
        </p>
        </div>
      </div>
    </div>
    <Products />
  </div>;
}

export default Home;
