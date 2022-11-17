import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import homeBg from "../asset/image/homeBg.png";
import Card from "../asset/image/card.png";
import Main from "../asset/image/main.png";
import Yanto from "../asset/image/yanto.png";
import Logo from "../asset/image/Logo.png";
import TypewriterComponent from "typewriter-effect";
import { Link } from "react-router-dom";
import G1 from "../asset/image/g1.png";
import G2 from "../asset/image/g2.png";
import G3 from "../asset/image/g3.png";
import I1 from "../asset/image/cepat1.png";
import I2 from "../asset/image/cepat2.png";
import I3 from "../asset/image/cepat3.png";

function Homepage() {
  // const [state] = useState({
  //   title: "Anda Pemilik",
  //   titletwo: "Ayo Bergabung Bersama Kami!",
  //   titlethree:
  //     "Bergabung sekarang untuk meningkatkan kesejahteraan petani dan memberantas oknum tengkulak yang tidak bertanggung jawab.Dan nikmati berbagai manfaat dari PusaTani, seperti informasi seputar pertanian hingga penyaluran gabah dan beras. Mari bersama mewujudkan ekosistem pertanian yang kuat!",
  // });
  // console.log(state);

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
            <h2 className="text-center mb-5">Solusi Untuk Lahan pertanianmu</h2>
            <br />
          </div>
          <div className="col-md-7">
            <h3 className="py-3">Tujuan Utama Kami</h3>
            <p>Kami bertekad untuk memenuhi segala kebutuhan pertanian demi meningkatkan kesejahteraan para petani. Bergabung bersama kami dan dapatkan solusi dari setiap masalah pertanian Anda.</p>
            <div className="row py-3">
              <div className="col-md-6 py-3 d-flex flex-row align-items-center">
                <img src={I1} alt="" />
                <p className="ps-2 m-0">Mempercepat Panen</p>
              </div>
              <div className="col-md-6 py-3 d-flex flex-row align-items-center">
                <img src={I2} alt="" />
                <p className="ps-2 m-0">Menjaga Kualitas</p>
              </div>
              <div className="col-md-6 d-flex flex-row align-items-center">
                <img src={I3} alt="" />
                <p className="ps-2 m-0">Distribusi Lancar</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="row">
              <div className="col-md-12">
                <img className="img-fluid w-100" src={G1} alt="" />
              </div>

              <div className="col-md-6 py-3">
                <img className="img-fluid w-100" src={G2} alt="" />
              </div>
              <div className="col-md-6 py-3 ">
                <img className="img-fluid w-100" src={G3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row mx-auto  px-5 g-3">
            <div className="col-md-4">
              <div className="card text-light g-3" style={{ width: "18rem" }}>
                <img src={Card} className="card-img" alt="..." />
                <div className="card-img-overlay">
                  <h5 className="card-title py-3">Tani Info</h5>
                  <p className="card-text">Wadah edukasi dan informasi yang bertujuan untuk menjadi panduan bagi para petani yang ingin memulai usaha bertani dan membantu mewujudkan kemudahan bagi para petani</p>
                  <p className="card-text py-1">
                    <Link to={"/daftartoko"} className="btn--login" style={{ textDecoration: "none" }}>
                      Selengkapnya
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-light" style={{ width: "18rem" }}>
                <img src={Card} className="card-img" alt="..." />
                <div className="card-img-overlay">
                  <h5 className="card-title py-5">Tani Shop</h5>
                  <p className="card-text">Mempermudah para petani untuk mencari pabrik dan kios yang dibutuhkan</p>
                  <p className="card-text py-2">
                    <Link to={"/daftartoko"} className="btn--login" style={{ textDecoration: "none" }}>
                      Selengkapnya
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-light" style={{ width: "18rem" }}>
                <img src={Card} className="card-img" alt="..." />
                <div className="card-img-overlay">
                  <h5 className="card-title py-5">Aksebilitas</h5>
                  <p className="card-text">Mempermudah para petani untuk mengakses fitur-fitur dan mendapatkan informasi</p>
                  <p className="card-text py-2">
                    <Link to={"/daftartoko"} className="btn--login" style={{ textDecoration: "none" }}>
                      Unduh Aplikasi
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="py-5">
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
              <Link to={"/about"} className="btn--login" style={{ textDecoration: "none" }}>
                Tentang Kami
              </Link>
            </div>
          </div>
          <img className="col-md-6" src={Main} alt="" />
        </div>
      </div>
      {/* testi */}
      <div className="testi py-1">
        <div className="judul--testi">
          <h1>Testimoni Mitra</h1>
          <p>Sekilas hasil Testimoi mereka yang sudah bergabung dengan PusaTani</p>
        </div>
        <div className="row ">
          <div className="col-md-12 d-flex justify-content-center ">
            <div className="card mb-3" style={{ maxWidth: "80%", justifyContent: "center" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={Yanto} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body py-3">
                    <h5 className="card-title py-3">Yanto</h5>
                    <h5 className="card-title2 py-3">Petani, Zimbabwe</h5>
                    <p className="card-text">“Bergabung Dengan PusaTani tidak ribet dan sangat mudah dan sangat banyak membantu dan mempermudah kami para petani”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* foot */}
      <div className="container">
        <div className="row py-3">
          <div className="col-md-3">
            <img src={Logo} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="text col-md-6">
            <h3>Ingin Menjadi Petani yang efektif dan sukses?</h3>
            <h2>Segera Unduh Aplikasi PusaTanI di Handphonemu!</h2>
            <p>
              Menjadi Petani yang Efektif dan Efesien, Mari Bergabung dengan mengunduh aplikasi kami di Handphonemu! untuk memenuhi kebutuhan petani Indonesia menuju ekosistem pertanian yang lebih kuat. Buka aplikasi untuk mendapatkan
              informasi seputar pertanian.
            </p>
          </div>
          <div className="col-md-3 d-flex align-items-center">
            <Link to={"/"} className="btn--login" style={{ textDecoration: "none" }}>
              Unduh Aplikasi
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default Homepage;
