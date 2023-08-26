import React from "react";
import "./App.css";
import Maitreya from "./pages/Maitreya"; 


import { Routes, Route } from "react-router-dom";
import Lakshmi from "./pages/Lakshmi";

const App = () => {
  return (
      <div
        className="app-container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
        }}
      >
        <Routes>
        <Route path="/" element={<Maitreya /> } />
        <Route path="/Lakshmi" element={<Lakshmi/>} />
        </Routes>
      </div>
  );
};

export default App;