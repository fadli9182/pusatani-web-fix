import React from "react";
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";

const Promo = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 1, stiffness: 120 }}>
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
          </div>
          <div className="d-flex flex-row gap-5 justify-content-center align-items-center mt-4">
            <Link to={"/daftartoko"}>
              <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="btn--login" style={{ textDecoration: "none" }}>
                Daftarkan Toko
              </motion.button>
            </Link>
            <Link to={"/daftarpabrik"}>
              <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="btn--login" style={{ textDecoration: "none" }}>
                Daftarkan Pabrik
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Promo;
