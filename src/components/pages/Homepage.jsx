import React, { useState } from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import homeBg from "../asset/image/homeBg.png";
import TypewriterComponent from "typewriter-effect";

function Homepage() {
  const [state] = useState({
    title: "Kamu",
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
          <button className="btn--login btn--home" >Unduh Aplikasi</button>
        </div>
      </div>
      <div className="container mt-5 intro">
        <div className="Home-intro text--center">
          <h4>
            <div className="title">
              {state.title}
              <div className="text--green">
                <TypewriterComponent
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: ["Toko Pupuk?", "Pabrik?"],
                  }}
                />
              </div>
            </div>
            <br />
            <div className="titletwo">{state.titletwo}</div>
            <br />
            <div className="titlethree">{state.titlethree}</div>
          </h4>
        </div>
      </div>
      {/* testi */}
      <div className="container mt-5 text">
        <div>
          <h1 className="">Solusi Untuk Lahan pertanianmu</h1>
          <br />
          <h2>Kami bertekad untuk memenuhi segala kebutuhan pertanian demi meningkatkan kesejahteraan para petani. Bergabung bersama kami dan dapatkan solusi dari setiap masalah pertanian Anda.</h2>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
