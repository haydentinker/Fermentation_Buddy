import React from 'react';
import '../css/NavBar.css';
import logo from '../images/fermentation_station_logo.png';
import {Link} from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <div className='left-container'>
      <img className='logo' src={logo} alt='fermentation station logo'/>
      <ul>
        <li>
          <Link to="/">Fermentation Buddy</Link>
        </li>
        </ul>
      </div>
      <div className='right-container'>
      <ul>
        
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/profile">Log In</Link>
        </li>
      </ul>
      </div>
      </nav>)
}
