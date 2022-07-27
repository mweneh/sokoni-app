import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4" href="#">
            FRESH COLLECTIONS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
               About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacts
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a href="" className="btn btn-outline-dark">
               <i className="fa fa-sign-in me-2"></i> Login</a>
               <a href="" className="btn btn-outline-dark ms-2">
               <i className="fa fa-user-plus me-2"></i> Register</a>
               <a href="" className="btn btn-outline-dark ms-2">
               <i className="fa fa-cart-plus me-2"></i> Cart(0) </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
