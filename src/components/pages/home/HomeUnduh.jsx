import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/image/Logo.png";
import { motion } from "framer-motion";

const HomeUnduh = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 1, stiffness: 120 }} className="row">
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
          <Link to={"/"}>
            <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.5 }} className="btn--login" style={{ fontSize: "12px" }}>
              Unduh Aplikasi
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeUnduh;
