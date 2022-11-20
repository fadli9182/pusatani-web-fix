import React from "react";
import mobile3 from "../../asset/image/mobile3.png";
import { AiOutlineAmazon, AiOutlineCloud, AiOutlineSmile, AiOutlineThunderbolt } from "react-icons/ai";
import { motion } from "framer-motion";

const PromoTentang = () => {
  return (
    <>
      <div className="row mb-5">
        <div className="col-md-6">
          <h1 className="fw-bold text--green">Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini? Jadi penasaran nich~</h1>
          <p>Aplikasi sekeren ini akan membuat kamu tidak perlu menghafal harga padi dan pupuk yang ada di Indramayu</p>
          <div className="row">
            <div className="col-6">
              <div className="icons" style={{ fontSize: "40px" }}>
                <AiOutlineCloud />
              </div>
              <h4 className="fw-bold">Tersimpan Otomatis</h4>
              <p>Data anda akan tersimpan otomatis (kayanya)</p>
            </div>
            <div className="col-6">
              <div className="icons" style={{ fontSize: "40px" }}>
                <AiOutlineThunderbolt />
              </div>
              <h4 className="fw-bold">Akses Cepat</h4>
              <p>Anda dapat mengakses aplikasi secepat Agus berlari</p>
            </div>
            <div className="col-6">
              <div className="icons" style={{ fontSize: "40px" }}>
                <AiOutlineAmazon />
              </div>
              <h4 className="fw-bold">Amazon Cupu</h4>
              <p>Amazon mah ga ada apa apanya</p>
            </div>
            <div className="col-6">
              <div className="icons" style={{ fontSize: "40px" }}>
                <AiOutlineSmile />
              </div>
              <h4 className="fw-bold">Pelanggan Puas</h4>
              <p>Pelanggan puas, om Agus senang</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 promoBg">
          <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.5 }} src={mobile3} alt="mobile3" width={"250px"} style={{ borderRadius: "20px" }} />
        </div>
      </div>
    </>
  );
};

export default PromoTentang;
