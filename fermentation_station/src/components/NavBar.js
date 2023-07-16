import React from 'react';
import '../static/NavBar.css';
import logo from '../images/fermentation_station_logo.png';
export const NavBar = ({changePage}) => {
  return (
    <nav>
      <div className='left-container'>
      <img className='logo' src={logo} alt='fermentation station logo'/>
      <ul>
        <li
          onClick={() => changePage('home')}
        >
          <h1>Fermentation Buddy</h1>
        </li>
        </ul>
      </div>
      <div className='right-container'>
      <ul>
        
        <li
          
          onClick={() =>  changePage('Projects')}
        >
          <h2>Projects</h2>
        </li>
        <li
          onClick={() => changePage('Calendar')}
        >
          <h2>Calendar</h2>
        </li>
        <li
          onClick={() => changePage('Profile')}
        >
          <h2>Profile</h2>
        </li>
      </ul>
      </div>
      </nav>)
}
