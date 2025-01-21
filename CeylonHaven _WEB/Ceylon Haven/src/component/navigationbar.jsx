import React from "react";
import { Link } from "react-router-dom";
import "./Navigationbar.css"; 

const NavigationBar = () => {
  return (
    <header>
      {/* Logo Section */}
      <div className="logo">
        <span className="ceylon">Ceylon</span>
        <span className="haven">Haven</span>
      </div>
      
      {/* Navigation Links */}
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
          <Link to="/login page">
                <span className="profile-icon"></span>
              </Link>
            </li>


        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
