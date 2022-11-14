
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/pages/Contact";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Tentang from "./components/pages/Tentang";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<Tentang />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
