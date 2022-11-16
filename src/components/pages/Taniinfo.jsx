import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import berita from "../asset/image/berita.png";
import TypewriterComponent from "typewriter-effect";
import("../asset/css/taniinfo.css");

const Taniinfo = () => {
  return (
    <>
      <div className="info--bg">
        <Header />
        <div className="text-center judul--info">
          <h1>Tani Info</h1>
          <p>Sekilas Informasi Teknologi dan Pertanian</p>
        </div>
      </div>
      <div className="container info--body">
        <div className="text-center pb-5">
          <h1 style={{ fontWeight: "700" }}>Berita</h1>
          <p>Berita informasi tentang Teknologi dan teknik Pertanian</p>
        </div>
        {/* body */}
        <div className="row p-2 m-2">
          <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <div className="card shadow">
              <img className="img-fluid" src={berita} alt="berita" />
              <div className="p-4">
                <h5 style={{ fontWeight: "bold" }}>Agricultural Leader</h5>
                <p style={{ fontSize: "12px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quae repellendus dignissimos deserunt optio corrupti, dolore aperiam! Eos, voluptatum placeat.</p>
                <button className="btn btn--login text-light">Lihat Selengkapnya</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column jumlah--content">
        <div class="row justify-content-center align-items-center g-2">
          <div className="col-12 text-center">
            <h1 style={{ fontSize: "48px" }}>Jumlah Petani Di Indramayu</h1>
          </div>
          <div class="col-4 text-center" style={{ borderRight: "4px solid rgba(0,0,0,.5)", padding: " 0 30px" }}>
            <h1>36</h1>
            <h5>
              Petani <br /> Mandiri
            </h5>
          </div>
          <div class="col-4 text-center" style={{ borderRight: "4px solid rgba(0,0,0,.5)", padding: " 0 30px" }}>
            <h1>112</h1>
            <h5>
              Petani <br /> Menengah
            </h5>
          </div>
          <div class="col-4 text-center">
            <h1>3000</h1>
            <h5>
              Petani <br /> Tradisional
            </h5>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12" style={{ padding: "100px 200px" }}>
            <h2 style={{ fontWeight: "700" }}>
              Anda Pemilik
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
            <button className="btn--login">Daftar Sekarang</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Taniinfo;
