import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addCart} from "../redux/action/index";

export default function Product() {

    const [product, setProduct] =useState([])
    const {id}=useParams()
    console.log(id)
    const [loading,setLoading]= useState(false)
    const API_URL = `https://fakestoreapi.com/products/${id}`;

    const dispatch= useDispatch()
    const addItem = (product)=>{console.log(product)
        return dispatch(addCart(product)) 
        
    }

    useEffect(()=>{
        const getProduct = async ()=>{
            setLoading(true)
            const resp = await fetch(API_URL)
            setProduct(await resp.json())
            setLoading(false)
        }
        getProduct()
    },[])

    function Loading() {
        return (
            <>
           <div className="col-md-6">
            <Skeleton height={400}/>
           </div>
           <div className="col-md-6">
            <Skeleton height={50} width={300} style={{lineHeight:2}} />
            <Skeleton height={25} width={150}/>
            <Skeleton height={50}/>
            <Skeleton height={150}/>
            <Skeleton height={50} width={100} />
            <Skeleton height={50} width={100} style={{marginLeft:6}} />
           </div>
            </>
        )
    }

    const DisplayItem =()=> {
        return (
    <div>
        <div className="col-md-6">
            <img src={product.image} alt={product.title} height='400px' width='400px' />
        </div>
        <div className=" col-md-6">
            <h4 className=" text-black-40">{product.category} </h4>
            <h2 className="display-5">{product.title}</h2>
            <p className="lead fw-bolder">Rating {product.rating && product.rating.rate} </p>
            <i className=" fa fa-star"></i>
            <h4 className="display-6 fw-bolder "> $ {product.price} </h4>
            <p className="lead"> {product.description}</p>
            <button type="button" class="btn btn-info px-3 py-2 me-2" 
            onClick={()=>addItem(product)}>Add to Cart</button>
            <NavLink to='/cart' class="btn btn-primary px-3 py-2 ">View Cart</NavLink>
        </div>
    </div>)
    }
    return (
        <div>
            <div className="container py-4">
                <div className="row py-4">
                    {loading ? <Loading/>: <DisplayItem/>}

                </div>
            </div>
        </div>
    )
}