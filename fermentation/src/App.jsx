import { React } from "react";
import { ProjectWrapper } from "./pages/ProjectWrapper";
import './css/App.css'
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Calendar } from "./pages/Calendar";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { UserAuth } from "./context/AuthContext";


function App() {
  const {user,googleSignIn}=UserAuth();
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          < Route path="/projects" element={<ProjectWrapper/>} />
        </Routes>
      </div>
    </>
  );
}
export default App;