import React from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css";
import Logo from '../images/logo.png'


function Navbar() {
  return (
      <nav>
        <div class="nav-container">
            <ul> 
              <Link to="/" className="Home"><li>Home</li></Link>
              <Link to="/Products" className="Products"><li>Products</li></Link>
              <Link to="/Contact" className="Contact"><li>Contact</li></Link>
              <img src={Logo}  className="logo" alt="logo" />
              <i class="material-icons">add_shopping_cart</i>
              <i class="material-icons">person_outline</i>
            </ul>
        </div>
        
        
        </nav>
  )
}

export default Navbar
