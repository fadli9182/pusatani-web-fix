import React from "react";
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import Main from "../../asset/image/main.png";

const HomeTentang = () => {
  return (
    <>
      <section>
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
                      strings: ["PusaTanI", "Pusat Informasi Petani"],
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
      </section>
    </>
  );
};

export default HomeTentang;
