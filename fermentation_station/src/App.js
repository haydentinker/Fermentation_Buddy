import { React } from "react";
import { ProjectWrapper } from "./pages/ProjectWrapper";
import './css/App.css'
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Calendar } from "./pages/Calendar";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { AuthContextProvider } from "./context/AuthContext";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function App() {
  
  return (
    <>
      <AuthContextProvider>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectWrapper />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      </AuthContextProvider>
    </>
  );
}
export default App;