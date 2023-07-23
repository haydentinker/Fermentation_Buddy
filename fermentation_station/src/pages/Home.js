import {React,useEffect} from 'react'
import { createBubble } from '../animations/createBubble';
import '../css/Home.css';
import { UserAuth } from '../context/AuthContext';
export const Home = () => {
  const {user}=UserAuth();
  useEffect(() => { 
    const pickles=document.querySelectorAll('.pickle');
    pickles.forEach(element=>{
      element.remove();
    })
    document.body.style.backgroundPosition='top';
    
    const intervalId = setInterval(createBubble, 1000);
    return () => {
      clearInterval(intervalId);
    };
    
  }, []);
  
  return (
    
    <div className='home'>
      <h1>Hello {user?.displayName}</h1>
      <h1>Discover, Create, and Connect with Fermentation Buddy</h1>
      <h2>Never forget about your creations again!</h2>
      <h2>Get Started Today</h2>
    </div>
    
  )
}
