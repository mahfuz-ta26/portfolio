import { Routes, Route } from "react-router-dom"
import Home from "./pages/dashboard/Home";
import Contact from "./pages/dashboard/Contact";
import Projects from "./pages/dashboard/Projects";
import Techknowledgy from "./pages/dashboard/Techknowledgy";
import About from "./pages/dashboard/About";
import DashBoard from "./pages/dashboard/DashBoard";
import { useState } from "react";
import AdminPanel from "./pages/dashboard/AdminPanel";
import Experience from "./pages/dashboard/Experience";


function App() {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="app-holder">
      <Routes>
        <Route path="" element={<DashBoard isOpen={isOpen} setIsOpen={setIsOpen}/>}>
          <Route index  element={<Home isOpen={isOpen} setIsOpen={setIsOpen}/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="techknowledgy" element={<Techknowledgy/>}/>
          {/* <Route path="experience" element={<Experience/>}/> */}
          {/* <Route path="admin" element={<AdminPanel/>}/> */}
        </Route> 
      </Routes>
    </div>
  );
}


export default App;
