import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/home">Home Page</Link></li>
        <li><Link to="/register">User Registration</Link></li>
        <li><Link to="/software-owner-registration">Software Owner Registration</Link></li> {/* Bu bağlantıyı güncelledik */}
        <li><Link to="/software-listing">Software Listing</Link></li> {/* Yeni bağlantıyı ekledik */}
        <li><Link to="/blogpage">Blog Page</Link></li>
        <li><Link to="/usabilitypage">Usability Page</Link></li>
        <li><Link to="/login">Login Page</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
