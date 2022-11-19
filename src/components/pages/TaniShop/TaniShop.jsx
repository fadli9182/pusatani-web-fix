import React from "react";
import "./tanishop.css";
import Foto1 from "../../asset/image/hijrahpupuk.jpeg";
import Foto2 from "../../asset/image/Pberas.jpeg";
import Header from "../../partials/header/Header";
import Footer from "../../partials/footer/Footer";
import HargaKomoditas from "./HargaKomoditas";
import Pabrik from "./Pabrik";
import Toko from "./Toko";

const TaniShop = () => {
  return (
    <>
      <div className="shop--bg">
        <Header />
        <div className="text-center judul--shop">
          <h1>Tani Shop</h1>
          <p>Informasi Mengenai Harga Padi dan Pupuk</p>
        </div>
      </div>
      <div className="container shop--body">
        <div className="text-center pb-5">
          <h1 style={{ fontWeight: "700" }}>Pabrik dan Toko </h1>
          <p>Yang Sudah Menjadi Partner Kami</p>
        </div>
        <h2>Daftar Nama Toko</h2>
        <Toko />

        <h2>Daftar Nama Pabrik</h2>
        <Pabrik />

        <HargaKomoditas />
      </div>
      <Footer />
    </>
  );
};

export default TaniShop;
