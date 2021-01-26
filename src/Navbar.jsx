import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
    return (  
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed  ">
              <Link to="/"> 
        <a className="navbar-brand" href="#">food app</a>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="#navbarNav ">
          <ul class="navbar-nav d-flex  justify-content-between ml-auto">
            <li class="nav-item ">
              
              <a class="nav-link" href="#">Home </a>
             
            </li>
            <Link to="/aboutus">
            <li class="nav-item">
              <a class="nav-link" href="#">ABOUT US</a>
            </li>
            </Link>
            <li class="nav-item">
              <a class="nav-link" href="#">CONTACT US</a>
            </li>
        
            <Link to="/cart">
            <li class="nav-item">
              <a class="nav-link " href="#"><i className="fas fa-cart-arrow-down"></i></a>
            </li>
            </Link>
          </ul>
        </div>
      </nav>
      </div>
    
    );
}
 
export default Navbar;
