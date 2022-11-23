import React from "react";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";

const HeroHome = () => {
  return (
    <>
      <div className="hero--home">
        <h1 className="pt-5">
          Selamat Datang
          <span className="d-flex gap-3" style={{ fontSize: "46px" }}>
            Di{" "}
            <span style={{ fontSize: "46px", fontWeight: "700", textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white" }}>
              <TypewriterComponent
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: ["PusaTani", "Pusat Informasi Petani"],
                }}
              />
            </span>
          </span>
        </h1>
        <div className="hero--home-desc">
          <p>Pusat Informasi Petani</p>
          <p>
            Dengan <strong className="text--green">Teknologi</strong> Memberi <strong className="text--green">Solusi</strong> Untuk Petani
          </p>
        </div>
        <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="btn--login btn--home">
          Unduh Aplikasi
        </motion.button>
      </div>
    </>
  );
};

export default HeroHome;
