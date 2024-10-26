import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/web_logo.png';

const Navbar = ({ isLoggedIn, onLogout, userName }) => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/technique">Technique</Link></li>
        <li><Link to="/match">Match</Link></li>
        {isLoggedIn ? (
          <>
            <li><Link to="/my-center">My Center</Link></li>
            <li><button className="signup-btn" onClick={onLogout}>Log Out</button></li>
          </>
        ) : (
          <li><Link to="/sign-in" className="signup-btn">Sign Up/Log In</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
