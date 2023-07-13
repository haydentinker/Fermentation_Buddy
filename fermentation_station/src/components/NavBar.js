import React from 'react';
import '../static/NavBar.css';
import logo from '../images/fermentation_station_logo.png';
export const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='left-container'>
      <img className='logo' src={logo} alt='fermentation station logo'/>
      <h1>Fermentation Buddy</h1>
      </div>
      <div className='right-container'>
      <h2>Projects</h2>
      <h2>Calendar</h2>
      <h2>Profile</h2>
      </div>
      </div>
  )
}
