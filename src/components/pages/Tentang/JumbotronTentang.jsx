import React from "react";
import mobile1 from "../../asset/image/mobile1.png";
import mobile2 from "../../asset/image/mobile2.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const JumbotronTentang = () => {
  return (
    <>
      <div className="jumbo--about">
        <div className="row my-5">
          <div className="col-lg-6 col-md-12 mb-5 d-flex justify-content-center align-items-center">
            <motion.img initial={{ scale: 1, rotate: -13 }} whileHover={{ scale: 1.1 }} className="mobile1" src={mobile1} alt="" />
            <motion.img initial={{ scale: 1, rotate: 13 }} whileHover={{ scale: 1.1 }} className="mobile2" src={mobile2} alt="" />
          </div>
          <div className="col-lg-6 col-md-12 mt-5">
            <h1 className="fw-bold text--green">Kenapa Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?</h1>
            <p>Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak bisa submit data, kadang dibukanya lambat, kadang tiba-tiba logout sendiri, untung gak berdua.</p>
            <div className="row mt-5">
              <div className="col-6">
                <h5>Total Download</h5>
                <h2 className="fw-bold text--green">
                  <CountUp end={1828000} decimal="." delay={"8"} separator="." duration={1.5} />
                </h2>
              </div>
              <div className="col-6">
                <h5>Total Pengguna</h5>
                <h2 className="fw-bold text--green">
                  <CountUp end={2120200} decimal="." delay={"5"} separator="." duration={1.5} />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JumbotronTentang;
