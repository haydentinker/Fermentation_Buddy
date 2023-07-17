import {React,useEffect} from "react";
import { ProjectWrapper } from "./pages/ProjectWrapper";
import './static/App.css'
import { NavBar } from "./components/NavBar";
import {Footer} from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import { Calendar } from "./pages/Calendar";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
function App() {

  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      document.body.appendChild(bubble);
      const randomX = Math.random() * window.innerWidth; // Generate random X coordinate
      const randomY = Math.random() * window.innerHeight; // Generate random Y coordinate
      bubble.style.left = `${randomX}px`; // Set the left position
      bubble.style.top = `${randomY}px`; // Set the top position
      setTimeout(() => {
        bubble.remove();
      }, 10000);
    };

    const intervalId = setInterval(createBubble, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <NavBar/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<ProjectWrapper/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </div>
      </>
    );
}

export default App;
