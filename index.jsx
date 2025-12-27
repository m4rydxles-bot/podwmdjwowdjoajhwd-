import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 
import App from "./App.jsx";
const root = ReactDOM.createRoot(document.getElementById("root")); // Buradaki "root" id'si html ile aynı olmalı
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
