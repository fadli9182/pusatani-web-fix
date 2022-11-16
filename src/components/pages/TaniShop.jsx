import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import "../asset/css/tanishop.css";
import Foto1 from "../asset/image/hijrahpupuk.jpeg";
import Foto2 from "../asset/image/Pberas.jpeg";
import Foto3 from "../asset/image/gabah.png";
import Foto4 from "../asset/image/beras-giling.png";
import Foto5 from "../asset/image/beras_premium.png";
import Foto6 from "../asset/image/beras_medium.png";
import Foto7 from "../asset/image/beras_termurah.png";

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
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">
                  <button className=" btn btn-success">Selengkapnya</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="galeri">
          <div className="galeri">
            <div className="judul-home text-center">
              <h1>Harga Rata-Rata Komoditas</h1>
              <h3>Harga Tigkat Pengecer</h3>
            </div>
            <div className="foto">
              <div className="row text-center">
                <div className="col-md-6">
                  <div className="foto1">
                    <img src={Foto3} alt="" />
                    <div className="deskripsi">
                      <h3>Gabah Tigkat Petani</h3>
                      <hr />
                      <p>Rp. 4.550/Kg</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="foto1">
                    <img src={Foto4} alt="" />
                    <div className="deskripsi">
                      <h3>Beras di penggilingan</h3>
                      <hr />
                      <p>Rp. 8.800/Kg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="judul-home mt-5 mb-5 text-center">
              <h3>Harga Tigkat Pengecer</h3>
            </div>
            <div className="foto">
              <div className="row text-center">
                <div className="col-md-6">
                  <div className="foto1">
                    <img src={Foto5} alt="" />
                    <div className="deskripsi">
                      <h3>Beras Premium</h3>
                      <hr />
                      <p>Rp. 12.000/Kg</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="foto1">
                    <img src={Foto6} alt="" />
                    <div className="deskripsi">
                      <h3>Beras Medium</h3>
                      <hr />
                      <p>Rp. 10.500/Kg</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="foto1">
                    <img src={Foto7} alt="" />
                    <div className="deskripsi">
                      <h3>Beras Termurah</h3>
                      <hr />
                      <p>Beras Termurah</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TaniShop;
