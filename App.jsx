import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./scr/Home.jsx";
import About from "./scr/About.jsx";
import Services from "./scr/Services.jsx";
import Reviews from "./scr/Reviews.jsx";
import Contact from "./scr/Contact.jsx";
import Header from "./scr/Header.jsx"; 
import Footer from "./scr/Footer.jsx";
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
