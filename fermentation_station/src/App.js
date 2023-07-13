import React from "react";
import { ProjectWrapper } from "./components/ProjectWrapper";
import './static/App.css'
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <>
    <div className='container'>
      <NavBar/>
      </div>
      <div className='container'>
      <ProjectWrapper/>
      </div>
      </>
    );
}

export default App;
