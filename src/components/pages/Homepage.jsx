import React, { useState } from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import homeBg from "../asset/image/homeBg.png";
import Card from "../asset/image/card.png";
import TypewriterComponent from "typewriter-effect";
import { Link } from "react-router-dom";

function Homepage() {
  const [state] = useState({
    title: "Anda Pemilik",
    titletwo: "Ayo Bergabung Bersama Kami!",
    titlethree:
      "Bergabung sekarang untuk meningkatkan kesejahteraan petani dan memberantas oknum tengkulak yang tidak bertanggung jawab.Dan nikmati berbagai manfaat dari PusaTani, seperti informasi seputar pertanian hingga penyaluran gabah dan beras. Mari bersama mewujudkan ekosistem pertanian yang kuat!",
  });

  return (
    <>
      <div className="bg" style={{ background: `url(${homeBg})`, backgroundSize: "cover", backgroundAttachment: "fixed", height: "100%", width: "100%" }}>
        <Header />
        <div className="hero--home">
          <h1 className="pt-5">
            Selamat Datang
            <br />
            Di PusaTani
          </h1>
          <h3>Pusat Informasi Petani</h3>
          <h4>Dengan Teknologi Memberi Solusi Untuk Petani</h4>
          <button className="btn--login btn--home">Unduh Aplikasi</button>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12" style={{ padding: "100px 200px" }}>
            <h2 style={{ fontWeight: "700" }}>
              Kamu Pemilik
              <span style={{ color: "#2c774b" }}>
                <TypewriterComponent
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: ["Toko Pupuk?", "Pabrik?"],
                  }}
                />{" "}
              </span>
            </h2>
            <h2>Ayo Bergabung Bersama Kami!</h2>
            <p>
              Bergabung sekarang untuk meningkatkan kesejahteraan petani dan memberantas oknum tengkulak yang tidak bertanggung jawab. Dan nikmati berbagai manfaat dari PusaTani, seperti informasi seputar pertanian hingga penyaluran gabah
              dan beras. Mari bersama mewujudkan ekosistem pertanian yang kuat!
            </p>
            <Link to={"/daftartoko"} className="btn--login" style={{ textDecoration: "none" }}>
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
      <br />
      {/* {/card/} */}
      <div className="container content--home">
        <div className="row mx-auto">
          <div>
            <h2 className="text-center mb-3">Solusi Untuk Lahan pertanianmu</h2>
            <br />
          </div>
          <div className="col-md-4">
            <h3 className="py-3">Tujuan Utama Kami</h3>
            <p>Kami bertekad untuk memenuhi segala kebutuhan pertanian demi meningkatkan kesejahteraan para petani. Bergabung bersama kami dan dapatkan solusi dari setiap masalah pertanian Anda.</p>
          </div>
          <div className="col-md-4">
            <img src="" alt="" />
            <div className="col-md-4"></div>
          </div>
        </div>
        <div className="row mx-auto py-3 g-3">
          <div class="card text-light" style={{ width: "18rem" }}>
            <img src={Card} class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title py-3">Tani Info</h5>
              <p class="card-text">Wadah edukasi dan informasi yang bertujuan untuk menjadi panduan bagi para petani yang ingin memulai usaha bertani dan membantu mewujudkan kemudahan bagi para petani</p>
              <p class="card-text py-1">
                <Link to={"/daftartoko"} className="btn--login" style={{ textDecoration: "none" }}>
                  Selengkapnya
                </Link>
              </p>
            </div>
          </div>
          <div class="card text-light" style={{ width: "18rem" }}>
            <img src={Card} class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title py-5">Tani Shop</h5>
              <p class="card-text">Mempermudah para petani untuk mencari pabrik dan kios yang dibutuhkan</p>
              <p class="card-text py-2">
                <Link to={"/daftartoko"} className="btn--login" style={{ textDecoration: "none" }}>
                  Selengkapnya
                </Link>
              </p>
            </div>
          </div>
          <div class="card text-light" style={{ width: "18rem" }}>
            <img src={Card} class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title py-5">Aksebilitas</h5>
              <p class="card-text">Mempermudah para petani untuk mengakses fitur-fitur dan mendapatkan informasi</p>
              <p class="card-text py-2">
                <Link to={"/daftartoko"} className="btn--login" style={{ textDecoration: "none" }}>
                  Unduh Aplikasi
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* main */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12" style={{ padding: "100px 200px" }}>
            <h2 style={{ fontWeight: "700" }}>
              <span style={{ color: "#2c774b" }}>
                <TypewriterComponent
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: ["PusaTanI"],
                  }}
                />{" "}
              </span>
            </h2>
            <h4>Ayo Bergabung Bersama Kami!</h4>
            <p>Penyedia Informasi Seputar Pertanian Padi di Kabupaten Indramayu</p>
            <Link to={"/daftartoko"} className="btn--login" style={{ textDecoration: "none" }}>
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
