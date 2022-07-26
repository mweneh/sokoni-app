import React from "react";

function Home() {
  return <div className="hero">
    <div class="card text-white border-0 bg-dark">
      <img src="https://img.freepik.com/free-photo/details-black-woman-wearing-grey-leather-coat-posing-beige-background-brown-bag-white-sunglasses-hands-autumn-winter-fashion-concept_273443-139.jpg?size=626&ext=jpg" class="card-img" alt="Background" height='400px' width={'400px'}/>
      <div class="card-img-overlay d-flex flex-column ">
        <div className="container">
        <h5 class="card-title display-3 fw-bolder">NEW STOCK</h5>
        <p class="card-text lead fs-2">
          Check out cool trends
        </p>
        </div>
      </div>
    </div>
  </div>;
}

export default Home;
