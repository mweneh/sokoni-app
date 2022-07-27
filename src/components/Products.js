import React, { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const API_URL = "https://fakestoreapi.com/products";
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(API_URL);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  function Loading() {
    return <>Loading...</>;
  }

  const ShowProducts = () => (
    <div>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-primary me-2">All</button>
        <button className="btn btn-outline-primary me-2"> Men Wear</button>
        <button className="btn btn-outline-primary me-2"> Women Wear</button>
        <button className="btn btn-outline-primary me-2"> Electronics</button>
        <button className="btn btn-outline-primary me-2"> Jewelery</button>
      </div>
      {filter.map((item) => {
        return (
          <>
            <div className="col-md-3">
              <div class="card h-100 text-center p-4" key={item.id} >
                <img src={item.image }class="card-img-top" alt={item.title}/>
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">
                   ${item.price}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bold text-center">New Arrivals</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Products;
