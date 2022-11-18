import React from "react";
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";

const Promo = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 daftar--home">
            <h2 style={{ fontWeight: "700", fontSize: "48px" }}>
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
              Bergabung sekarang untuk meningkatkan <strong>kesejahteraan petani</strong> dan memberantas oknum tengkulak yang tidak bertanggung jawab. Dan nikmati berbagai manfaat dari <strong>PusaTani</strong>, seperti informasi seputar
              pertanian hingga penyaluran gabah dan beras. Mari bersama mewujudkan ekosistem pertanian yang kuat!
            </p>
            <Link to={"/register"} className="btn--login" style={{ textDecoration: "none" }}>
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
