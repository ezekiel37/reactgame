import React from 'react'
import './pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <div className="pagecontainer">
    <Navbar/>
    <div className="formcontainer">
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">
         Create an account
        </h5>
        <p className="card-text">
         Join millions of others playing and earning already...
         your email is safe
        </p>
    </div>
      {/* form */}
      <form>
      <div className="my-4 form-group">
           <input type="text" className="form-control" id="full-name"
           placeholder="Full Name"/>
       </div>
       <div className="my-4 form-group">
           <input type="email" className="form-control" id="email"
           placeholder="Email address"/>
       </div>
       <div className="mb-4 form-group">
           <input type="password" className="form-control" id="password"
           placeholder="Password"/>
       </div>
       <div className="mb-4 form-group">
           <input type="password" className="form-control" id="confirm-password"
           placeholder="Confirm Password"/>
       </div>
       <div className="button-section">
        <button type="submit" 
        className="btn btn-secondary">Sign up</button>
        
       </div>
      </form>
      <div className="card-subtitle">
          <p>Already have an account?
              <Link className="card-link" to="#">Login</Link>
          </p>
      </div>
      {/* end form */}
    </div>
    </div>
    
    </div>
  )
}

export default Signup