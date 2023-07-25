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
          <Link  className="link"to="/">Fermentation Buddy</Link>
        </li>
        </ul>
      </div>
      <div className='right-container'>
      <ul>
        
        <li>
          <Link className="link" to="/projects">Projects</Link>
        </li>
        <li>
          <Link className="link" to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link className="link" to="/profile">Log In</Link>
        </li>
      </ul>
      </div>
      </nav>)
}
