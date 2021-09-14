import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
      <div>
        <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center',backgroundColor:'#35424A',padding:'10px 20px',borderBottom:'3px solid purple'}}>
          <h1>
            <span style={{color:'purple'}}>Clarusway</span>
            <span>Web Design</span>
          </h1>
          <ul>
            <li>
              <Link  className='link' to="/">Home</Link>
            </li>
            <li>
              <Link  className='link' to="/about">About</Link>
            </li>
            <li>
              <Link  className='link' to="/services">Services</Link>
            </li>
          </ul>
        </nav>
        <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center',backgroundColor:'#35424A',padding:'10px 20px'}}>
          <h2>
            <span>Subscribe To Our Newsletter</span>
          </h2>
          <div>
            <input type="email" placeholder="E-Mail" />
            <button>Subscribe</button>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;
