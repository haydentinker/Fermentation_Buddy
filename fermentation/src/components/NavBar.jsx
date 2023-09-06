import React from 'react';
import '../css/NavBar.css';
import logo from '../images/fermentation_station_logo.png';
import {Link} from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
export const NavBar = () => {
  const { user, googleSignIn,logOut } = UserAuth();
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
          {user? <Link className="link" onClick={logOut}>Log Out</Link>:<Link onClick={googleSignIn}>Log In</Link>}
        </li>
      </ul>
      </div>
      </nav>)
}
