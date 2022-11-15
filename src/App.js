
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/pages/Admin";
import AdminLogin from "./components/pages/AdminLogin";
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
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admdashoard" element={<Admin />} />
        <Route path="/about" element={<Tentang />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
