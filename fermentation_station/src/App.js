import {React} from "react";
import { ProjectWrapper } from "./components/ProjectWrapper";
import './static/App.css'
import { NavBar } from "./components/NavBar";
import {Footer} from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import { Calendar } from "./components/Calendar";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
function App() {
  return (
    <>
    <div className='container'>
      <NavBar/>
      </div>
      <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<ProjectWrapper/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </div>
      <div className="container"><Footer/></div>
      
      </>
    );
}

export default App;
