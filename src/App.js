import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/pages/Admin";
import AdminLogin from "./components/pages/AdminLogin";
import Contact from "./components/pages/Kontak/Contact";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Taniinfo from "./components/pages/TaniInfo/Taniinfo";
import Tentang from "./components/pages/Tentang/Tentang";
import TaniShop from "./components/pages/TaniShop/TaniShop";
import DaftarToko from "./components/pages/DaftarToko";
import DetailPost from "./components/pages/TaniInfo/detailPost";
import DetailShop from "./components/pages/TaniShop/detailShop";
import EditProfil from "./components/pages/editProfil";
import Homepage from "./components/pages/home/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/daftartoko" element={<DaftarToko />} />
        <Route path="/admdashoard" element={<Admin />} />
        <Route path="/about" element={<Tentang />} />
        <Route path="/info" element={<Taniinfo />} />
        <Route path="/shop" element={<TaniShop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<DetailPost />} />
        <Route path="/detailshop" element={<DetailShop />} />
        <Route path="/profil" element={<EditProfil />} />
      </Routes>
    </>
  );
}

export default App;
