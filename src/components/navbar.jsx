import React from 'react'
import { Link } from 'react-router-dom'
import MysteryLogo from '../assets/images/mysterylogo.svg'
function Navbar() {
  return (
    <div className="nav-bar">
      <div className="brand">
          <img src={MysteryLogo} alt=""/>
      </div>
      <div className="navlinks">
      <ul>
        <li><Link className="menulink" to="/">Home</Link></li>
        <li><Link className="menulink" to="#">Community</Link></li>
        <li><Link className="menulink" to="#">Whitepaper</Link></li>
        <li><Link className="menulink" to="/login">Login</Link></li>
        <li><Link className="menulink" to="/signup">Register</Link></li>
      </ul>    
      </div> 
      <div>
         <Link className ="navbutton btn btn-secondary" to="#">Buy Token</Link>
      </div>
    </div>
  )
}

export default Navbar