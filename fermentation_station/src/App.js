import {React, useState} from "react";
import { ProjectWrapper } from "./components/ProjectWrapper";
import './static/App.css'
import { NavBar } from "./components/NavBar";
import {Footer} from "./components/Footer";
function App() {
  const [page,setPage]=useState("home");
  const changePage =value=>{
    console.log(value);
    setPage(value);
  }
  return (
    <>
    <div className='container'>
      <NavBar changePage={changePage}/>
      </div>
      <div className='container'>
      <ProjectWrapper page={page}/>
      </div>
      <div className="container"><Footer changePage={changePage}/></div>
      
      </>
    );
}

export default App;
