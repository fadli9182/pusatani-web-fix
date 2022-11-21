import React from "react";
import { motion } from "framer-motion";
import G1 from "../../asset/image/g1.png";
import G2 from "../../asset/image/g2.png";
import G3 from "../../asset/image/g3.png";
import I1 from "../../asset/image/cepat1.png";
import I2 from "../../asset/image/cepat2.png";
import I3 from "../../asset/image/cepat3.png";

const Tujuan = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 1, stiffness: 120 }}>
        <div className="row">
          <div>
            <h2 className="text-center mb-3 text--green" style={{ fontWeight: "bold" }}>
              Solusi Untuk Lahan Pertanianmu
            </h2>
            <br />
          </div>
          <div className="col-md-7">
            <h3 className="py-3">Tujuan Utama Kami</h3>
            <p>Kami bertekad untuk memenuhi segala kebutuhan pertanian demi meningkatkan kesejahteraan para petani. Bergabung bersama kami dan dapatkan solusi dari setiap masalah pertanian Anda.</p>
            <div className="row py-3">
              <div className="col-md-6 py-3 d-flex flex-row align-items-center">
                <img src={I1} alt="" />
                <p className="ps-2 m-0">Mempercepat Panen</p>
              </div>
              <div className="col-md-6 py-3 d-flex flex-row align-items-center">
                <img src={I2} alt="" />
                <p className="ps-2 m-0">Menjaga Kualitas</p>
              </div>
              <div className="col-md-6 d-flex flex-row align-items-center">
                <img src={I3} alt="" />
                <p className="ps-2 m-0">Distribusi Lancar</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="row">
              <div className="col-md-12">
                <motion.img
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                  className="img-fluid w-100"
                  src={G1}
                  alt=""
                />
              </div>

              <div className="col-md-6 py-3">
                <motion.img
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                  className="img-fluid w-100"
                  src={G2}
                  alt=""
                />
              </div>
              <div className="col-md-6 py-3 ">
                <motion.img
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                  className="img-fluid w-100"
                  src={G3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tujuan;
