import React from "react";
import NavBar from "./component/NavBar/NavBar";
import Contact from "./Component/Pages/Contact";
import About from "./Component/Pages/About";
import { Routes, Route } from 'react-router-dom';
import Home from "./Component/Pages/Home";

export default function App() {
  return (
    <div>

      <NavBar />
      <div className="content"> {/* Added container with padding */}
        <Routes>
          <Route path="/dream-ahead-frontend/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/courses" element={<Courses />} /> */}
        </Routes>
      </div>
    </div>
  );
}
