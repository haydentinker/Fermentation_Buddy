import React from "react";
import { ProjectWrapper } from "./components/ProjectWrapper";
import './static/App.css'
import { NavBar } from "./components/NavBar";
import {Footer} from "./components/Footer";
function App() {
  return (
    <>
    <div className='container'>
      <NavBar/>
      </div>
      <div className='container'>
      <ProjectWrapper/>
      </div>
      <div className="container"><Footer/></div>
      
      </>
    );
}

export default App;
