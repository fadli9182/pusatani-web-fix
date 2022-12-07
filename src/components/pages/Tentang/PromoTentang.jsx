import React from "react";
import mobile3 from "../../asset/image/mobile3.png";
import { AiOutlineCloud, AiOutlineMessage, AiOutlineSmile, AiOutlineThunderbolt } from "react-icons/ai";
import { motion } from "framer-motion";

const PromoTentang = () => {
  return (
    <>
      <div className="row mb-5">
        <div className="col-md-6">
          <h1 className="fw-bold text--green">Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini?</h1>
          <p>Aplikasi sekeren ini akan membuat kamu tidak perlu menghafal harga padi dan pupuk yang ada di Indramayu</p>
          <div className="row">
            <div className="col-6">
              <div className="icons" style={{ fontSize: "40px" }}>
                <AiOutlineCloud />
              </div>
              <h4 className="fw-bold">Tersimpan Otomatis</h4>
              <p>Data anda akan tersimpan otomatis</p>
            </div>
            <div className="col-6">
              <div className="icons" style={{ fontSize: "40px" }}>
                <AiOutlineThunderbolt />
              </div>
              <h4 className="fw-bold">Akses Cepat</h4>
              <p>Anda dapat mengakses aplikasi dengan cepat</p>
            </div>
            <div className="col-6">
              <div className="icons" style={{ fontSize: "40px" }}>
                <AiOutlineMessage />
              </div>
              <h4 className="fw-bold">Berikirim Pesan</h4>
              <p>Anda bisa berkirim pesan lewat whatsapp langsung dengan pemilik toko</p>
            </div>
            <div className="col-6">
              <div className="icons" style={{ fontSize: "40px" }}>
                <AiOutlineSmile />
              </div>
              <h4 className="fw-bold">Pelayanan Terbaik</h4>
              <p>Kami akan memberikan pelayanan terbaik untuk anda!</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 promoBg">
          <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} src={mobile3} alt="mobile3" width={"250px"} style={{ borderRadius: "20px" }} />
        </div>
      </div>
    </>
  );
};

export default PromoTentang;
