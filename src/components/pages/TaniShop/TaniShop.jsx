import React from "react";
import "./tanishop.css";
import Foto1 from "../../asset/image/hijrahpupuk.jpeg";
import Foto2 from "../../asset/image/Pberas.jpeg";

import Header from "../../partials/header/Header";
import Footer from "../../partials/footer/Footer";
import HargaKomoditas from "./HargaKomoditas";

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
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={Foto1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Hijrah Pupuk</h5>
                <hr />
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">
                  <button className=" btn btn-success">Selengkapnya</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={Foto2} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Bulogss</h5>
                <hr />
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">
                  <button className=" btn btn-success">Selengkapnya</button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <HargaKomoditas />
      </div>
      <Footer />
    </>
  );
};

export default TaniShop;
