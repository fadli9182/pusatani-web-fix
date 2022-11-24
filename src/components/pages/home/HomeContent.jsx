import React from "react";
import { Link } from "react-router-dom";
import Card from "../../asset/image/card.webp";
import Card2 from "../../asset/image/card2.webp";
import Card3 from "../../asset/image/card4.webp";
import { motion } from "framer-motion";
import "./home.css";

const HomeContent = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 1, stiffness: 120 }} className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3 d-flex justify-content-center">
          <div className="card text-light shadow">
            <img src={Card2} className="card-img" alt="..." />
            <div className="card-img-overlay d-flex align-items-end flex-wrap">
              <h5 className="card-title py-3">Tani Info</h5>
              <p className="card-text article--text">Wadah edukasi dan informasi yang bertujuan untuk menjadi panduan bagi para petani yang ingin memulai usaha bertani dan membantu mewujudkan kemudahan bagi para petani</p>
              <p className="card-text py-1">
                <Link to={"/info"}>
                  <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="btn--login" style={{ fontSize: "12px" }}>
                    Selengkapnya
                  </motion.button>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3 d-flex justify-content-center">
          <div className="card text-light">
            <img src={Card3} className="card-img" alt="..." />
            <div className="card-img-overlay d-flex align-items-end flex-wrap">
              <h5 className="card-title py-3">Tani Shop</h5>
              <p className="card-text article--text">Mempermudah para petani untuk mencari pabrik dan kios yang dibutuhkan</p>
              <p className="card-text py-2">
                <Link to={"/shop"}>
                  <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="btn--login" style={{ fontSize: "12px" }}>
                    Selengkapnya
                  </motion.button>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 my-3 d-flex justify-content-center">
          <div className="card text-light">
            <img src={Card} className="card-img" alt="..." />
            <div className="card-img-overlay d-flex align-items-end flex-wrap">
              <h5 className="card-title py-3">Aksebilitas</h5>
              <p className="card-text article--text">Mempermudah para petani untuk mengakses fitur-fitur dan mendapatkan informasi</p>
              <p className="card-text py-2">
                <Link to={""}>
                  <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="btn--login" style={{ fontSize: "12px" }}>
                    Unduh Aplikasi
                  </motion.button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HomeContent;
