import { React } from "react";
import { ProjectWrapper } from "./pages/ProjectWrapper";
import './css/App.css'
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Calendar } from "./pages/Calendar";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from './config';
function App() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  getDb(db);
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectWrapper />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}
async function getDb(db) {
  console.log(db)
}
export default App;
