import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import About from "./About.js";
import Services from "./Services.js";
import Reviews from "./Reviews.js";
import Contact from "./Contact.js";

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
