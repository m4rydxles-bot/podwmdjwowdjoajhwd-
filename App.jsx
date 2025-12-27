import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Bileşenlerin yollarını GitHub'daki 'src' klasörüne göre güncelledim
import Header from "./src/Header";
import Footer from "./src/Footer";

// Sayfaların yollarını GitHub'daki 'src' klasörüne göre güncelledim
import Home from "./src/Home";
import About from "./src/About";
import Services from "./src/Services";
import Reviews from "./src/Reviews";
import Contact from "./src/Contact";

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
