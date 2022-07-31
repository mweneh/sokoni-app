import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { removeCart } from "../redux/action"

export default function Cart() {
    const state = useSelector((state) => state.cartHandler)
    const dispatch = useDispatch()

    const handleClose = (item)=>{
        dispatch(removeCart(item))
    }
    const cartItems = (cartItem) =>{
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id} >
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height={200} />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title} </h3>
                            <p className="lead fw-bold ">$ {cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
     const cartEmpty = () =>{
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-6"  >
                <div className="container py-4">
                    <h2>Your Cart is Empty!</h2>
                </div>
            </div>
        )
     }
     const button = () =>{
        return(
            <div className="container">
                <div className="row">
                    <NavLink to='/checkout' className='btn mx-auto btn-outline-success mb-5 w-25'>Checkout Now</NavLink>
                </div>
            </div>
        )
     }
    return(
        <div>
            {state.length === 0 && cartEmpty()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </div>
    )
}