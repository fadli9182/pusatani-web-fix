import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/image/Logo.png";

const HomeUnduh = () => {
  return (
    <>
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
    </>
  );
};

export default HomeUnduh;
