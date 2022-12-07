import React, { useState } from "react";
import "./tanishop.css";
import Header from "../../partials/header/Header";
import Footer from "../../partials/footer/Footer";
import HargaKomoditas from "./HargaKomoditas";
import Pabrik from "./Pabrik";
import Toko from "./Toko";
import TypewriterComponent from "typewriter-effect";

const TaniShop = () => {
  const [status, setStatus] = useState("toko");
  return (
    <>
      <div className="shop--bg">
        <Header />
        <div className="text-center judul--shop">
          <h1 className="fw-bold">
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Tani Shop"],
              }}
            />
          </h1>
          <p>Informasi Mengenai Harga Padi dan Pupuk</p>
        </div>
      </div>
      <div className="container shop--body">
        <section>
          <div className="text-center">
            <h1 className="fw-bold">Pabrik dan Toko </h1>
            <p>Yang Sudah Menjadi Partner Kami</p>
          </div>
        </section>
        <div className="btn-group d-flex justify-items-center" role="group" aria-label="Button group name">
          <button type="button" className="btn btn-success p-3" onClick={() => setStatus("toko")}>
            Daftar Toko
          </button>
          <button type="button" className="btn btn-success p-3" onClick={() => setStatus("pabrik")}>
            Daftar Pabrik
          </button>
        </div>
        {status === "toko" ? (
          <section>
            <h2 className="fw-bold mb-4">Daftar Nama Toko</h2>
            <Toko />
          </section>
        ) : (
          <section>
            <h2 className="fw-bold mb-4">Daftar Nama Pabrik</h2>
            <Pabrik />
          </section>
        )}

        <section>
          <HargaKomoditas />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TaniShop;
