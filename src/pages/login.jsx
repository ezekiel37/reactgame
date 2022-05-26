import React from 'react'
import './pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="pagecontainer">
    <Navbar/>
    <div className="formcontainer">
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">
         Login
        </h5>
        <p className="card-text">
         Join millions of others playing and earning already...
        </p>
    </div>
      {/* form */}
      <form>
       <div className="my-4 form-group">
           <input type="email" className="form-control" id="email"
           placeholder="Email address"/>
       </div>
       <div className="mb-4 form-group">
           <input type="password" className="form-control" id="password"
           placeholder="Password"/>
       </div>
       <div className="button-section">
        <button type="submit" 
        className="btn btn-secondary">Login</button>
        <Link className="card-link" to="/">Forgot Password?</Link>
       </div>
      </form>
      <div className="card-subtitle">
          <p>Don't have an account yet?
              <Link className="card-link" to="#">Create one</Link>
          </p>
      </div>
      {/* end form */}
    </div>
    </div>
    
    </div>
  )
}

export default Login