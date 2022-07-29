import React from "react";

function Home() {
  return <div className="hero">
    <div className="card text-white border-0 bg-dark">
      <img src="https://img.freepik.com/premium-photo/colour-smoke-background_71163-197.jpg?size=626&ext=jpg" className="card-img" alt="Background" height='400px' width={'400px'}/>
      <div className="card-img-overlay d-flex flex-column ">
        <div className="container">
        <h5 className="card-title display-3 fw-bolder">About Us</h5>
        <p className="card-text lead fs-2">
        The Sokoni Store caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find anywhere else. We are constantly curating fresh new collections and looking for the next big thing our customers will love.
        Founded in Nairobi circa 2022, we are proud to be your Online Retail Store that you can rely on for our expert service and care.
        </p>
        </div>
      </div>
    </div>
    <div className="container fw-bold">
        <h2>Our Mission is to make a difference through our branding by staying ahead of the fashion trends, defining style and giving customers what they want.</h2>
    </div>
  </div>;
}

export default Home;
