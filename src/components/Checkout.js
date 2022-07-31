import { useSelector } from "react-redux"

const Checkout = ()=>{
    const state = useSelector((state) => state.cartHandler)
    
    let total = 0
    const itemList = (item) => {
        total = total + item.price

        return(
            <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">{item.title}</h6>
            </div>
            <span className="text-muted">${item.price}</span>
          </li>
        )
    }

    return(
        <div>
            <div className="container py-5">
            <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">{state.length}</span>
        </h4>
        <ul className="list-group mb-3">
            {state.map(itemList)}
          
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${total}</strong>
          </li>
        </ul>

        <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code"></input>
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </form>
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>

        <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"></input>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""></input>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-md-3">
              <label for="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" placeholder="" required=""></input>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>

            <h4 className="mb-3">Payment</h4>

<div className="my-3">
  <div className="form-check">
    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required=""></input>
    <label className="form-check-label" for="credit">Credit card</label>
  </div>
  <div className="form-check">
    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required=""></input>
    <label className="form-check-label" for="debit">Debit card</label>
  </div>
  <div className="form-check">
    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required=""></input>
    <label className="form-check-label" for="paypal">PayPal</label>
  </div>
  <div className="form-check">
    <input id="mpesa" name="paymentMethod" type="radio" className="form-check-input" required=""></input>
    <label className="form-check-label" for="paypal">Mpesa </label>
  </div>
</div>
  
<div className="row gy-3">
            <div className="col-md-6">
              <label for="cc-name" className="form-label">Name on card</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required=""></input>
              <small className="text-muted">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div className="col-md-6">
              <label for="cc-number" className="form-label">Credit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required=""></input>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-6">
              <label for="cc-number" className="form-label">Mpesa Number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required=""></input>
              <div className="invalid-feedback">
                Mpesa number is required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-expiration" className="form-label">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""></input>
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""></input>
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>

          </div>


      </div>
    </div>
</div>
    
        </div>
    )
}
export default Checkout

// import React from "react"
// const Checkout = () =>{
//     return(
//         <div className="container py-5">
//             <div className="row g-5">
//       <div className="col-md-5 col-lg-4 order-md-last">
//         <h4 className="d-flex justify-content-between align-items-center mb-3">
//           <span className="text-primary">Your cart</span>
//           <span className="badge bg-primary rounded-pill">3</span>
//         </h4>
//         <ul className="list-group mb-3">
//           <li className="list-group-item d-flex justify-content-between lh-sm">
//             <div>
//               <h6 className="my-0">Product name</h6>
//               <small className="text-muted">Brief description</small>
//             </div>
//             <span className="text-muted">$12</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between lh-sm">
//             <div>
//               <h6 className="my-0">Second product</h6>
//               <small className="text-muted">Brief description</small>
//             </div>
//             <span className="text-muted">$8</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between lh-sm">
//             <div>
//               <h6 className="my-0">Third item</h6>
//               <small className="text-muted">Brief description</small>
//             </div>
//             <span className="text-muted">$5</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between bg-light">
//             <div className="text-success">
//               <h6 className="my-0">Promo code</h6>
//               <small>EXAMPLECODE</small>
//             </div>
//             <span className="text-success">−$5</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between">
//             <span>Total (USD)</span>
//             <strong>$20</strong>
//           </li>
//         </ul>

//         <form className="card p-2">
//           <div className="input-group">
//             <input type="text" className="form-control" placeholder="Promo code"></input>
//             <button type="submit" className="btn btn-secondary">Redeem</button>
//           </div>
//         </form>
//       </div>
//       <div className="col-md-7 col-lg-8">
//         <h4 className="mb-3">Billing address</h4>
//         <form className="needs-validation" novalidate="">
//           <div className="row g-3">
//             <div className="col-sm-6">
//               <label for="firstName" className="form-label">First name</label>
//               <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: pointer;">
//                 </input>
//               <div className="invalid-feedback">
//                 Valid first name is required.
//               </div>
//             </div>

//             <div className="col-sm-6">
//               <label for="lastName" className="form-label">Last name</label>
//               <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""></input>
//               <div className="invalid-feedback">
//                 Valid last name is required.
//               </div>
//             </div>

//             <div className="col-12">
//               <label for="username" className="form-label">Username</label>
//               <div className="input-group has-validation">
//                 <span className="input-group-text">@</span>
//                 <input type="text" className="form-control" id="username" placeholder="Username" required=""></input>
//               <div className="invalid-feedback">
//                   Your username is required.
//                 </div>
//               </div>
//             </div>

//             <div className="col-12">
//               <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
//               <input type="email" className="form-control" id="email" placeholder="you@example.com"></input>
//               <div className="invalid-feedback">
//                 Please enter a valid email address for shipping updates.
//               </div>
//             </div>

//             <div className="col-12">
//               <label for="address" className="form-label">Address</label>
//               <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""></input>
//               <div className="invalid-feedback">
//                 Please enter your shipping address.
//               </div>
//             </div>

//             <div className="col-12">
//               <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
//               <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"></input>
//             </div>


//             <div className="col-md-3">
//               <label for="zip" className="form-label">Zip</label>
//               <input type="text" className="form-control" id="zip" placeholder="" required=""></input>
//               <div className="invalid-feedback">
//                 Zip code required.
//               </div>
//             </div>
//           </div>


//           <h4 className="mb-3">Payment</h4>

//           <div className="my-3">
//             <div className="form-check">
//               <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required=""></input>
//               <label className="form-check-label" for="credit">Credit card</label>
//             </div>
//             <div className="form-check">
//               <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required=""></input>
//               <label className="form-check-label" for="debit">Debit card</label>
//             </div>
//             <div className="form-check">
//               <input id="paypal" name="paymentMethod" type="number" className="form-check-input" required=""></input>
//               <label className="form-check-label" for="paypal">PayPal</label>
//             </div>
//             <div className="form-check">
//               <input id="mpesa" name="paymentMethod" type="radio" className="form-check-input" required=""></input>
//               <label className="form-check-label" for="paypal">Mpesa </label>
//             </div>
//           </div>

//           <div className="row gy-3">
//             <div className="col-md-6">
//               <label for="cc-name" className="form-label">Name on card</label>
//               <input type="text" className="form-control" id="cc-name" placeholder="" required=""></input>
//               <small className="text-muted">Full name as displayed on card</small>
//               <div className="invalid-feedback">
//                 Name on card is required
//               </div>
//             </div>

//             <div className="col-md-6">
//               <label for="cc-number" className="form-label">Credit card number</label>
//               <input type="text" className="form-control" id="cc-number" placeholder="" required=""></input>
//               <div className="invalid-feedback">
//                 Credit card number is required
//               </div>
//             </div>

//             <div className="col-md-6">
//               <label for="cc-number" className="form-label">Mpesa Number</label>
//               <input type="text" className="form-control" id="cc-number" placeholder="" required=""></input>
//               <div className="invalid-feedback">
//                 Mpesa number is required
//               </div>
//             </div>

//             <div className="col-md-3">
//               <label for="cc-expiration" className="form-label">Expiration</label>
//               <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""></input>
//               <div className="invalid-feedback">
//                 Expiration date required
//               </div>
//             </div>

//             <div className="col-md-3">
//               <label for="cc-cvv" className="form-label">CVV</label>
//               <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""></input>
//               <div className="invalid-feedback">
//                 Security code required
//               </div>
//             </div>
//           </div>


//           <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
//         </form>
//       </div>
//     </div>
// </div>
//     )
// }
// export default Checkout