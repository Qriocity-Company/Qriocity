// App.js
import React , {useState } from "react"
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import OurCourses from "./pages/OurCourses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import { Footer } from "./components/Footer";
import Webinar from "./pages/Webinar";
import Blog from "./pages/Blog";
import BlogItem from "./components/BlogItem"

function App() {
 
  return (
    <Router>
      <div className="bg-[rgb(0,0,0)] z-50 justify-center items-center flex flex-col overflow-hidden">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<OurCourses />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/webinar" element={<Webinar />} />
          {/* <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:blog" element={<BlogItem />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
