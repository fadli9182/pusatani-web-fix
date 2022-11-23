import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import Contact from "./components/pages/Kontak/Contact";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
// import Taniinfo from "./components/pages/TaniInfo/Taniinfo";
// import Tentang from "./components/pages/Tentang/Tentang";
// import TaniShop from "./components/pages/TaniShop/TaniShop";
import DaftarToko from "./components/pages/DaftarToko";
import DetailPost from "./components/pages/TaniInfo/detailPost";
import DetailShop from "../src/components/pages/TaniShop/detailShop";
import EditProfil from "./components/pages/user/editProfil";
// import Homepage from "./components/pages/home/Homepage";
import DetailPabrik from "./components/pages/TaniShop/detailPabrik";
import Page404 from "./components/Page404";
import DaftarPabrik from "./components/pages/DaftarPabrik";
import AkunPabrik from "./components/pages/user/AkunPabrik";
import AkunToko from "./components/pages/user/AkunToko";
import ArticleById from "./components/pages/TaniInfo/ArticleById";
import LoadingPage from "./components/LoadingPage";
const Homepage = lazy(() => import("./components/pages/home/Homepage"));
const Taniinfo = lazy(() => import("./components/pages/TaniInfo/Taniinfo"));
const TaniShop = lazy(() => import("./components/pages/TaniShop/TaniShop"));
const Tentang = lazy(() => import("./components/pages/Tentang/Tentang"));
const Contact = lazy(() => import("./components/pages/Kontak/Contact"));
const Admin = lazy(() => import("./components/pages/Admin"));
const AdminLogin = lazy(() => import("./components/pages/AdminLogin"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Homepage />
            </Suspense>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/daftartoko" element={<DaftarToko />} />
        <Route path="/daftarpabrik" element={<DaftarPabrik />} />
        <Route path="/category" element={<ArticleById />} />
        <Route
          path="/admdashboard"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Admin />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Tentang />
            </Suspense>
          }
        />
        <Route
          path="/info"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Taniinfo />
            </Suspense>
          }
        />
        <Route
          path="/shop"
          element={
            <Suspense fallback={<LoadingPage />}>
              <TaniShop />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Contact />
            </Suspense>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<DetailPost />} />
        <Route path="/shop/:id" element={<DetailShop />} />
        <Route path="/pabrik/:id" element={<DetailPabrik />} />
        <Route path="/profil" element={<EditProfil />} />
        <Route path="/profilPabrik" element={<AkunPabrik />} />
        <Route path="/profilToko" element={<AkunToko />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
