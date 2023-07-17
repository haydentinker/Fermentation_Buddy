import {React} from 'react'
import "../static/Footer.css";
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-div'>
    <ul>
        <li>
          <Link to="/">Fermentation Buddy</Link>
        </li>
        </ul>
        </div>
        <div className='footer-div'>    
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
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
        </div>
        </div>
   
  )
}
