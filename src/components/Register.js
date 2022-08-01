import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
export default function Register() {
  const history = useHistory()
  const handleClick =(e)=>{
      e.preventDefault()
      history.push('/login')
  }
 
    
    return (
      <div className="d-flex justify-content-center mb-7 pb-6 py-4">
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <NavLink onClick={handleClick} to="/sign-in">sign in?</NavLink>
        </p>
      </form>
      </div>
    )
  }
