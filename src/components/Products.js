import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";


function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  
 
  const API_URL = "https://fakestoreapi.com/products";
  useEffect(() => {
     let componentMounted = true;
     
    const getItems = async () => {
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
    getItems();
  }, []);

  function Loading() {
    return (<>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
    </>)
  }

  const filterItem = (cat) =>{
    const updateList = data.filter((n) => n.category === cat.toLowerCase())
    setFilter(updateList)
    // console.log('hey')
  }
  const DisplayItems = () => (
    <div className="row ">
      <div className="buttons d-flex justify-content-center mb-4 pb-4">
        <button className="btn btn-lg btn-outline-primary me-2" onClick={()=>setFilter(data)}>All</button>
        <button className="btn btn-lg btn-outline-primary me-2" onClick={()=>filterItem("Men's Clothing")}> Men's Clothing</button>
        <button className="btn btn-lg btn-outline-primary me-2" onClick={()=>filterItem("Women's Clothing")}> Women's Clothing</button>
        <button className="btn btn-lg btn-outline-primary me-2" onClick={()=>filterItem('Electronics')}> Electronics</button>
        <button className="btn btn-lg btn-outline-primary me-2" onClick={()=>filterItem('Jewelery')}> Jewelery</button>
      </div>
      {filter.map((item) => {
        return (
          <div className="col-4" >
            <div className="col-md-5 mb-4 " style={{width: 20 + "rem", height: 25 + "rem"}}>
              <div className="card h-100 text-center p-4" key={item.id} >
                <img src={item.image }className="card-img-top" alt={item.title} height='200px' width={200} />
                <div className="card-body">
                  <h5 className="card-title mb-0">{item.title.substring(0,12)} ...</h5>
                  <p className="card-text lead fw-bold">
                   ${item.price}
                  </p>
                  <NavLink to={`/products/${item.id}`} className="btn btn-primary">
                    More Details
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
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
      <div className='row  justify-content-center ' id="grid">
        {loading ? <Loading /> : <DisplayItems />}
      </div>
    </div>
  );
}

export default Products;
