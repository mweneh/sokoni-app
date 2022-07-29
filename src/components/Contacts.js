import React from "react";
import Products from "./Products";

function Home() {
  return <div className="hero">
    <div className="card text-white border-0 bg-dark">
      <img src="https://img.freepik.com/premium-photo/chicken-feathers-soft-blur-style-background-abstract-art_55716-1887.jpg?size=626&ext=jpg" className="card-img" alt="Background" height='400px' width={'400px'}/>
      <div className="card-img-overlay d-flex flex-column ">
        <div className="container">
        <p className="card-text lead fs-2">
        <select class="form-select" aria-label="Default select example">
  <option selected>Get In Touch </option>
  <option value="1">E-mail</option>
  <option value="2">Phone</option>
  <option value="3">SMS</option>
  <option value="4">Twitter</option>

</select>
        </p>
        </div>
      </div>
    </div>
 
  </div>;
}

export default Home;
