import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./scr/Header"; 
import Footer from "./scr/Footer"; 
import Home from "./scr/Home";
import About from "./scr/About";
import Services from "./scr/Services";
import Reviews from "./scr/Reviews";
import Contact from "./scr/Contact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
