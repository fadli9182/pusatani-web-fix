import React, { useState } from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import homeBg from "../asset/image/homeBg.png";
import TypewriterComponent from "typewriter-effect";

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
            <button className="btn--login">Daftar Sekarang</button>
          </div>
        </div>
      </div>
      <br />
      {/* {/card/} */}
      <div className="container content--home">
        <div className="row justify-content-center">
          <h2 className="text-align-center">Solusi Untuk Lahan pertanianmu</h2>
          <br />
          <h3>Kami bertekad untuk memenuhi segala kebutuhan pertanian demi meningkatkan kesejahteraan para petani. Bergabung bersama kami dan dapatkan solusi dari setiap masalah pertanian Anda.</h3>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
