import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import homeBg from "../asset/image/homeBg.png";

function Homepage() {
  return (
    <>
      <div className="bg" style={{ background: `url(${homeBg})`, backgroundSize: "cover", backgroundAttachment: "fixed", height: "550px" }}>
        <Header />
        <div className="hero--home">
          <h1>
            Selamat Datang
            <br />
            Di PusaTani
          </h1>
          <h3>Pusat Informasi Petani</h3>
          <h4>Dengan Teknologi Memberi Solusi Untuk Petani</h4>
          <button className="btn--login btn--home">Unduh Aplikasi</button>
        </div>
      </div>
      <div className="container" style={{ height: "1000px" }}>
        <h1>Hello World</h1>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
